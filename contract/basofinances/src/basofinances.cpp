#include "basofinances.hpp"

namespace vexdt {
    void basofinances::stake(const eosio::name &from, const eosio::asset &quantity) {

        auto global = _global.get_or_default();
        eosio_assert(global.stopState == 0, "In stop state!");

        if (from == eosio::name(BASOADMIN) || from == eosio::name(BASOTOKEN) || from == eosio::name(VEXTOKEN)) {
            return;
        }
        require_auth( from );

        eosio_assert( quantity.is_valid(), "invalid quantity");
        eosio_assert( quantity.amount > 0, "must transfer positive quantity");

        bool isvex = false;
        bool isusdv = false;
        bool isvyn = false;
        bool isdjv = false;
        if(quantity.symbol == VEX_SYMBOL)
        {
            isvex = true;
        }
        else if(quantity.symbol == USDV_SYMBOL)
        {
            isusdv = true;
        }
        else if(quantity.symbol == VYN_SYMBOL)
        {
            isvyn = true;
        }
        else
        {
            isdjv = true;
        }
        auto indexholder = _users.get_index<"holder"_n>();
        auto itr = indexholder.lower_bound(from.value);
        if (itr->holder.value != from.value)
        {
            _users.emplace(eosio::name(BASOADMIN), [&](auto &r) {
                    r.id = _users.available_primary_key();   
                    r.holder = from;
                    r.vex_stake =  isvex ? quantity : eosio::asset(0, VEX_SYMBOL);
                    r.usdv_stake = isusdv ? quantity : eosio::asset(0, USDV_SYMBOL);
                    //add vyn
                    r.vyn_stake = isvyn ? quantity : eosio::asset(0, VYN_SYMBOL);
                    r.djv_stake = isdjv ? quantity : eosio::asset(0, DJV_SYMBOL);
                    //r.available_bonus = eosio::asset(0, VYN_SYMBOL);

                    r.vex_bonus = eosio::asset(0, BASO_SYMBOL);
                    r.usdv_bonus = eosio::asset(0, BASO_SYMBOL);
                    r.vyn_bonus = eosio::asset(0, BASO_SYMBOL);
                    r.djv_bonus = eosio::asset(0, BASO_SYMBOL);
                      
                    auto global = _global.get_or_default();
                    if(isvex)
                    {
                        global.total_staked_vex += quantity;
                    }
                    else if(isusdv)
                    {
                        global.total_staked_usdv += quantity;
                    }
                    //add vyn
                    else if(isvyn)
                    {
                        global.total_staked_vyn += quantity;
                    }
                    else
                    {
                        global.total_staked_djv += quantity;
                    }
                    
                    global.maxstakeid = r.id;
                    _global.set(global,eosio::name(BASOADMIN));                  
                    });
        } else {             
            auto  itrmd = _users.find(itr->id);
            _users.modify(itrmd,eosio::name(BASOADMIN), [&](auto &r) 
            {
                    if(isvex)
                    {
                        r.vex_stake += quantity;
                    }
                    else if(isusdv)
                    {
                        r.usdv_stake += quantity;
                    }
                    //add vyn
                    else if(isvyn)
                    {
                        r.vyn_stake += quantity;
                    }
                    else
                    {
                        r.djv_stake += quantity;
                    }

                    auto global = _global.get_or_default();
                    if(isvex)
                    {
                        global.total_staked_vex += quantity;
                    }
                    else if(isusdv)
                    {
                        global.total_staked_usdv += quantity;
                    }
                    //add vyn
                    else if(isvyn)
                    {
                        global.total_staked_vyn += quantity;
                    }
                    else
                    {
                        global.total_staked_djv += quantity;
                    }
                    _global.set(global,eosio::name(BASOADMIN)); 
            }); 
        }
    }

    void basofinances::claim(const eosio::name &from, const std::string &pooltype) {

        auto global = _global.get_or_default();
        eosio_assert(global.stopState == 0, "In stop state!");
        require_auth( from );

        auto indexholder = _users.get_index<"holder"_n>();
        auto itr = indexholder.lower_bound(from.value);
        eosio_assert(itr->holder.value == from.value, "sorry, no bonus for you."); 

        auto available_darw_balance = eosio::asset(0, BASO_SYMBOL);
        if(pooltype == "VEX")
        {
            available_darw_balance = itr->vex_bonus;
        }
        else if(pooltype == "USDV")
        {
            available_darw_balance = itr->usdv_bonus;
        }
        else if(pooltype == "VYN")
        {
            available_darw_balance = itr->vyn_bonus;
        }
        else
        {
            available_darw_balance = itr->djv_bonus;
        }

        eosio_assert(available_darw_balance.amount > 0, "already drawed.");
        eosio_assert(available_darw_balance.amount < max_amount, "trandfer bonus amount overflow !");

        auto  itrmd = _users.find(itr->id);
        _users.modify(itrmd,eosio::name(BASOADMIN), [&](auto &r) 
        {
            //r.available_bonus = eosio::asset(0, VYN_SYMBOL);
            auto zerobalance = eosio::asset(0, BASO_SYMBOL);
            if(pooltype == "VEX")
            {
                r.vex_bonus = zerobalance;
            }
            else if(pooltype == "USDV")
            {
                r.usdv_bonus = zerobalance;
            }
            else if(pooltype == "VYN")
            {
                r.vyn_bonus = zerobalance;
            }
            else
            {
                r.djv_bonus = zerobalance;
            }
        });

        action(
                permission_level{ eosio::name(BASODRAW), eosio::name("active")},
                eosio::name(BASOTOKEN),
                eosio::name("transfer"),
                std::make_tuple(eosio::name(BASODRAW),from, available_darw_balance, std::string("claim bonus"))
            ).send();
        
    }

    void basofinances::exit(const eosio::name &from, const std::string &pooltype) {

        auto global = _global.get_or_default();
        eosio_assert(global.stopState == 0, "In stop state!");
        require_auth( from );

        auto indexholder = _users.get_index<"holder"_n>();
        auto itr = indexholder.lower_bound(from.value);
        eosio_assert(itr->holder.value == from.value, "sorry, no bonus for you."); 

        bool isvex = false;
        bool isusdv = false;
        bool isvyn = false;
        bool isdjv = false;
        auto available_darw_balance = eosio::asset(0, BASO_SYMBOL);
        auto paybacktoken = eosio::asset(0, VEX_SYMBOL);
        if(pooltype == "VEX")
        {
            available_darw_balance = itr->vex_bonus;
            paybacktoken = itr->vex_stake;
            isvex = true;
        }
        else if(pooltype == "USDV")
        {
            available_darw_balance = itr->usdv_bonus;
            paybacktoken = itr->usdv_stake;
            isusdv = true;
        }
        else if(pooltype == "VYN")
        {
            available_darw_balance = itr->vyn_bonus;
            paybacktoken = itr->vyn_stake;
            isvyn = true;
        }
        else
        {
            available_darw_balance = itr->djv_bonus;
            paybacktoken = itr->djv_stake;
            isdjv = true;
        }

        eosio_assert(available_darw_balance.amount < max_amount, "trandfer bonus amount overflow !");


        if(pooltype == "VEX")
        {
            global.total_staked_vex -= paybacktoken;
            eosio_assert(global.total_staked_vex.amount < max_amount, "total_staked_vex amount overflow !");
        }
        else if(pooltype == "USDV")
        {
            global.total_staked_usdv -= paybacktoken;
            eosio_assert(global.total_staked_usdv.amount < max_amount, "total_staked_usdv amount overflow !");
        }
        else if(pooltype == "VYN")
        {
            global.total_staked_vyn -= paybacktoken;
            eosio_assert(global.total_staked_vyn.amount < max_amount, "total_staked_vyn amount overflow !");
        }
        else
        {
            global.total_staked_djv -= paybacktoken;
            eosio_assert(global.total_staked_djv.amount < max_amount, "total_staked_djv amount overflow !");
        }
        _global.set(global,eosio::name(BASOADMIN)); 


        //返还抵押币
        if(paybacktoken.amount > 0)
        {
            action(permission_level{eosio::name(BASOSTAKE), eosio::name("active")},
                (isvex ? eosio::name(VEXTOKEN) : (isdjv ? eosio::name(DJVTOKEN) : eosio::name(USDVTOKEN))),
                eosio::name("transfer"),
                std::make_tuple(eosio::name(BASOSTAKE), from, paybacktoken, std::string("get back staked asset")))
                .send();
        }

        if(available_darw_balance.amount > 0)
        {
            action(
                permission_level{ eosio::name(BASODRAW), eosio::name("active")},
                eosio::name(BASOTOKEN),
                eosio::name("transfer"),
                std::make_tuple(eosio::name(BASODRAW),from, available_darw_balance, std::string("claim bonus"))
            ).send();
        }  

        auto  itrmd = _users.find(itr->id);
        _users.modify(itrmd,eosio::name(BASOADMIN), [&](auto &r) 
        {
            //r.available_bonus = eosio::asset(0, VYN_SYMBOL);
            auto zerobalance = eosio::asset(0, BASO_SYMBOL);
            if(isvex)
            {
                r.vex_bonus = zerobalance;
                r.vex_stake = eosio::asset(0, VEX_SYMBOL);
            }
            else if(isusdv)
            {
                r.usdv_bonus = zerobalance;
                r.usdv_stake = eosio::asset(0, USDV_SYMBOL);
            }
            else if(isvyn)
            {
                r.vyn_bonus = zerobalance;
                r.vyn_stake = eosio::asset(0, VYN_SYMBOL);
            }
            else
            {
                r.djv_bonus = zerobalance;
                r.djv_stake = eosio::asset(0, DJV_SYMBOL);
            }
        });
    }

    void basofinances::doissue(const uint64_t &idfrom, const uint64_t &idto)
    {
        require_auth2(capi_name(eosio::name(BASOADMIN).value), capi_name(eosio::name("cron").value));
        auto global = _global.get_or_default();
        eosio_assert(global.stopState == 0 , "be stop already!");

        //判断阶段挖矿是否已挖完
        eosio_assert(global.total_mininged < STAGE_MINING_TOTAL, "The current mining has finished!");
        
        //判断按顺序执行
        eosio_assert(global.checkfromid == idfrom, "front position not finish yet!");
        if(idfrom == 0) 
        {
            auto nowtime = now();
            //120s 110s
            eosio_assert(nowtime - global.check_update_time > 110, "have update recently!");
            global.check_update_time = nowtime; 
        }
        
        auto itrbegin = _users.find(idfrom);
        eosio_assert(itrbegin != _users.end(), "id not found!");
        auto itrend = _users.find(idto);
        eosio_assert(itrend != _users.end(), "id not found!");

        for (uint64_t itrid = idfrom; itrid <= idto; ++itrid) 
        {
            auto itr = _users.find(itrid);
            if(itr != _users.end())
            {
                auto userbonus_vex = eosio::asset(0, BASO_SYMBOL);
                auto userbonus_usdv = eosio::asset(0, BASO_SYMBOL);
                auto userbonus_vyn = eosio::asset(0, BASO_SYMBOL);
                auto userbonus_djv = eosio::asset(0, BASO_SYMBOL);
                if(global.total_staked_vex.amount > 0)
                {
                    double total = global.total_staked_vex.amount;
                    double mystake = itr->vex_stake.amount;
                    userbonus_vex = global.vex_pool_reward;
                    userbonus_vex.amount *= (mystake/total);
                }
                if(global.total_staked_usdv.amount > 0)
                {
                    double total = global.total_staked_usdv.amount;
                    double mystake = itr->usdv_stake.amount;
                    userbonus_usdv = global.usdv_pool_reward;
                    userbonus_usdv.amount *= (mystake/total);
                }
                //add vyn
                if(global.total_staked_vyn.amount > 0)
                {   
                    double total = global.total_staked_vyn.amount;
                    double mystake = itr->vyn_stake.amount;
                    userbonus_vyn = global.vyn_pool_reward;
                    userbonus_vyn.amount *= (mystake/total);
                }

                if(global.total_staked_djv.amount > 0)
                {   
                    double total = global.total_staked_djv.amount;
                    double mystake = itr->djv_stake.amount;
                    userbonus_djv = global.djv_pool_reward;
                    userbonus_djv.amount *= (mystake/total);
                }
                auto  itrmd = _users.find(itr->id);

                auto leftmining = STAGE_MINING_TOTAL - global.total_mininged;

                if(userbonus_vex >= leftmining)
                {
                    userbonus_vex = leftmining;
                }
                else if(userbonus_vex + userbonus_usdv >= leftmining)
                {
                    userbonus_usdv = (leftmining - userbonus_vex);
                }
                else if(userbonus_vex + userbonus_usdv + userbonus_vyn >= leftmining)
                {
                    userbonus_vyn = (leftmining - userbonus_vex - userbonus_usdv);
                }
                else if(userbonus_vex + userbonus_usdv + userbonus_vyn +  userbonus_djv>= leftmining)
                {
                    userbonus_djv = (leftmining - userbonus_vex - userbonus_usdv - userbonus_vyn);
                }

                auto usermining = userbonus_vex + userbonus_usdv + userbonus_vyn + userbonus_djv;

                _users.modify(itrmd,eosio::name(BASOADMIN), [&](auto &r) 
                {
                    r.vex_bonus += userbonus_vex;
                    r.usdv_bonus += userbonus_usdv;
                    r.vyn_bonus += userbonus_vyn;
                    r.djv_bonus += userbonus_djv;
                    global.total_mininged += (userbonus_vex + userbonus_usdv + userbonus_vyn + userbonus_djv);
                });

                if(usermining >= leftmining)
                {
                    break;
                }
            }
        }

        //更新正在处理的id
        global.checkfromid = idto + 1;
        if(global.checkfromid > global.maxstakeid)
        {
            global.checkfromid = 0;
        }
        _global.set(global, eosio::name(BASOADMIN));
    }

    void basofinances::onTransfer(const eosio::name &from,
            const eosio::name &to,
            const eosio::extended_asset &quantity,
            const std::string &memo)
    {
        auto global = _global.get_or_default();
        eosio_assert(global.stopState == 0, "In stop state!");

        require_auth(from);

        eosio::action act = eosio::get_action( 1, 0 );
        //print(" act.amount ",act.amount);
        //print(" act.name ",act.name);
        eosio_assert( (act.account == eosio::name("vexcore")) || (act.name== eosio::name("transfer") && (act.account == eosio::name(VEXTOKEN)|| act.account == eosio::name(USDVTOKEN)|| act.account == eosio::name(DJVTOKEN))) ," Human only! ");

        if((to == eosio::name(BASOADMIN)) && (memo.substr(0, 5) == "stake") )
        {
            bool isvex = isvextoken(quantity);
            bool isusdv = isusdvtoken(quantity);
            bool isvyn = isvyntoken(quantity);
            bool isdjv = isdjvtoken(quantity);
            eosio_assert(isvex || isusdv || isvyn || isdjv," please use VEX,USDV, VYN or DJV token ");
            if(isvex) eosio_assert((quantity.quantity.amount >= MIN_STAKE_VEX), "Stake quantity must be greater than minimum");
            if(isusdv) eosio_assert((quantity.quantity.amount >= MIN_STAKE_USDV), "Stake quantity must be greater than minimum");
            if(isvyn) eosio_assert((quantity.quantity.amount >= MIN_STAKE_VYN), "Stake quantity must be greater than minimum");
            if(isdjv) eosio_assert((quantity.quantity.amount >= MIN_STAKE_DJV), "Stake quantity must be greater than minimum");
            stake(from,quantity.quantity);

            action(permission_level{eosio::name(BASOADMIN), eosio::name("active")},
                quantity.contract,
                eosio::name("transfer"),
                std::make_tuple(eosio::name(BASOADMIN), eosio::name(BASOSTAKE), quantity.quantity, std::string("to coldwallet all stake asset")))
                .send();
        }
    }

    void basofinances::setstop(const uint8_t &state)
    {
        require_auth2(capi_name(eosio::name(BASOADMIN).value), capi_name(eosio::name("cron").value));
        eosio_assert(state == 0 || state == 1, "set a wrong state!");
        auto global = _global.get_or_default();
        global.stopState = state;
        _global.set(global,eosio::name(BASOADMIN));
    }

    void basofinances::init() 
    {
        require_auth(eosio::name(BASOADMIN));
        auto global = _global.get_or_default();
        eosio_assert(global.initState != 1, "have init already!");

        eosio::asset all = eosio::asset(10000000000, BASO_SYMBOL);//120s 一次

        //vex usdv vyn djv 7000 2000 500 500 14 4 1 1 
        global.initState = 1;
        global.stopState = 0;

        global.checkfromid = 0;
        global.maxstakeid = 0;
        global.check_update_time = now();
        global.all_pool_reward = all;

        eosio::asset one = all/20;
        global.total_staked_vex = eosio::asset(0, VEX_SYMBOL);//总抵押
        global.vex_pool_reward = one * 14;
        global.vex_pool_day_reward = one * 14 * 24 * 30; //日奖池
        global.total_staked_usdv = eosio::asset(0, USDV_SYMBOL);
        global.usdv_pool_reward = one * 4;
        global.usdv_pool_day_reward = one * 4 * 24 * 30;
        global.total_staked_vyn = eosio::asset(0, VYN_SYMBOL);
        global.vyn_pool_reward = one * 1;
        global.vyn_pool_day_reward = one * 1 * 24 * 30;
        global.total_staked_djv = eosio::asset(0, DJV_SYMBOL);
        global.djv_pool_reward = one * 1;
        global.djv_pool_day_reward = one * 1 * 24 * 30;

        global.total_mininged = eosio::asset(0, BASO_SYMBOL);

        _global.set(global, eosio::name(BASOADMIN));
    }
};
