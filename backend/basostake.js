
const schedule = require('node-schedule');
const EOS = require('vexaniumjs');

//let upposdone = true;
let maxid = 0;
let fromid = 0;

eosConfig1 = {
  chainId: "f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f",
  keyProvider: "******",
  httpEndpoint: 'http://139.180.192.207:8080',//'http://209.97.162.124:8080',//'http://209.97.162.124:8080',
  mockTransactions: () => null,
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true,
  authorization: 'basofinances@cron'
};
global.eos1 = EOS(eosConfig1);

function getGlobalTable( ){
  eos1.getTableRows({"scope":"basofinances", "code":"basofinances", "table":"global", "json": true,"limit": 1 }).then((buys)=>{
    let rowsAll = buys.rows;
    if(rowsAll.length === 0)
    {
      return setTimeout(getGlobalTable, 1000);//3s重试
    } 
    maxid = parseInt(rowsAll[0]['maxstakeid'], 10);
    fromid = parseInt(rowsAll[0]['checkfromid'], 10);
    if(fromid <= maxid)
    {
      console.log('+++++ sucess getGlobalTable  fromid :'+ fromid + ' maxid :'+ maxid  );
      doIssues();
    }
  }).catch((error)=>{
    console.info('------ getGlobalTable err: ' + JSON.stringify(error))
    return setTimeout(getGlobalTable, 1000);//3s重试
  });

}

function doIssues(  ){
  let toid = fromid + 25;
  if(toid > maxid) toid = maxid;

  let action = {
    account: 'basofinances',
    name: 'doissue',
    authorization: [{
      actor:'basofinances',
      permission: 'cron'
    }],
    data: {
      idfrom: fromid,
      idto: toid
    }
  }    
  let doactions = [];
  doactions.push(action);

  console.log(' try doIssues! idfrom: '  + action.data.idfrom + ' idto: ' + action.data.idto);
  eos1.transaction({
    actions: doactions
  }).then(result => {
    console.log('+++++ sucess doIssues! idfrom: '  + action.data.idfrom + ' idto: ' + action.data.idto);
    if(toid < maxid)
    {
      return setTimeout(getGlobalTable, 1000);
    }
    // else
    // {
    //   upposdone = true;
    // }    
  }).catch(error => {
    var strerr = JSON.stringify(error);
    console.log(' ------ doIssues error:' + strerr);
    if(strerr.indexOf("front position not finish yet") > -1)
    {
      return setTimeout(getGlobalTable, 1000);
    }
    //expired transaction 重复报错 不加错误判断,会重复报错 会中断issue 等下一个周期才继续
    //return setTimeout(getGlobalTable, 1000);
  });
}

getGlobalTable();
setInterval(getGlobalTable,60000);//120s 一次 60秒检查一次 


process.on('uncaughtException', (err) => {
  console.log(err);
  console.log(err.stack);
});
