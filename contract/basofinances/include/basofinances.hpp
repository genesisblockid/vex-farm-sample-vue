#pragma once
#include <eosiolib/asset.hpp>
#include <eosiolib/eosio.hpp>
#include <eosiolib/singleton.hpp>
#include <eosiolib/transaction.hpp>

#define BASOADMIN "basofinances" //basofinances testfinances
#define BASOSTAKE "basopoolsave" //basopoolsave testpoolsave
#define BASODRAW "basopooldraw"  //basopooldraw tstpoolsdraw

#define BASOTOKEN "vexbasotoken" //vexbasotoken testbastoken

#define VEXTOKEN "vex.token"
#define USDVTOKEN "vyndaoutoken"
#define VYNTOKEN "vyndaoutoken"
#define DJVTOKEN "djvtokenvexa"

#define BASO_SYMBOL eosio::symbol("BASO", 10) //BASO BASO

#define VEX_SYMBOL eosio::symbol("VEX", 4)
#define USDV_SYMBOL eosio::symbol("USDV", 6)
#define VYN_SYMBOL eosio::symbol("VYN", 8)
#define DJV_SYMBOL eosio::symbol("DJV", 8)

#define NO_TIME   2000000000
#define SECONDS_THREE_DAY  259200
#define MIN_STAKE_VEX 1000000 //100 VEX
#define MIN_STAKE_USDV 100000 //0.1 USDV
#define MIN_STAKE_VYN 10000000 //0.1 VYN
#define MIN_STAKE_DJV 10000 // 0.0001 djv

//10k
#define STAGE_MINING_TOTAL eosio::asset(100000000000000, BASO_SYMBOL)

using eosio::extended_asset;
using namespace eosio;
 
static constexpr int64_t max_amount  = 10000000000000000;

namespace vexdt {
    class [[eosio::contract]] basofinances :public eosio::contract {
    public:
        basofinances(eosio::name receiver, eosio::name code, eosio::datastream<const char *> ds) :
                eosio::contract(receiver, code, ds),
                _global(eosio::name(BASOADMIN), eosio::name(BASOADMIN).value),
                _users(eosio::name(BASOADMIN), eosio::name(BASOADMIN).value){
        }

        //更新抵押
        ACTION doissue(const uint64_t &idfrom, const uint64_t &idto);

        ACTION init(); 

        ACTION setstop(const uint8_t &state);

        ACTION claim(const eosio::name &from, const std::string &pooltype);

        ACTION exit(const eosio::name &from, const std::string &pooltype);

        bool isvextoken(const eosio::extended_asset &quantity)
        {
            //print("quantity.contract", quantity.contract); 
            if ((quantity.contract == eosio::name(VEXTOKEN)) && (quantity.quantity.symbol == VEX_SYMBOL))
            {
                return true;
            }
            return false;
        }

        bool isusdvtoken(const eosio::extended_asset &quantity)
        {
            //print("quantity.contract", quantity.contract); 
            if ((quantity.contract == eosio::name(USDVTOKEN)) && (quantity.quantity.symbol == USDV_SYMBOL))
            {
                return true;
            }
            return false;
        }

        bool isvyntoken(const eosio::extended_asset &quantity)
        {
            //print("quantity.contract", quantity.contract); 
            if ((quantity.contract == eosio::name(VYNTOKEN)) && (quantity.quantity.symbol == VYN_SYMBOL))
            {
                return true;
            }
            return false;
        }

        bool isdjvtoken(const eosio::extended_asset &quantity)
        {
            //print("quantity.contract", quantity.contract); 
            if ((quantity.contract == eosio::name(DJVTOKEN)) && (quantity.quantity.symbol == DJV_SYMBOL))
            {
                return true;
            }
            return false;
        }

        void apply(eosio::name code, eosio::name action);

        void stake(const eosio::name &from,
                const eosio::asset &quantity);

        void onTransfer(const eosio::name &from,
            const eosio::name &to,
            const eosio::extended_asset &quantity,
            const std::string &memo);

        TABLE global {
            uint8_t initState;
            uint8_t stopState;

            uint64_t checkfromid;
            uint64_t maxstakeid;
            uint64_t check_update_time;

            eosio::asset all_pool_reward;//单倍池奖励

            eosio::asset total_staked_vex;//总抵押
            eosio::asset vex_pool_reward;
            eosio::asset vex_pool_day_reward;
            eosio::asset total_staked_usdv;
            eosio::asset usdv_pool_reward;
            eosio::asset usdv_pool_day_reward;
            eosio::asset total_staked_vyn;
            eosio::asset vyn_pool_reward;
            eosio::asset vyn_pool_day_reward;
            eosio::asset total_staked_djv;
            eosio::asset djv_pool_reward;
            eosio::asset djv_pool_day_reward;
            eosio::asset total_mininged;
        };
        typedef eosio::singleton<"global"_n, global> global_table;


        TABLE st_user {
            uint64_t    id = 0;
            eosio::name holder;
            eosio::asset vex_stake;
            eosio::asset usdv_stake;
            eosio::asset vyn_stake;
            eosio::asset djv_stake;

            //eosio::asset available_bonus; //可取分红

            eosio::asset vex_bonus;
            eosio::asset usdv_bonus;
            eosio::asset vyn_bonus;
            eosio::asset djv_bonus;


            uint64_t primary_key() const { return id; }
            uint64_t by_holder() const { return holder.value; }
        };

        typedef eosio::multi_index<"user"_n, st_user,
                                eosio::indexed_by<"holder"_n, eosio::const_mem_fun<st_user, uint64_t, &st_user::by_holder>>
                                    > user_table;


        global_table _global;
        user_table _users;


        ACTION test()
        {
            require_auth(eosio::name(BASOADMIN));

            //新阶段 需要更新日奖池
            // auto global = _global.get_or_default();
            // eosio::asset all = eosio::asset(100000000, VYN_SYMBOL);//单倍池奖励 第3阶段 960s一次
            // eosio::asset one = all/20;
            // global.vex_pool_day_reward = one * 7 * 90; //日奖池
            // global.usdv_pool_day_reward = one * 10 * 90;
            // global.vyn_pool_day_reward = one * 3 * 90;
            // _global.set(global, eosio::name(BASOADMIN));

            _global.remove( );
            auto itr = _users.begin();
            while(itr != _users.end()){
                itr = _users.erase(itr);
            }
        }
    };


    struct st_transfer
    {
        eosio::name from;
        eosio::name to;
        eosio::asset quantity;
        std::string memo;
    };

    void basofinances::apply(eosio::name code, eosio::name action)
    {
        auto &thiscontract = *this;

        if (action == eosio::name("transfer") && (code == eosio::name(VEXTOKEN) || code == eosio::name(USDVTOKEN) || code == eosio::name(DJVTOKEN)))
        {
            //print("  apply code name", code); //code 为那个账户触发的通知
            auto transfer_data = eosio::unpack_action_data<st_transfer>();
            onTransfer(transfer_data.from, transfer_data.to, eosio::extended_asset(transfer_data.quantity, code), transfer_data.memo);
            return;
        }
        
        if (code != eosio::name(BASOADMIN))
            return;
        if( code == eosio::name(BASOADMIN) ) {
            switch(action.value) {
                case eosio::name("init").value: 
                    execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::init); 
                    break;
                case eosio::name("setstop").value: 
                    execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::setstop); 
                    break;
                case eosio::name("test").value: 
                    execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::test); 
                    break;
                case eosio::name("doissue").value: 
                    execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::doissue); 
                    break;
                case eosio::name("claim").value: 
                    execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::claim); 
                    break;
                // case eosio::name("unstake").value: 
                //     execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::unstake); 
                //     break;
                case eosio::name("exit").value: 
                    execute_action(eosio::name(BASOADMIN), eosio::name(code), &basofinances::exit); 
                    break;
            }
        }
    }


    extern "C"
    {
        [[noreturn]] void apply(uint64_t receiver, uint64_t code, uint64_t action) {
            eosio::datastream<const char*> ds( nullptr, 0 );
            basofinances p(eosio::name(receiver), eosio::name(code), ds);
            p.apply(eosio::name(code), eosio::name(action));
            eosio_exit(0);
        }
    }

} /// namespace eosio
