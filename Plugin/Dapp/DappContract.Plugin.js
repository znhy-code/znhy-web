function InitDappContract(_options, _dappBaseOptions) {
    var defaults = {
        contract: {
            ContractAddress: null,//合约地址
            //合约ABI
            ContractABI: null,
        },
        msgTips: function (msg) {
            //定义消息处理
            alert(msg)
        },
        initCallBack: function (e, networkType, networkName, networkScan) {
            //初始化完成后回调/网络变更回调
            console.log("Contract init succeed! " + 'NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)
        },
        initAuthorizeCallBack: function (e, defaultAccount, isAuthorize) {
            //初始化完成后授权回调/网络变更回调/账号变更回调
            console.log("Authorize CallBack,defaultAccount:" + defaultAccount +",result:" + isAuthorize)
        },
        accountsChangedEventCallBack: function (e, defaultAccount, isShowdefaultAccount) {
            //账号变更事件
            console.log('accountsChangedEvent: new accounts:' + defaultAccount)
        },
    };
    var options = $.extend({}, defaults, _options);//将一个空对象做为第一个参数

    //重写 DappBaseObj 参数处理
    var dappBaseOptions = _dappBaseOptions;
    dappBaseOptions.extensionCallBack = function (e, defaultAccount, isEthereum, isNotFirst) {
        //dappBase执行初始化回调
        //DAPP环境
        if (isEthereum) {
            //合约初始化
            DappContractObj.init(!!defaultAccount, isEthereum, isNotFirst, defaultAccount);
        }
    }

    //创建对象
    var DappContractObj = {
        _ethWei: Math.pow(10, 18),
        options: options,
        DappBaseObj: DappCreate(dappBaseOptions),
        ContractObj: null,
        init: function (isAuthorize, isEthereum, isNotFirst, defaultAccount) {
            //初始化 插件方法
            var _this = this;
            try {
                //DAPP环境
                if (isEthereum) {
                    //合约对象创建
                    _this._setWeb3ContractObj(defaultAccount);

                    //获取网络类型/名称/区块浏览器
                    _this.DappBaseObj.getNetworkType(function (networkType) {
                        var networkName = _this.DappBaseObj._getNetworkName(networkType);
                        var networkScan = _this.DappBaseObj._getNetworkScan(networkType);
                        //初始化完成执行回调
                        typeof _this.options.initCallBack === "function" && _this.options.initCallBack(_this, networkType, networkName, networkScan)

                        _this.getCurrentAccount(function (defaultAccount) {
                            //鉴权回调
                            typeof _this.options.initAuthorizeCallBack === "function" && _this.options.initAuthorizeCallBack(_this, defaultAccount, isAuthorize)

                            //首次加载
                            if (!isNotFirst) {
                                try {
                                    //监听账号变更事件
                                    //console.log("Contract: add accountsChanged Event")
                                    window.ethereum && window.ethereum.on && window.ethereum.on('accountsChanged', function (accounts) {
                                        //处理账号变更事件
                                        _this._accountsChangedEvent(accounts[0]);
                                    })
                                } catch (e) {
                                    console.log(e)
                                }
                            }
                        })
                    })
                }
            } catch (e) {
                console.log(e)
            }
        },
        _setWeb3ContractObj: function (fromAddress, contractAddress, contractABI) {
            //初始化 设置 合约对象
            var _this = this;
            try {
                //来源地址
                if (fromAddress) {
                    _this.ContractObj = _this._getContractObj(contractAddress, contractABI, fromAddress);
                } else {
                    _this.DappBaseObj.getCurrentAccount(function (_fromAddress) {
                        _this.ContractObj = _this._getContractObj(contractAddress, contractABI, _fromAddress);
                    })
                }                
            } catch (e) {
                console.log(e)
            }
        },
        _setWeb3ContractObj_fromAddress: function (fromAddress) {
            //重映射合约对象授权
            var _this = this;
            try {
                //重映射合约对象授权
                //_this.ContractObj.options.from = fromAddress;
                _this._setWeb3ContractObj(fromAddress)
            } catch (e) {
                console.log(e)
            }
        },
        _setContractObjDefaultGasPrice: function (gasPrice) {
            //获取账户地址
            var _this = this;
            try {
                _this.ContractObj.options.gasPrice = gasPrice.mul(Math.pow(10, 9))
            } catch (e) {
                console.log(e)
            }
        },
        _accountsChangedEvent: function (account) {
            //账户变更事件
            var _this = this;
            try {
                //重映射合约对象授权
                _this._setWeb3ContractObj_fromAddress(account)

                //处理回调
                typeof _this.options.accountsChangedEventCallBack === "function" && _this.options.accountsChangedEventCallBack(_this, account, true)

                //鉴权回调
                typeof _this.options.initAuthorizeCallBack === "function" && _this.options.initAuthorizeCallBack(_this, account, true)
            } catch (e) {
                console.log(e)
            }
        },
        getContractLink: function (contractAddress, cb) {
            //获取合约区块浏览器地址
            var _this = this;
            try {
                // 合约地址
                var _contractAddress = contractAddress || _this.options.contract.ContractAddress;

                //区块地址
                _this.DappBaseObj.getNetworkType(function (networkType) {
                    var networkScan = _this.DappBaseObj._getNetworkScan(networkType);

                    var contractLink = networkScan + 'address/' + _contractAddress
                    typeof cb === "function" && cb(contractLink)
                })
            } catch (e) {
                console.log(e)
            }
        },
        getContractAddress: function () {
            //获取合约地址
            var _this = this;
            try {
                return _this.options.contract.ContractAddress;
            } catch (e) {
                console.log(e)
            }
        },
        getCurrentAccount: function (cb) {
            //获取账户地址
            var _this = this;
            try {
                _this.DappBaseObj.getCurrentAccount(cb);
            } catch (e) {
                console.log(e)
            }
        },
        getNetworkType: function (cb) {
            //获取账户地址
            var _this = this;
            try {
                return _this.DappBaseObj.getNetworkType(cb);
            } catch (e) {
                console.log(e)
            }
        },
        _getContractObj: function (contractAddress, contractABI, fromAddress) {
            //初始化 设置 合约对象
            var _this = this;
            try {
                // 定义合约abi
                var contractAbi = contractABI || _this.options.contract.ContractABI

                // 合约地址
                var _contractAddress = contractAddress || _this.options.contract.ContractAddress;
                if (!contractAbi) {
                    console.log('contractAbi is empty, Web3ContractObj Initialization failed')
                    return;
                }
                if (!_contractAddress) {
                    console.log('contractAddress is empty, Web3ContractObj Initialization failed')
                    return;
                }

                return _this.DappBaseObj._getContractObj(_contractAddress, contractAbi, fromAddress);
            } catch (e) {
                console.log(e)
            }
        },
        getContractObj: function (cb, contractAddress, contractABI, fromAddress) {
            //初始化 设置 合约对象
            var _this = this;
            try {
                //来源地址
                if (fromAddress) {
                    var rContractObj = _this._getContractObj(contractAddress, contractABI, fromAddress)
                    typeof cb === "function" && cb(rContractObj)
                } else {
                    _this.DappBaseObj.getCurrentAccount(function (_fromAddress) {
                        var rContractObj = _this._getContractObj(contractAddress, contractABI, _fromAddress)
                        typeof cb === "function" && cb(rContractObj)
                    })
                }
            } catch (e) {
                console.log(e)
            }
        },
    }

    return DappContractObj;
}