//基础设置---基础参数
var _ispligindebug = true;

//eth单位
var _ethWei = Math.pow(10, 18);//不会改变
var _ethWeiShow = 1;//根据合约设置改变
var _usdtWei = Math.pow(10, 6);//不会改变
var _ettWei = Math.pow(10, 18);//不会改变
var _usdt_ett_Ratio = Math.pow(10, 12);//不会改变

//token合约地址/ABI
var _ContractAddress_USDT = null;
var _ContractABI_USDT = null;
var _ContractDecimals_USDT = null;
var _ContractAddress_ETT = null;
var _ContractABI_ETT = null;
var _ContractDecimals_ETT = null;

//合约地址
var _ContractAddress = null;
//合约ABI
var _ContractABI = null
//合约运行网络
//1：以太坊主网 https://cn.etherscan.com/
//3：Ropsten测试链 https://ropsten.etherscan.io/
//42：Kovan测试链 https://kovan.etherscan.io/
//4：Rinkeby测试链 https://rinkeby.etherscan.io/
//5：Goerli测试链 https://goerli.etherscan.io/
var _ContractRunNetwork = '1';//主网

//默认推荐码
var _ContractRecommendCode = '';

//余额显示精度
var _AccountDisplayPrecision = 6;
//合约显示精度——奖金数据等
var _ContractDisplayPrecision = 6;


//页面定义istest 网络环境
var _istest = _istest || 0
if (_istest) {
    //测试设置
    _ContractRunNetwork = '3';//Ropsten测试链
    _ContractAddress = '0xF60aED3111252344bD62BB0563f29b3ec98A844d';
    _ContractABI = [{ "constant": false, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "nodeLevel", "type": "uint256" }], "name": "actUserNodeLevel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "addAddressToWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }], "name": "buyTicket", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_USDTAddr", "type": "address" }, { "internalType": "address", "name": "_EntranceTicketAddr", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_ratio", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value2", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "BuyTicketEvent", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }, { "internalType": "address", "name": "rCode", "type": "address" }], "name": "invest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_code", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_rCode", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvestEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnerTransferred", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "removeAddressFromWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }], "name": "RoleAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }], "name": "RoleRemoved", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_type", "type": "uint256" }], "name": "settlement", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "takeBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TransferEvent", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TransferTokenEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "WithdrawEvent", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "getCodeMapping", "outputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getDailyDividendByAddress", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "uid", "type": "uint256" }], "name": "getIndexMapping", "outputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getInvestDataByAddress", "outputs": [{ "internalType": "uint256[5]", "name": "info", "type": "uint256[5]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "rCode", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRCodeMapping", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "rCode", "type": "address" }], "name": "getRCodeMappingLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "_type", "type": "uint256" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRewardDataByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[25]", "name": "info", "type": "uint256[25]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }, { "internalType": "address", "name": "raddr", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserInfo", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "isWhitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[16]", "name": "info", "type": "uint256[16]" }, { "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }]
    _ContractRecommendCode = '';

    _ContractAddress_USDT = "0x18ece085fd3898cbcc8a24eca3ab9029e995f897";
    _ContractABI_USDT = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }]
    _ContractDecimals_USDT = 6;
    _ContractAddress_ETT = "0x6149f2cac1d0089dc2ed45b8d7d5e91802fac1a1";
    _ContractABI_ETT = [{ "constant": true, "inputs": [], "name": "defaultOperators", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "granularity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorSend", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "authorizeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "send", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "isOperatorFor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "revokeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorBurn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address[]", "name": "defaultOperators", "type": "address[]" }, { "internalType": "uint256", "name": "claimAmount", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Sent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Minted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Burned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "AuthorizedOperator", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "RevokedOperator", "type": "event" }]
    _ContractDecimals_ETT = 18;
} else {
    //主网设置
    //_ContractRunNetwork = '1';//主网
    _ContractAddress = '0x679CcDd6b8687B051d54D2cBb5B15ad2668cC6cC';//填入主网合约地址
    _ContractABI = [{ "constant": false, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "nodeLevel", "type": "uint256" }], "name": "actUserNodeLevel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "addAddressToWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }], "name": "buyTicket", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_USDTAddr", "type": "address" }, { "internalType": "address", "name": "_EntranceTicketAddr", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_ratio", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value2", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "BuyTicketEvent", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }, { "internalType": "address", "name": "rCode", "type": "address" }], "name": "invest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_code", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_rCode", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvestEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnerTransferred", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "removeAddressFromWhitelist", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }], "name": "RoleAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }], "name": "RoleRemoved", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_type", "type": "uint256" }], "name": "settlement", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "takeBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TransferEvent", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_token", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TransferTokenEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "WithdrawEvent", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "getCodeMapping", "outputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getDailyDividendByAddress", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "uid", "type": "uint256" }], "name": "getIndexMapping", "outputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getInvestDataByAddress", "outputs": [{ "internalType": "uint256[5]", "name": "info", "type": "uint256[5]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "rCode", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRCodeMapping", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "rCode", "type": "address" }], "name": "getRCodeMappingLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "uint256", "name": "_type", "type": "uint256" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRewardDataByAddress", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[25]", "name": "info", "type": "uint256[25]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }, { "internalType": "address", "name": "raddr", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserInfo", "outputs": [{ "internalType": "uint256[2]", "name": "info", "type": "uint256[2]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOpen", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_operator", "type": "address" }], "name": "isWhitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[16]", "name": "info", "type": "uint256[16]" }, { "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }]
    _ContractRecommendCode = '';

    _ContractAddress_USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
    _ContractABI_USDT = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }]
    _ContractDecimals_USDT = 6;
    _ContractAddress_ETT = "0x7c49ddfd77a282a4e2798ab737585892126f25e8";
    _ContractABI_ETT = [{ "constant": true, "inputs": [], "name": "defaultOperators", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "granularity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorSend", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "authorizeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "send", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "isOperatorFor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }], "name": "revokeOperator", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "operatorBurn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "address[]", "name": "defaultOperators", "type": "address[]" }, { "internalType": "uint256", "name": "claimAmount", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Sent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Minted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }, { "indexed": false, "internalType": "bytes", "name": "operatorData", "type": "bytes" }], "name": "Burned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "AuthorizedOperator", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenHolder", "type": "address" }], "name": "RevokedOperator", "type": "event" }]
    _ContractDecimals_ETT = 18;
}

//页面定义_isNotAuthorize 账户授权
var _isNotAuthorize = _isNotAuthorize

//基础插件参数
var _dappBaseOptions = {
    transaction: {
        Decimals: 18,//精度 转出金额扩大精度默认18位
        //ContractAddress: null,//ERC20合约地址
        //ContractABI:null,//RRC20代币合约ABI
    },
    msgTips: function (msg) {
        //定义消息处理
        //alert(msg)
        msgtips(msg)
    },
    initCallBack: function (e, defaultAccount, isEthereum, isNotFirst) {
        //初始化完成后回调/网络变更回调/账号变更回调
        _ispligindebug && console.log('2.BaseInit:' + defaultAccount)

        //在这里处理 账号余额信息
        typeof HandleUserInfo === "function" && HandleUserInfo(e, defaultAccount, isEthereum)
    },
    initHandleNetworkType: function (e, networkType, networkName, networkScan) {
        //1：以太坊主网 https://cn.etherscan.com/
        //3：Ropsten测试链 https://ropsten.etherscan.io/
        //42：Kovan测试链 https://kovan.etherscan.io/
        //4：Rinkeby测试链 https://rinkeby.etherscan.io/
        //5：Goerli测试链 https://goerli.etherscan.io/
        //初始化完成后回调/网络变更回调
        _ispligindebug && console.log('1.NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)

        //在这里处理 网络相关信息
        typeof HandleNetworkType === "function" && HandleNetworkType(e, networkType, networkName, networkScan)
    },
    networkChangeEventCallBack: function (e, networkType, networkName, networkScan) {
        //1：以太坊主网 https://cn.etherscan.com/
        //3：Ropsten测试链 https://ropsten.etherscan.io/
        //42：Kovan测试链 https://kovan.etherscan.io/
        //4：Rinkeby测试链 https://rinkeby.etherscan.io/
        //5：Goerli测试链 https://goerli.etherscan.io/
        //网络变更后回调
        _ispligindebug && console.log('networkChanged: new Network: NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)
    },
    accountsChangedEventCallBack: function (e, defaultAccount) {
        //账号变更事件
        _ispligindebug && console.log('accountsChangedEvent: new accounts:' + defaultAccount)
    },
    isAuthorize: !_isNotAuthorize,//启用授权
    defaultNetwork: _ContractRunNetwork,//默认网络
}
//合约插件参数
var _dappContractOptions = {
    contract: {
        ContractAddress: _ContractAddress,//合约地址
        //合约ABI
        ContractABI: _ContractABI,
    },
    msgTips: function (msg) {
        //定义消息处理
        //alert(msg)
        msgtips(msg)
    },
    initCallBack: function (e, networkType, networkName, networkScan) {
        //初始化完成后回调/网络变更回调
        _ispligindebug && console.log("3.ContractTnit: Contract init succeed! " + 'NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)

        e.getContractLink(null, function (contractLink) {
           var contractAddress = e.getContractAddress();

           //在这里处理 合约基础信息
           typeof HandleContractBaseInfo === "function" && HandleContractBaseInfo(e, networkType, contractLink, contractAddress)
        });
    },
    initAuthorizeCallBack: function (e, defaultAccount, isAuthorize) {
        //初始化完成后授权回调/网络变更回调/账号变更回调
        _ispligindebug && console.log("4.AuthorizeCallBack:" + isAuthorize + ",defaultAccount" + defaultAccount)

        //在这里处理 合约账号信息
        e.getNetworkType(function (networkType) {
            typeof HandleContractUserInfo === "function" && HandleContractUserInfo(e, isAuthorize, networkType, defaultAccount)
        })
    },
    accountsChangedEventCallBack: function (e, defaultAccount, isShowdefaultAccount) {
        //账号变更事件
        _ispligindebug && console.log('accountsChangedEvent: new accounts:' + defaultAccount)
    },
}

//-----------------------------------------------------------

//初始化插件---创建自定义插件
var _DappContractPlugin = InitDappContract(_dappContractOptions, _dappBaseOptions);

//-----------------------------------------------------------
//定义显示数据刷新触发事件
var HandleShowChangeLoad;
//定义显示数据方法
var HandleShowContractUserInfo;
//定义处理代币授权方法
var HandleShowTokenApproveLoad;
//定义处理交易提示提示方法
var HandleShowTransactionProcessingLoad;

//初始化插件处理事件---初始化相关处理
//处理网络相关 优先级1
var HandleNetworkType = function (e, networkType, networkName, networkScan) {
    //e 为DappBase基础对象

    //显示合约运行网络名称
    var showContractRunNetworkName = _ContractRunNetwork != 1 ? e._getNetworkName(_ContractRunNetwork) + '网络' : '主网';
    $('.data-networkFullName').html(showContractRunNetworkName)

    if (networkType == _ContractRunNetwork) {
        //显示投资按钮
        $('.data-contractNetworkNormal').show()
        $('.data-switchNetwork').hide()
    } else {
        //运行网限制
        //显示切换网络
        $('.data-contractNetworkNormal').hide()
        $('.data-switchNetwork').show()

        //提示
        var msgtipsswitchNetwork = "合约运行在 " + showContractRunNetworkName + ' 请切换为 ' + showContractRunNetworkName
        msgtips3 && msgtips3(msgtipsswitchNetwork);
    }

    //显示当前网络名称
    $('.data-networkName').html(networkName + ' Net')
    //设置当前网络区块浏览器链接
    $('.data-networkScan').attr('href', networkScan)
}

//处理账号余额信息 优先级2
var HandleUserInfo = function (e, defaultAccount, isEthereum, isShowdefaultAccount) {
    //e 为DappBase基础对象
    if (!isEthereum) {
        //显示安装兼容钱包
        $('.data-installationSupport').show()
    } else {
        $('.data-installationSupport').hide()
    }

    //初始化显示
    $('.data-balance').html("--")
    $('.data-defaultAccount').html("--").val('')

    if (defaultAccount) {
        $('.data-defaultAccount').html(defaultAccount).val(defaultAccount)

        //设置账户地址区块浏览器链接
        e.getAccountLink(defaultAccount, function (accountLink) {
            $('.data-accountLink').attr('href', accountLink)
        })

        //初始化显示
        //显示当前账号余额
        e.getBalance(function (_balance) {
            _ispligindebug && console.log('2.1.HandleUserInfo:' + _balance)

            $('.data-balance').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount)

        //获取usdt代币余额
        e.getTokenBalance(function (_balance) {
            $('.data-balance-usdt').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount, _ContractAddress_USDT, _ContractABI_USDT, _ContractDecimals_USDT)

        //获取ett代币余额
        e.getTokenBalance(function (_balance) {
            $('.data-balance-ett').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT)


        //提示显示当前账号
        isShowdefaultAccount && msgtips2 && msgtips2(defaultAccount, '当前账户');
    }
}

//处理合约基础信息 优先级3
var HandleContractBaseInfo = function (e, networkType, contractLink, contractAddress) {
    //e 为DappContract对象

    _ispligindebug && console.log('3.1.HandleUserInfo:' + contractLink);

    //设置合约区块浏览器验证地址链接
    $('.data-contractLink').attr('href', contractLink)

    //初始化显示
    $('.data-contractState4').html("--")
    $('.data-contractState4-1').html("--")
    $('.data-contractState11').html("--")
    $('.data-contractState14').html("--")
    $('.data-contractState15').html("--")
    $('.data-contractState12').html("--")
    $('.data-contractState13').html("--")

    //合约运行网络一致
    if (networkType == _ContractRunNetwork) {
        //显示合约状态-页面中间
        Dapp_getContractState(function (resulr, rdata) {
            if (resulr) {
                $('.data-contractState4').html(rdata[0][4].div(_usdt_ett_Ratio))
                $('.data-contractState4-1').html((1).div(rdata[0][4].div(_usdt_ett_Ratio)).toFloor(_ContractDisplayPrecision))
                $('.data-contractState11').html(rdata[0][11].div(_usdtWei))
                $('.data-contractState14').html(rdata[0][14].div(_usdtWei))
                $('.data-contractState12').html(rdata[0][12].div(_ettWei))
                $('.data-contractState13').html(rdata[0][13].div(_ettWei))
                if (rdata[1]) {
                    $('.data-contractState15').html(rdata[0][15].sub(rdata[0][14]).div(_usdtWei))
                    $('.data-contractState14-1').hide()
                    $('.data-contractState15-1').show()
                } else {
                    $('.data-contractState15').html("∞")
                    $('.data-contractState14-1').show()
                    $('.data-contractState15-1').hide()
                }
                //赋值临时变量
                e.paramRatio = rdata[0][4].div(_usdt_ett_Ratio);
            }
        })
    }
}

//处理合约账号信息 优先级4
var HandleContractUserInfo = function (e, isAuthorize, networkType, defaultAccount) {
    //e 为DappContract对象

    HandleShowChangeLoad && HandleShowChangeLoad()

    //初始化显示
    //左侧
    $('.data-contractUserInfo16').html("--")
    $('.data-contractUserInfo13').html("--")
    $('.data-contractUserInfo20').html("--")
    $('.data-contractUserInfo17').html("--")
    $('.data-contractUserInfo18').html("--")
    $('.data-contractUserInfo19').html("--")
    $('.data-contractUserInfo22').html("--").data("value", "")
    $('.data-contractUserInfo23').html("--")
    $('.data-contractUserInfo16_20').html("--")
    $('.data-contractUserInfo10_11').html("--")
    $('.data-contractUserInfo14').html("--")
    //右侧
    $('.data-contractUserInfo7').html("--")
    $('.data-contractUserInfo14_15').html("--")
    $('.data-contractUserInfo10').html("--")
    $('.data-contractUserInfo11').html("--")
    $('.data-contractUserInfo12').html("--")
    $('.data-contractUserInfo2').html("--").data("value", "")
    //邀请码
    $('.data-contractUserInfoCode').html("--")
    $('.data-contractUserInfoCode-copyData').data("value", "")
    $('.data-contractUserInfo24').html("--")
    //推荐人地址
    $('.data-contractUserInfo-raddr').html("--")
    //未结算分红总收益
    $('.data-contractUserInfo-DailyDividend').html("--")

    //鉴权成功且合约运行网络一致
    if (isAuthorize && networkType == _ContractRunNetwork) {
        //获取用户信息
        Dapp_getContractUserInfo(function (resulr, rdata) {
            if (resulr) {
                //console.log(rdata)
                //左侧
                $('.data-contractUserInfo16').html(rdata[0][16].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo13').html(rdata[0][13].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo20').html(rdata[0][20].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo17').html(rdata[0][17].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo18').html(rdata[0][18].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo19').html(rdata[0][19].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo22').data("value", rdata[0][22])
                $('.data-contractUserInfo23').html(rdata[0][23].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo16_20').html(rdata[0][16].add(rdata[0][17]).add(rdata[0][18]).add(rdata[0][19]).add(rdata[0][20]).div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo10_11').html(rdata[0][10].add(rdata[0][11]).div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo14').html(rdata[0][14].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                //右侧
                $('.data-contractUserInfo7').html(rdata[0][7].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo14_15').html((rdata[0][14].add(rdata[0][15])).div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo10').html(rdata[0][10].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo11').html(rdata[0][11].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo12').html(rdata[0][12].div(_usdtWei).toFloor(_ContractDisplayPrecision))
                $('.data-contractUserInfo2').data("value", rdata[0][2])
                //是否能提现
                var money = rdata[0][14].div(_usdtWei)
                if (Number(money) >= 1) {
                    $('.data-withdraw').removeClass("disabled")
                } else {
                    $('.data-withdraw').addClass("disabled")
                }

                //邀请码相关
                if (rdata[0][0] != 0) {
                    var code = rdata[1]
                    $('.data-contractUserInfoCode').html(code)
                    $('.data-contractUserInfoCode-copyData').data("value", code)
                }
                $('.data-contractUserInfo24').html(rdata[0][24])

                //推荐人地址
                if (rdata[3].mul(1) != "0") {
                    $('.data-contractUserInfo-raddr').html(rdata[3])
                }
                
                HandleShowContractUserInfo && HandleShowContractUserInfo()
            }
        })
        //获取用户每日市场分红信息
        Dapp_getDailyDividendByAddress(function (resulr, rdata) {
            if (resulr) {
                $('.data-contractUserInfo-DailyDividend').html(rdata.div(_usdtWei).toFloor(_ContractDisplayPrecision))
            }
        })
    }
}

//-----------------------------------------------------------

//合约方法---ABI 交互实现-----Token 操作
//获取代币授权操作信息
function Token_getAllowance(cb, oaddr, spender, taddr, tABI, decimals) {
    try {
        if (oaddr) {
            _DappContractPlugin.getContractObj(function (_ContractObj) {
                _ContractObj.methods
                  .allowance(oaddr, spender)
                  .call()
                  .then(function (rdata) {
                      //回调处理
                      typeof cb === "function" && cb(true, rdata.div(Math.pow(10, decimals)))
                  })
            }, taddr, tABI);
        } else {
            _DappContractPlugin.getCurrentAccount(function (_oaddr) {
                _DappContractPlugin.getContractObj(function (_ContractObj) {
                    _ContractObj.methods
                        .allowance(_oaddr, spender)
                        .call()
                        .then(function (rdata) {
                            //回调处理
                            typeof cb === "function" && cb(true, rdata.div(Math.pow(10, decimals)))
                        })
                }, taddr, tABI);
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//代币授权操作
function Token_approve(cb, receiptCB, amount, spender, taddr, tABI, decimals) {
    try {
        _DappContractPlugin.getContractObj(function (_ContractObj) {
            _ContractObj.methods
            .approve(spender, amount.mul(Math.pow(10, decimals)))
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
            .on('error', function (err) {
                console.log(err)
                typeof cb === "function" && cb(false, err)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成回调
                typeof receiptCB === "function" && receiptCB(receipt)
            });
        }, taddr, tABI);
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//合约方法---ABI 交互实现
//获取合约信息
function Dapp_getContractState(cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .stateView()
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户信息--基础
function Dapp_getUserInfoBase(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getUserInfo(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getUserInfo(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户合约信息
function Dapp_getContractUserInfo(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getUserByAddress(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getUserByAddress(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//检查注册码是否被使用
function Dapp_isUsedCode(code, cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .isUsedCode(code)
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//购买门票
function Dapp_buyTicket(money, cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }

        var money = money.mul(_usdtWei);

        _DappContractPlugin.ContractObj.methods
            .buyTicket(money)
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                typeof cb === "function" && cb(true, rdata)
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
            })
            .on('error', function (err) {
                console.log(err)
                typeof cb === "function" && cb(false, err)
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成刷新会员信息
                //直接调用账户变更事件进行更新页面数据
                _DappContractPlugin.getNetworkType(function (networkType) {
                    _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType)
                })
            });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
    }
}
//投资
function Dapp_invest(money, code, rCode, cb, gasPrice) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (!code) {
            throw { cede: 401, message: "请输入邀请码" }
        }
        if (rCode == 'rCode') {
            rCode = ''
        }

        var money = money.mul(_usdtWei);
        var gasPrice = gasPrice.mul(Math.pow(10, 9))

        var params = {
            gasPrice: gasPrice
        }

        _DappContractPlugin.ContractObj.methods
       .invest(money, rCode)
       .send(params)
       .on('transactionHash', function (rdata) {
           console.log(rdata)
           //回调处理
           typeof cb === "function" && cb(true, rdata)
           HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
       })
       .on('error', function (err) {
           console.log(err)
           typeof cb === "function" && cb(false, err)
           HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
       })
       .on('confirmation', function (confirmationNumber, receipt) {
           console.log('confirmation: ' + confirmationNumber);
       })
       .on('receipt', function (receipt) {
           console.log(receipt);
           //完成刷新会员信息
           //直接调用账户变更事件进行更新页面数据
           _DappContractPlugin.getNetworkType(function (networkType) {
               _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType)
           })
       });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
    }
}
//结算
function Dapp_settlement(type, cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .settlement(type)
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
            .on('error', function (err) {
                console.log(err)
                typeof cb === "function" && cb(false, err)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成刷新会员信息
                //直接调用账户变更事件进行更新页面数据
                _DappContractPlugin.getCurrentAccount(function (_from) {
                    _DappContractPlugin.DappBaseObj._accountsChangedEvent(_from)
                    _DappContractPlugin._accountsChangedEvent(_from)
                })
            });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//提现
function Dapp_takeBonus(cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        _DappContractPlugin.ContractObj.methods
            .takeBonus()
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                typeof cb === "function" && cb(true, rdata)
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
            })
            .on('error', function (err) {
                console.log(err)
                typeof cb === "function" && cb(false, err)
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log('confirmation: ' + confirmationNumber);
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
                //完成刷新会员信息
                //直接调用账户变更事件进行更新页面数据
                _DappContractPlugin.getCurrentAccount(function (_from) {
                    _DappContractPlugin.DappBaseObj._accountsChangedEvent(_from)
                    _DappContractPlugin._accountsChangedEvent(_from)
                })
            });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
    }
}

//获取用户投资信息
function Dapp_getInvestDataByAddress(cb, addr, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getInvestDataByAddress(addr, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getInvestDataByAddress(_addr, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户结算信息
function Dapp_getRewardDataByAddress(cb, addr, type, index) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getRewardDataByAddress(addr, type, index)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getRewardDataByAddress(_addr, type, index)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//获取用户每日市场分红信息
function Dapp_getDailyDividendByAddress(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getDailyDividendByAddress(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getDailyDividendByAddress(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//-----------------------------------------------------------

//业务相关方法---基础方法实现
//随机生成字符串
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz123456789';
    //var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
//获取rul参数
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=(.*)(&[^&=]+=)');
    var regLast = new RegExp('(^|&)' + name + '=(.*)($)');
    var rtest = window.location.href.replace(/\/\#/, '');
    rtest = rtest && rtest.match(/\?.+/) && rtest.match(/\?.+/)[0];
    rtest = rtest && (rtest.substr(1).match(reg) || rtest.substr(1).match(regLast));
    if (rtest) {
        var l = rtest[2].match(/&[^&=]+=/)
        if (l) {
            return decodeURIComponent(rtest[2].split(l[0])[0]);
        } else return decodeURIComponent(rtest[2]);
    }
    return null;
}
//任务检查
function checktaskObj() {
    this.coutnc = 1;
    this.crrc = 0;
    this.cancel = false;

    this.check = function (cb) {
        if (this.crrc >= this.coutnc && !this.cancel) {
            typeof cb === "function" && cb(true)
        } else {
            typeof cb === "function" && cb(false)
        }
    }
}

//-----------------------------------------------------------

//合约方法业务方法---业务逻辑实现
//检查代币授权
function business_checkApprove(amount, taddr, tABI, decimals, isERC777, cb) {
    _DappContractPlugin.DappBaseObj.getTokenBalance(function (_balance) {
        if (Number(_balance) >= Number(amount)) {
            Token_getAllowance(function (resulr, rdata) {
                if (resulr) {
                    if (Number(rdata) >= Number(amount)) {
                        //回调处理
                        typeof cb === "function" && cb(true)
                    } else {
                        var checktask = new checktaskObj();
                        //重新授权
                        if (Number(rdata) > 0 && !isERC777) {
                            checktask.coutnc = 2;
                            Token_approve(function (resulr, rdata) {
                                if (!resulr) {
                                    typeof cb === "function" && cb(false,1001)
                                    console.log("r1 approve ERR：" + taddr)
                                    checktask.cancel = true;
                                }
                            }, function () {
                                console.log("receipt1 approve：" + taddr)
                                checktask.crrc++;
                                Token_approve(function (resulr, rdata) {
                                    if (!resulr) {
                                        typeof cb === "function" && cb(false, 1001)
                                        console.log("r2 approve ERR：" + taddr)
                                        checktask.cancel = true;
                                    }
                                }, function () {
                                    console.log("receipt2 approve：" + taddr)
                                    checktask.crrc++;
                                    checktask.check(function (checkresult) {
                                        if (checkresult) {
                                            typeof cb === "function" && cb(true)
                                        }
                                    })
                                }, amount, _ContractAddress, taddr, tABI, decimals)
                            }, "0", _ContractAddress, taddr, tABI, decimals)
                        } else {
                            Token_approve(function (resulr, rdata) {
                                if (!resulr) {
                                    typeof cb === "function" && cb(false, 1001)
                                    console.log("r2 approve ERR：" + taddr)
                                    checktask.cancel = true;
                                }
                            }, function () {
                                console.log("receipt2 approve：" + taddr)
                                checktask.crrc++;
                                checktask.check(function (checkresult) {
                                    if (checkresult) {
                                        typeof cb === "function" && cb(true)
                                    }
                                })
                            }, amount, _ContractAddress, taddr, tABI, decimals)
                        }
                    }
                } else {
                    console.log("check approve ERR：" + taddr)
                    typeof cb === "function" && cb(false, 1000)
                }
            }, null, _ContractAddress, taddr, tABI, decimals)
        } else {
            typeof cb === "function" && cb(false, 1002)
        }
    }, null, taddr, tABI, decimals)
}

//获取当前用户注册/邀请码
function business_getCurrentAccountCode(cb, addr) {
    Dapp_getUserInfoBase(function (resulr, rdata) {
        var code;
        if (resulr) {
            if (rdata[0][0] != 0) {
                code = rdata[1]
                //回调处理
                typeof cb === "function" && cb(code, false)
                return;
            }
        }
        //重新获取注册码
        business_afreshAccountCode(cb)
    }, addr)
}
//重新获取注册/邀请码
function business_afreshAccountCode(cb) {
    var newCode = '';
    //newCode = randomString(6);
    if (newCode) {
        Dapp_isUsedCode(newCode, function (resulr, rdata) {
            if (resulr) {
                if (!rdata) {
                    //回调处理
                    typeof cb === "function" && cb(newCode, true)
                } else {
                    business_afreshAccountCode(cb)
                }
            } else {
                console.log("check newCode ERR")
            }
        })
    } else {
        _DappContractPlugin.getCurrentAccount(function (_addr) {
            newCode = _addr;
            //直接回调，不验证
            typeof cb === "function" && cb(newCode, true)
        })
    }
}
//获取默认推荐码
function business_getDefaultRecommendCode() {
    return _ContractRecommendCode;
}
function business_getDefaultRecommendCodeInit() {
    //return 'rCode';
    return '0x0000000000000000000000000000000000000000';
}
//获取推荐码
function business_getRecommendCode(cb, r) {
    var rCode;
    //优先获取浏览器参数
    rCode = getUrlParam('rCode')
    if (rCode) {
        //回调处理
        typeof cb === "function" && cb(rCode)
        return;
    }
    if (rCode && !r) {
        //检查邀请码是否正确
        Dapp_isUsedCode(rCode, function (resulr, rdata) {
            if (resulr) {
                if (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(rCode)
                } else {
                    //不正确的邀请码
                    business_getRecommendCode(cb, true);
                }
            } else {
                console.log("check newCode ERR")
            }
        })
    } else {
        //根据已注册的属性获取
        Dapp_getUserInfoBase(function (resulr, rdata) {
            if (resulr) {
                if (rdata[0][0] != 0) {
                    rCode = rdata[2]
                    //回调处理
                    typeof cb === "function" && cb(rCode)
                    return;
                }
            }
            //未注册未填写 尝试获取 默认
            rCode = business_getDefaultRecommendCode();
            typeof cb === "function" && cb(rCode)
        })
    }
}

//购买门票
function business_buyTicket(money, cb) {
    try {
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (Number(money) > 0) {
            HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true)
            business_checkApprove(money, _ContractAddress_USDT, _ContractABI_USDT, _ContractDecimals_USDT, false, function (resulr, code) {
                //code 1000-1001 获取授权失败 1002余额不足
                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                if (resulr) {
                    Dapp_buyTicket(money, cb)
                } else {
                    if (code == 1002) {
                        typeof cb === "function" && cb(false, "授权操作金额失败:USDT,code:" + code + ",msg:余额不足")
                    } else {
                        typeof cb === "function" && cb(false, "授权操作金额失败:USDT,code:" + code)
                    }
                }
            })
        } else {
            throw { cede: 401, message: "金额不正确" }
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//获取门票价格
function business_ratioTicket(cb) {
    try {
        Dapp_getContractState(function (resulr, rdata) {
            if (resulr) {
                typeof cb === "function" && cb(true, rdata[0][4].div(_usdt_ett_Ratio))
            }
        })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//投资
function business_invest(money, cb, code, rCode, gasPrice) {
    try {
        if (code) {
            //已获取邀请码
            business_invest_r(money, cb, code, rCode, gasPrice)
        } else {
            //未获取邀请码
            business_getCurrentAccountCode(function (_code, isNweCode) {
                business_invest_r(money, cb, _code, rCode, gasPrice)
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
    //自定义函数处理
    function business_invest_r(money, cb, _code, rCode, gasPrice) {
        console.log(_code)
        if (rCode) {
            console.log(rCode)
            business_invest_s(money, cb, _code, rCode, gasPrice)
        } else {
            business_getRecommendCode(function (_rCode) {
                console.log(_rCode)
                business_invest_s(money, cb, _code, _rCode, gasPrice)
            })
        }
    }

    function business_invest_s(money, cb, _code, rCode, gasPrice) {
        if (Number(money) > 0) {
            //投资限额判断
            Dapp_getContractState(function (resulr, rdata) {
                if (resulr) {
                    rCode = rCode || business_getDefaultRecommendCodeInit();
                    if (rdata[0] != 0) {
                        if (!rCode == 'rCode') {
                            typeof cb === "function" && cb(false, "请输入推荐码")
                            return;
                        }
                        if (rCode == '0x0000000000000000000000000000000000000000') {
                            typeof cb === "function" && cb(false, "请输入推荐人地址")
                            return;
                        }
                    }
                    if (rdata[1]) {
                        var dayInvestLimitSurplus = rdata[0][15].sub(rdata[0][14]).div(_usdtWei);
                        if (Number(money) > Number(dayInvestLimitSurplus)) {
                            typeof cb === "function" && cb(false, "今日投资额度剩余" + dayInvestLimitSurplus)
                            return;
                        }
                    }
                    //获取进场门票比例
                    business_ratioTicket(function (resulr, rdata) {
                        if (resulr) {
                            var ettmoney = money.mul(rdata).div(10)

                            //var checktask = new checktaskObj();
                            //checktask.coutnc = 2;

                            HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true)
                            business_checkApprove(money, _ContractAddress_USDT, _ContractABI_USDT, _ContractDecimals_USDT, false, function (resulr, code) {
                                if (resulr) {
                                    //checktask.crrc++;
                                    //checktask.check(function (checkresult) {
                                    //    if (checkresult) {
                                    //        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                    //        Dapp_invest(money, _code, rCode, cb, gasPrice)
                                    //    }
                                    //})
                                    business_checkApprove(ettmoney, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT, false, function (resulr, code) {
                                        if (resulr) {
                                            HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                            Dapp_invest(money, _code, rCode, cb, gasPrice)
                                        } else {
                                            HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                            //checktask.cancel = true;
                                            if (code == 1002) {
                                                typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code + ",msg:余额不足")
                                            } else {
                                                typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code)
                                            }
                                        }
                                    })
                                } else {
                                    HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                    //checktask.cancel = true;
                                    //code 1000-1001 获取授权失败 1002余额不足
                                    if (code == 1002) {
                                        typeof cb === "function" && cb(false, "授权操作金额失败:USDT,code:" + code + ",msg:余额不足")
                                    } else {
                                        typeof cb === "function" && cb(false, "授权操作金额失败:USDT,code:" + code)
                                    }
                                }
                            })
                        } else {
                            typeof cb === "function" && cb(false, "获取门票比例失败")
                        }
                    })
                }
            })
        }
    }
}

//结算
function business_settlement(type, cb) {
    Dapp_settlement(type, cb)
}

//提现
function business_takeBonus(cb) {
    //获取用户信息
    Dapp_getContractUserInfo(function (resulr, rdata) {
        if (resulr) {
            var money = rdata[0][14].div(_usdtWei)
            //是否能提现
            if (Number(money) >= 1) {
                //获取进场门票比例
                business_ratioTicket(function (resulr, rdata) {
                    if (resulr) {
                        var ettmoney = money.mul(rdata).mul(3).div(100)

                        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true)
                        business_checkApprove(ettmoney, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT, false, function (resulr, code) {
                            if (resulr) {
                                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                Dapp_takeBonus(cb)
                            } else {
                                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false)
                                //checktask.cancel = true;
                                if (code == 1002) {
                                    typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code + ",msg:余额不足")
                                } else {
                                    typeof cb === "function" && cb(false, "授权操作金额失败:门票,code:" + code)
                                }
                            }
                        })
                    } else {
                        typeof cb === "function" && cb(false, "获取门票比例失败")
                    }
                })
            } else {
                typeof cb === "function" && cb(false, "提现失败，提现金额不满足提现条件")
            }
        } else {
            typeof cb === "function" && cb(false, "获取提现信息失败")
        }
    })    
}

//获取投资记录
function business_investRecords(index, cb, addr) {
    console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getInvestDataByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            _recordsData.Money = rdata[0][0].div(_usdtWei).toFloor(_ContractDisplayPrecision);
            _recordsData.Status = rdata[0][4]
            _recordsData.AdduoStaticBonus = rdata[0][2].div(_usdtWei).toFloor(_ContractDisplayPrecision);
            _recordsData.AdduoDynamicBonus = rdata[0][3].div(_usdtWei).toFloor(_ContractDisplayPrecision);
            _recordsData.LeftOutMoney = rdata[0][0].mul(3).sub(rdata[0][2]).sub(rdata[0][3]).div(_usdtWei).toFloor(_ContractDisplayPrecision);
            _recordsData.LastTime = rdata[0][1].mul(1000).toString();

            _recordsData.SettledAmount = 0
            if (Number(_recordsData.Status) == 0) {
                var settlementNumber_base = (Date.now().div(1000).toFloor(0).sub(rdata[0][1])).div(86400).toFloor(0);
                var moneyBonus_base = rdata[0][0].mul(5).div(1000);
                var settlementNumber = settlementNumber_base;
                var settlementMaxMoney = 0;
                if (Number(rdata[0][0].mul(3)) >= Number(rdata[0][2].add(rdata[0][3]))) {
                    settlementMaxMoney = rdata[0][0].mul(3).sub((rdata[0][2]).add(rdata[0][3]));
                }
                if (Number(moneyBonus_base.mul(settlementNumber)) > Number(settlementMaxMoney)) {
                    settlementNumber = settlementMaxMoney.div(moneyBonus_base);
                    if (Number(moneyBonus_base.mul(settlementNumber)) < Number(settlementMaxMoney)) {
                        settlementNumber++;
                    }
                    if (Number(settlementNumber) > Number(settlementNumber_base)) {
                        settlementNumber = settlementNumber_base;
                    }
                }
                var moneyBonus = moneyBonus_base.mul(settlementNumber);
                _recordsData.SettledAmount = moneyBonus.div(_usdtWei).toFloor(_ContractDisplayPrecision);
            }
            if (Number(_recordsData.LeftOutMoney) < 0) {
                _recordsData.LeftOutMoney = 0
            }

            typeof cb === "function" && cb(_recordsData)
        }
    }, addr, index)
}
//获取用户结算信息
function business_settlementRecords(type, index, cb, addr) {
    console.log("Index:" + index)
    //获取用户投资信息
    Dapp_getRewardDataByAddress(function (resulr, rdata) {
        if (resulr) {
            //console.log(rdata)
            var _recordsData = {};
            _recordsData.Money = rdata[0][0].div(_usdtWei).toFloor(_ContractDisplayPrecision);
            _recordsData.Time = rdata[0][1].mul(1000).toString();

            typeof cb === "function" && cb(_recordsData)
        }
    }, addr, type, index)
}