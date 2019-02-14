export class Constants {
///////////////////-----------Basket Details----------------///////////////////////////

public static TradefeeAddress: string = '0x82eec7c5dacb337dc76a59f20c2d1e0a1f56f650';
public static protoStorageAddress: string = '0x11c60465f406b9b67a05a687866c52787f85d51f';
public static TrasfersProxyAddress: string = '0xbfba523d7561b8e6676ede5066e4127854c7197e';
public static CretaeContractAddress: string = '0x4437bfb7fa27cd72e7adc2000da35649fd376c01';
public static Tradefeeabi: any =[
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "exFees",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_baseTokenFee",
				"type": "uint256"
			},
			{
				"name": "_etherFee",
				"type": "uint256"
			},
			{
				"name": "_normalTokenFee",
				"type": "uint256"
			}
		],
		"name": "updateFeeSchedule",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "uint256"
			},
			{
				"name": "_feeIndex",
				"type": "uint256"
			}
		],
		"name": "calcTradeFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_values",
				"type": "uint256[]"
			},
			{
				"name": "_feeIndexes",
				"type": "uint256[]"
			}
		],
		"name": "calcTradeFeeMulti",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

public static ProtoStorage: any = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_publisher",
          "type": "address"
        }
      ],
      "name": "registerPublisher",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newPortfolio",
          "type": "address"
        },
        {
          "name": "_maker",
          "type": "address"
        }
      ],
      "name": "addPortfolio",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listExchange",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "exchanges",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "portfolios",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "listPortfolios",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_publisher",
          "type": "address"
        }
      ],
      "name": "removePublisher",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_publisher",
          "type": "address"
        }
      ],
      "name": "IsExchangeAllowed",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ];

  public static Transfersproxy: any =[
    	{
    		"constant": false,
    		"inputs": [
    			{
    				"name": "_from",
    				"type": "address"
    			},
    			{
    				"name": "_token",
    				"type": "address"
    			},
    			{
    				"name": "_amount",
    				"type": "uint256"
    			}
    		],
    		"name": "transferFunds",
    		"outputs": [],
    		"payable": false,
    		"stateMutability": "nonpayable",
    		"type": "function"
    	},
    	{
    		"constant": false,
    		"inputs": [
    			{
    				"name": "_storage",
    				"type": "address"
    			},
    			{
    				"name": "_wallet",
    				"type": "address"
    			}
    		],
    		"name": "registerConfig",
    		"outputs": [],
    		"payable": false,
    		"stateMutability": "nonpayable",
    		"type": "function"
    	},
    	{
    		"constant": true,
    		"inputs": [],
    		"name": "owner",
    		"outputs": [
    			{
    				"name": "",
    				"type": "address"
    			}
    		],
    		"payable": false,
    		"stateMutability": "view",
    		"type": "function"
    	},
    	{
    		"constant": true,
    		"inputs": [],
    		"name": "protostage",
    		"outputs": [
    			{
    				"name": "",
    				"type": "address"
    			}
    		],
    		"payable": false,
    		"stateMutability": "view",
    		"type": "function"
    	},
    	{
    		"inputs": [
    			{
    				"name": "_storage",
    				"type": "address"
    			},
    			{
    				"name": "_wallet",
    				"type": "address"
    			}
    		],
    		"payable": false,
    		"stateMutability": "nonpayable",
    		"type": "constructor"
    	}
    ];

    public static createPortfolioWAN: any = [{
        'anonymous': false,
        'inputs': [{'indexed': false, 'name': '_maker', 'type': 'address'}, {
          'indexed': false,
          'name': '_portfolio',
          'type': 'address'
        }, {'indexed': false, 'name': '_fee', 'type': 'uint256'}, {'indexed': false, 'name': '_hash', 'type': 'bytes32'}, {
          'indexed': false,
          'name': '_message',
          'type': 'bytes32'
        }],
        'name': 'Exchange',
        'type': 'event'
      }, {
        'constant': false,
        'inputs': [
          {'name': '_maker', 'type': 'address'},
          {'name': '_assets', 'type': 'address[]'},
          {'name': '_volumes', 'type': 'uint256[]'},
          {'name': '_askValue', 'type': 'uint256'},
          {'name': '_expiryBlock', 'type': 'uint256'},
          {'name': '_name', 'type': 'bytes32'}],
        'name': 'createPortfolio',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      }, {
        'constant': false,
        'inputs': [{'name': '_storage', 'type': 'address'}, {'name': '_calc', 'type': 'address'}, {
          'name': '_proxy',
          'type': 'address'
        }, {'name': '_token', 'type': 'address'}],
        'name': 'updateExchange',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      }, {
        'inputs': [{'name': '_storage', 'type': 'address'}, {'name': '_calc', 'type': 'address'}, {
          'name': '_proxy',
          'type': 'address'
        }, {'name': '_token', 'type': 'address'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
      }, {
        'constant': true,
        'inputs': [],
        'name': 'ethertoken',
        'outputs': [{'name': '', 'type': 'address'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [],
        'name': 'feeCalculator',
        'outputs': [{'name': '', 'type': 'address'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [{'name': '_askValue', 'type': 'uint256'}, {'name': '_feeIndex', 'type': 'uint256'}],
        'name': 'getFee',
        'outputs': [{'name': '', 'type': 'uint256'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [{'name': '_maker', 'type': 'address'}, {'name': '_assets', 'type': 'address[]'}, {
          'name': '_volumes',
          'type': 'uint256[]'
        }, {'name': '_askValue', 'type': 'uint256'}, {'name': '_expiryBlock', 'type': 'uint256'}, {'name': '_name', 'type': 'bytes32'}],
        'name': 'getPortfolioHash',
        'outputs': [{'name': '', 'type': 'bytes32'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [{'name': '', 'type': 'address'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [],
        'name': 'protostage',
        'outputs': [{'name': '', 'type': 'address'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [],
        'name': 'transferProxy',
        'outputs': [{'name': '', 'type': 'address'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }, {
        'constant': true,
        'inputs': [],
        'name': 'version',
        'outputs': [{'name': '', 'type': 'bytes32'}],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }];
    

///////////////////////////////------------------///////////////////////////////////////////////

//////////////////-------Exchange Details-------------/////////////////////////
public static OrderBookContractAddressWAN: string = '0xc93b5f160cfad7199365188e21cfb921563990b3';
public static datastoreAddressWAN: string = '0x527020832234123ff4f5d988c82bf614d798a976';
public static OrderbookContractAbiWAN: any = [{
  'constant': true,
  'inputs': [],
  'name': 'dataStore',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_tokensAndAddresses', 'type': 'address[6]'}, {'name': '_volumes', 'type': 'uint256[5]'}, {
    'name': '_orderMatchID',
    'type': 'bytes32'
  }, {'name': '_expiryBlockNumber', 'type': 'uint256'}],
  'name': 'orderMatchHash',
  'outputs': [{'name': '', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_sellToken', 'type': 'address'}, {'name': '_buyToken', 'type': 'address'}, {
    'name': '_totalOrderVolume',
    'type': 'uint256'
  }, {'name': '_priceRate', 'type': 'uint256'}, {'name': '_numBlocksExpires', 'type': 'uint256'}, {
    'name': '_orderCreator',
    'type': 'address'
  }, {'name': '_orderType', 'type': 'uint256'}, {'name': '_orderID', 'type': 'bytes32'}, {'name': '_feeToken', 'type': 'address'}],
  'name': 'orderHash',
  'outputs': [{'name': '', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}, {
    'name': '_totalOrderVolume',
    'type': 'uint256'
  }],
  'name': 'orderAvailability',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_depositor', 'type': 'address'}],
  'name': 'balanceOf',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}],
  'name': 'oredrAlreadyExists',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'isTradingActive',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}, {
    'name': '_totalOrderVolume',
    'type': 'uint256'
  }],
  'name': 'isOrderClosedOrFulfilled',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'isLocked',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'address'}],
  'name': 'fundDeposits',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_depositor', 'type': 'address'}, {'name': '_token', 'type': 'address'}],
  'name': 'balanceOfToken',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'owner',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'baseTokenAddress',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '', 'type': 'address'}],
  'name': 'authorized',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '', 'type': 'uint256'}],
  'name': 'exFees',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'safetyWallet',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'etherRefAddress',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [],
  'name': 'approver',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_msgHash', 'type': 'bytes32'}, {'name': 'v', 'type': 'uint8'}, {'name': 'r', 'type': 'bytes32'}, {
    'name': 's',
    'type': 'bytes32'
  }],
  'name': 'ecrecovery',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'pure',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_signer', 'type': 'address'}, {'name': '_orderHash', 'type': 'bytes32'}, {
    'name': 'v',
    'type': 'uint8'
  }, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}],
  'name': 'verifySignature',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'pure',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '_value', 'type': 'uint256'}, {'name': '_feeToken', 'type': 'address'}],
  'name': 'calcTradeFee',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {
  'constant': true,
  'inputs': [{'name': '', 'type': 'uint256'}],
  'name': 'listTokens',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
}, {'payable': true, 'stateMutability': 'payable', 'type': 'fallback'}, {
  'constant': false,
  'inputs': [{'name': '_newAddress', 'type': 'address'}],
  'name': 'addAuthorizedAddress',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_token', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
  'name': 'withdrawTokenTo',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'origin', 'type': 'address'}, {
    'indexed': false,
    'name': 'activityCode',
    'type': 'bytes32'
  }, {'indexed': false, 'name': 'customMsg', 'type': 'bytes32'}],
  'name': 'TradeActivity',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{'name': '_depositor', 'type': 'address'}],
  'name': 'deposit',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'signer', 'type': 'address'}, {
    'indexed': false,
    'name': 'isValidSignature',
    'type': 'bool'
  }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}],
  'name': 'SingatureValidated',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{'name': '_sellToken', 'type': 'address'}, {'name': '_buyToken', 'type': 'address'}, {
    'name': '_totalOrderVolume',
    'type': 'uint256'
  }, {'name': '_priceRate', 'type': 'uint256'}, {'name': '_numBlocksExpires', 'type': 'uint256'}, {
    'name': '_orderCreator',
    'type': 'address'
  }, {'name': '_orderType', 'type': 'uint256'}, {'name': '_orderID', 'type': 'bytes32'}, {'name': '_feeToken', 'type': 'address'}],
  'name': 'createOrder',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'oldApprover', 'type': 'address'}, {'indexed': false, 'name': 'newApprover', 'type': 'address'}],
  'name': 'OwnerChanged',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{'name': '_newOwner', 'type': 'address'}],
  'name': 'changeOwner',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'creator', 'type': 'address'}, {
    'indexed': false,
    'name': 'orderHash',
    'type': 'bytes32'
  }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}],
  'name': 'OrderOps',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{'name': '_orderHash', 'type': 'bytes32'}, {'name': '_orderCreator', 'type': 'address'}, {
    'name': '_totalOrderVolume',
    'type': 'uint256'
  }, {'name': '_feeToken', 'type': 'address'}, {'name': '_orderValue', 'type': 'uint256'}],
  'name': 'cancelOrder',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{'name': '_newApprover', 'type': 'address'}, {'name': '_newWallet', 'type': 'address'}, {
    'name': '_dataStore',
    'type': 'address'
  }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
}, {
  'constant': false,
  'inputs': [{'name': '_tokensAndAddresses', 'type': 'address[6]'}, {
    'name': '_volumes',
    'type': 'uint256[6]'
  }, {'name': '_numBlocksExpires', 'type': 'uint256'}, {'name': '_orderType', 'type': 'uint256'}, {
    'name': 'v',
    'type': 'uint8'
  }, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}, {'name': '_orderID', 'type': 'bytes32'}],
  'name': 'fillOrder',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'origin', 'type': 'address'}, {
    'indexed': false,
    'name': 'seller',
    'type': 'address'
  }, {'indexed': false, 'name': 'buyer', 'type': 'address'}, {
    'indexed': false,
    'name': 'orderHash',
    'type': 'bytes32'
  }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}, {'indexed': false, 'name': 'customMsg', 'type': 'bytes32'}],
  'name': 'OrderFills',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [],
  'name': 'moveToSafetyWallet',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'orderHash', 'type': 'bytes32'}, {
    'indexed': false,
    'name': 'expiryBlockNumber',
    'type': 'uint256'
  }, {'indexed': false, 'name': 'activityCode', 'type': 'bytes32'}],
  'name': 'OrderExpired',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{'name': '_baseToken', 'type': 'address'}, {'name': '_ether', 'type': 'address'}, {
    'name': '_baseTokenFee',
    'type': 'uint256'
  }, {'name': '_etherFee', 'type': 'uint256'}, {'name': '_normalTokenFee', 'type': 'uint256'}],
  'name': 'updateFeeCalcConfig',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_tradeActive', 'type': 'bool'}, {'name': '_dataStore', 'type': 'address'}, {'name': '_isLocked', 'type': 'bool'}],
  'name': 'changeTraderConfig',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'oldApprover', 'type': 'address'}, {'indexed': false, 'name': 'newApprover', 'type': 'address'}],
  'name': 'ApproverChanged',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'target', 'type': 'address'}, {'indexed': false, 'name': 'caller', 'type': 'address'}],
  'name': 'AuthorizationAdded',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'target', 'type': 'address'}, {'indexed': false, 'name': 'caller', 'type': 'address'}],
  'name': 'AuthorizationRemoved',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'origin', 'type': 'address'}, {
    'indexed': false,
    'name': '_accHolder',
    'type': 'address'
  }, {'indexed': false, 'name': 'token', 'type': 'address'}, {'indexed': false, 'name': 'amount', 'type': 'uint256'}, {
    'indexed': false,
    'name': 'activityCode',
    'type': 'bytes32'
  }, {'indexed': false, 'name': 'customMsg', 'type': 'bytes32'}],
  'name': 'LockerActivity',
  'type': 'event'
}, {
  'constant': false,
  'inputs': [{'name': '_newApprover', 'type': 'address'}],
  'name': 'changeApprover',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
  'name': 'withdrawTo',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_newAddress', 'type': 'address'}],
  'name': 'removeAuthorizedAddress',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_tokensAndAddresses', 'type': 'address[6]'}, {
    'name': '_volumes',
    'type': 'uint256[5]'
  }, {'name': '_expiryBlockNumber', 'type': 'uint256'}, {'name': '_orderMatchID', 'type': 'bytes32'}, {
    'name': 'v',
    'type': 'uint8'
  }, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}],
  'name': 'fillOrderMatch',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'constant': false,
  'inputs': [{'name': '_depositor', 'type': 'address'}, {'name': '_token', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}],
  'name': 'depositTokens',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'
}];

public static datastore: any =[
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "approver",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "",
  				"type": "address"
  			},
  			{
  				"name": "",
  				"type": "bytes32"
  			}
  		],
  		"name": "orderFills",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "_orderHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderSender",
  				"type": "address"
  			},
  			{
  				"name": "_totalValue",
  				"type": "uint256"
  			}
  		],
  		"name": "orderAmountAvailability",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"name": "ownership",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "_orderHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderSender",
  				"type": "address"
  			}
  		],
  		"name": "isOrderExists",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_orderMatchHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderMatchID",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderMatchSender",
  				"type": "address"
  			}
  		],
  		"name": "insertOrderMatch",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_orderHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderSender",
  				"type": "address"
  			},
  			{
  				"name": "_amountFilled",
  				"type": "uint256"
  			},
  			{
  				"name": "_totalOrderVolume",
  				"type": "uint256"
  			}
  		],
  		"name": "fillOrder",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_owner",
  				"type": "address"
  			}
  		],
  		"name": "removeOwnership",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_orderHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderSender",
  				"type": "address"
  			},
  			{
  				"name": "_amountFilled",
  				"type": "uint256"
  			}
  		],
  		"name": "insertOrder",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_activate",
  				"type": "bool"
  			}
  		],
  		"name": "changeStoreConfig",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "owner",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "",
  				"type": "bytes32"
  			},
  			{
  				"name": "",
  				"type": "bytes32"
  			}
  		],
  		"name": "orderMatches",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "_orderHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderSender",
  				"type": "address"
  			},
  			{
  				"name": "_totalValue",
  				"type": "uint256"
  			}
  		],
  		"name": "isOrderClosed",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_newOwner",
  				"type": "address"
  			}
  		],
  		"name": "changeOwner",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "",
  				"type": "address"
  			},
  			{
  				"name": "",
  				"type": "bytes32"
  			}
  		],
  		"name": "orders",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_newApprover",
  				"type": "address"
  			}
  		],
  		"name": "changeApprover",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_orderHash",
  				"type": "bytes32"
  			},
  			{
  				"name": "_orderSender",
  				"type": "address"
  			},
  			{
  				"name": "_totalOrderValue",
  				"type": "uint256"
  			}
  		],
  		"name": "cancelOrder",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "isStoreActive",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_newOwner",
  				"type": "address"
  			}
  		],
  		"name": "addOwnership",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"inputs": [
  			{
  				"name": "_newApprover",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "constructor"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "origin",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "activityCode",
  				"type": "bytes32"
  			},
  			{
  				"indexed": false,
  				"name": "customMsg",
  				"type": "bytes32"
  			}
  		],
  		"name": "StoreActivity",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "target",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "caller",
  				"type": "address"
  			}
  		],
  		"name": "OwnershipAdded",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "target",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "caller",
  				"type": "address"
  			}
  		],
  		"name": "OwnershipRemoved",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "oldApprover",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "newApprover",
  				"type": "address"
  			}
  		],
  		"name": "ApproverChanged",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "oldApprover",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "newApprover",
  				"type": "address"
  			}
  		],
  		"name": "OwnerChanged",
  		"type": "event"
  	}
  ]



}