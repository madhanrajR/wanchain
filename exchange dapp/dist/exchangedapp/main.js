(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    top: 50%;\r\n}\r\n\r\n.card {\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n    width: 600px; \r\n}\r\n\r\n.card-header{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">EXCHANGE DAPP</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>     -->\n      </ul>\n    </div>  \n  </nav>\n  <br>\n  <div class=\"container\" >\n<h2>Crypto Currency Details</h2>     \n    <table class=\"table table-striped table-sm table-bordered\">\n      <thead>\n        <tr>\n          <th>Cryptocurrency Name</th>\n          <th>USD Value</th>\n          <th>Last Updated</th>\n          <th>Market Cap</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>ETH</td>\n          <td>{{usd}}</td>\n          <td>{{lastupdate}}</td>\n          <td>{{market}}</td>\n        </tr>\n        <tr>\n          <td>WAN</td>\n          <td>{{usd1}}</td>\n          <td>{{lastupdate1}}</td>\n          <td>{{market1}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n\n    \n  </div>\n<br><br>\n<div class=\"wrapper\">\n  <button type=\"button\" class=\"btn btn-dark\" style='margin-right:26px' (click)=\"wan()\">Exchange WAN to ETH </button>\n  <button type=\"button\" class=\"btn btn-dark\" style='margin-right:26px'(click)=\"eth()\">Exchange ETH to WAN</button>\n</div>\n<br>\n<div class=\"container\" *ngIf=\"show==true\">\n  <div class=\"card\">\n    <div class=\"card-header\">Exchange WAN to ETH</div>\n    <div class=\"card-body\">\n        <div class=\"wrapper\">\n          <div class=\"row\">\n            <div class=\"col-sm-9\">\n                <input type=\"text\" placeholder=\"WAN Private key\" #a (input)=\"length(a.value)\" style='margin-right:20px; width:420px;' class=\"form-control ds\" id=\"name\" >\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"text\" placeholder=\"WAN Balance\" style='margin-right:20px;width:100px;'  class=\"form-control ds\" id=\"puk\"  readonly>\n            </div>\n          </div>\n      </div><br>\n      <div class=\"wrapper\">\n          <div class=\"row\">\n              <div class=\"col-sm-9\">\n                  <input type=\"text\" placeholder=\"ETH Private Address\" #b (input)=\"length1(b.value)\" style='margin-right:20px; width:420px;' class=\"form-control ds\" id=\"name\" >\n              </div>\n              <div class=\"col-sm-3\">\n                  <input type=\"text\" placeholder=\"ETH Balance\" style='margin-right:20px;width:100px;'  class=\"form-control ds\" id=\"puk1\"  readonly><br>\n              </div>\n            </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <input type=\"text\" placeholder=\"WAN Amount\" #c (input)=\"length2(c.value)\" class=\"form-control ds\" value=0 id=\"name\" >\n      </div>\n    \n      <div class=\"col-sm-6\">\n          <input type=\"text\" placeholder=\"ETH Amount\" #d class=\"form-control ds\" id=\"puk2\"  readonly>\n      </div>\n    </div>\n      <!-- <button type=\"button\" class=\"btn btn-dark\">Submit</button> -->\n    </div> \n   <div class=\"card-footer\">\n      <div class=\"wrapper\">\n      <button type=\"button\" class=\"btn btn-dark\" style='margin-right:26px' (click)=\"exchange(c.value,d.value)\">Submit</button> \n      <button type=\"button\" class=\"btn btn-dark\" style='margin-right:26px' (click)=\"cancel()\">Cancel</button> \n      </div>\n    </div> \n  </div>\n</div>\n<div class=\"container\" *ngIf=\"show1==true\">\n  <div class=\"card\">\n    <div class=\"card-header\">Exchange ETH to WAN</div>\n    <div class=\"card-body\">\n        <div class=\"wrapper\">\n          <div class=\"row\">\n            <div class=\"col-sm-9\">\n                <input type=\"text\" placeholder=\"ETH Private key\" #k (input)=\"length1(k.value)\" style='margin-right:20px; width:420px;' class=\"form-control ds\" id=\"name\" >\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"text\" placeholder=\"ETH Balance\" style='margin-right:20px;width:100px;'  class=\"form-control ds\" id=\"puk1\"  readonly>\n            </div>\n          </div>\n      </div><br>\n      <div class=\"wrapper\">\n          <div class=\"row\">\n              <div class=\"col-sm-9\">\n                  <input type=\"text\" placeholder=\"WAN Private key\" #l (input)=\"length(l.value)\" style='margin-right:20px; width:420px;' class=\"form-control ds\" id=\"name\" >\n              </div>\n              <div class=\"col-sm-3\">\n                  <input type=\"text\" placeholder=\"WAN Balance\" style='margin-right:20px;width:100px;'  class=\"form-control ds\" id=\"puk\"  readonly><br>\n              </div>\n            </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <input type=\"text\" placeholder=\"ETH Amount\" #m (input)=\"length3(m.value)\" class=\"form-control ds\" value=0 id=\"name\" >\n      </div>\n    \n      <div class=\"col-sm-6\">\n          <input type=\"text\" placeholder=\"WAN Amount\" #n class=\"form-control ds\" id=\"puk5\"  readonly>\n      </div>\n    </div>\n      <!-- <button type=\"button\" class=\"btn btn-dark\">Submit</button> -->\n    </div> \n   <div class=\"card-footer\">\n      <div class=\"wrapper\">\n      <button type=\"button\" class=\"btn btn-dark\" style='margin-right:26px' (click)=\"exchange2(m.value,n.value)\">Submit</button> \n      <button type=\"button\" class=\"btn btn-dark\" style='margin-right:26px' (click)=\"cancel1()\">Cancel</button> \n      </div>\n    </div> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wanchain_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wanchain-util */ "./node_modules/wanchain-util/index.js");
/* harmony import */ var wanchain_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wanchain_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethereumjs-tx */ "./node_modules/ethereumjs-tx/es5/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import Web3 = require('web3')

//import * as Tx from 'wanchain-util';

// var wanUtil = require('wanchain-util')
var Tx = wanchain_util__WEBPACK_IMPORTED_MODULE_3___default.a.wanchainTx;


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.show = false;
        this.show1 = false;
        console.log('home');
        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider('http://18.216.117.215:8545'));
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(new web3__WEBPACK_IMPORTED_MODULE_2___default.a.providers.HttpProvider('https://rinkeby.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        console.log(this.web3.version);
        console.log(this.web3.eth.accounts._provider);
        console.log(this._web3.eth.accounts._provider);
        //new this.web3(new this.web3.providers.HttpProvider("http://18.216.117.215:8545"));
        this.http.get('https://api.coinmarketcap.com/v2/ticker/1027/').subscribe(function (data1) {
            _this.data = data1;
            _this.usd = data1['data'].quotes.USD.price;
            _this.lastupdate = data1['data'].last_updated;
            _this.market = data1['data'].quotes.USD.market_cap;
            console.log(data1);
            console.log(data1['data'].quotes.USD.price);
            console.log(data1['data'].last_updated);
            console.log(data1['data'].quotes.USD.market_cap);
        });
        this.http.get('https://api.coinmarketcap.com/v2/ticker/2606/').subscribe(function (data1) {
            //this.data=data1;
            _this.usd1 = data1['data'].quotes.USD.price;
            _this.lastupdate1 = data1['data'].last_updated;
            _this.market1 = data1['data'].quotes.USD.market_cap;
            console.log(data1);
            console.log(data1['data'].quotes.USD.price);
            console.log(data1['data'].last_updated);
            console.log(data1['data'].quotes.USD.market_cap);
        });
        this.http.get('https://min-api.cryptocompare.com/data/price?fsym=WAN&tsyms=ETH,USD,EUR').subscribe(function (data1) {
            console.log(data1['ETH']);
            _this.ethvalue = data1['ETH'] / 100;
            console.log(_this.ethvalue);
        });
        this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=WAN,USD,EUR').subscribe(function (data1) {
            console.log(data1['WAN']);
            _this.wanvalue = data1['WAN'] / 100;
            console.log(_this.wanvalue);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.wan = function () {
        this.show = true;
        this.show1 = false;
    };
    HomeComponent.prototype.eth = function () {
        this.show1 = true;
        this.show = false;
    };
    HomeComponent.prototype.cancel = function () {
        this.show = false;
    };
    HomeComponent.prototype.cancel1 = function () {
        this.show1 = false;
    };
    HomeComponent.prototype.length = function (a) {
        // console.log('a')
        this.address = a;
        console.log(a);
        if (a.length > 1 && a.length == 64) {
            var add1;
            add1 = this.web3.eth.accounts.privateKeyToAccount('0x' + this.address);
            console.log(add1['address']);
            console.log(a.length);
            this.account(add1['address']);
        }
    };
    HomeComponent.prototype.account = function (add) {
        var self = this;
        console.log(add);
        this.web3.eth.getBalance(add, function (err, result) {
            // console.log(err)
            // console.log(result)
            self.res = result / 1000000000000000000;
            document.getElementById('puk').value = self.res.toFixed(4);
        });
    };
    HomeComponent.prototype.length1 = function (a) {
        // console.log('a')
        this.address1 = a;
        console.log(a);
        if (a.length > 1 && a.length == 64) {
            var add1;
            add1 = this._web3.eth.accounts.privateKeyToAccount('0x' + this.address1);
            console.log(add1['address']);
            console.log(a.length);
            this.account1(add1['address']);
        }
    };
    HomeComponent.prototype.account1 = function (add) {
        var self = this;
        console.log(add);
        this._web3.eth.getBalance(add, function (err, result) {
            console.log(err);
            console.log(result);
            self.res1 = result / 1000000000000000000;
            document.getElementById('puk1').value = self.res1.toFixed(4);
        });
    };
    HomeComponent.prototype.length2 = function (a) {
        // console.log('a')
        this.wan1 = a;
        console.log(a);
        if (a.length > 0) {
            var add1;
            add1 = this.wan1 * 100;
            var add2;
            add2 = add1 * this.ethvalue;
            console.log(a.length);
            console.log(add1);
            console.log(add2);
            this.account2(add2);
        }
    };
    HomeComponent.prototype.account2 = function (add2) {
        document.getElementById('puk2').value = add2;
    };
    HomeComponent.prototype.length3 = function (a) {
        // console.log('a')
        this.eth1 = a;
        console.log(a);
        if (a.length > 0) {
            var add1;
            add1 = this.eth1 * 100;
            var add2;
            add2 = add1 * this.wanvalue;
            console.log(a.length);
            console.log(add1);
            console.log(add2);
            this.account3(add2);
        }
    };
    HomeComponent.prototype.account3 = function (add2) {
        document.getElementById('puk5').value = add2;
    };
    HomeComponent.prototype.exchange = function (wan, eth) {
        var _this = this;
        var self = this;
        var add;
        var address;
        add = this.web3.eth.accounts.privateKeyToAccount('0X' + this.address);
        address = add['address'];
        console.log(address);
        var privateKey = buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].from(this.address, 'hex');
        var estimatedGas;
        var nonce;
        self.web3.eth.getTransactionCount(address).then(function (_nonce) {
            nonce = (_nonce).toString(16);
            console.log("Nonce: " + nonce);
            var txParams = {
                gasPrice: '0x09184e72a00',
                gasLimit: 4000000,
                to: '0xCf04f32C7e42F7F8531d27bf9448d0a957a66972',
                //data: functionAbi,
                from: address,
                chainId: 3,
                Txtype: 0x01,
                nonce: '0x' + nonce,
                value: wan * 1000000000000000000
            };
            var tx = new Tx(txParams);
            tx.sign(privateKey);
            console.log(tx);
            var serializedTx = tx.serialize();
            _this.web3.eth.getBalance(address, function (err, result) {
                console.log(result);
            });
            console.log(serializedTx);
            self.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                console.log(receipt);
                _this.web3.eth.getBalance(address, function (err, result) {
                    console.log("Value after increment: " + result);
                });
                if (receipt['status']) {
                    _this.web3.eth.getBalance(address, function (err, result) {
                        this.res = result / 1000000000000000000;
                        document.getElementById('puk').value = this.res.toFixed(4);
                        self.exchange1(eth);
                    });
                }
            });
        });
    };
    HomeComponent.prototype.exchange1 = function (eth) {
        var _this = this;
        console.log(eth);
        var self = this;
        var add;
        var add1;
        var address;
        var address1;
        add = this._web3.eth.accounts.privateKeyToAccount('0X' + this.address1);
        address1 = add['address'];
        ;
        add1 = this._web3.eth.accounts.privateKeyToAccount('0X' + 'c36a97a92b0dfc6d25cb101b584d368e426f7f331026b0709c313443397f7a06');
        address = add1['address'];
        console.log(address);
        var privateKey = buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].from('c36a97a92b0dfc6d25cb101b584d368e426f7f331026b0709c313443397f7a06', 'hex');
        var estimatedGas;
        var nonce;
        self._web3.eth.getTransactionCount(address).then(function (_nonce) {
            nonce = (_nonce).toString(16);
            console.log("Nonce: " + nonce);
            var txParams = {
                gasPrice: '0x09184e72a00',
                gasLimit: 4000000,
                to: address1,
                //data: functionAbi,
                from: address,
                chainId: 4,
                Txtype: 0x01,
                nonce: '0x' + nonce,
                value: eth * 1000000000000000000
            };
            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_4__(txParams);
            tx.sign(privateKey);
            console.log(tx);
            var serializedTx = tx.serialize();
            _this._web3.eth.getBalance(address1, function (err, result) {
                console.log(result);
            });
            console.log(serializedTx);
            self._web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                console.log(receipt);
                _this._web3.eth.getBalance(address1, function (err, result) {
                    console.log("Value after increment: " + result);
                });
                if (receipt['status']) {
                    _this._web3.eth.getBalance(address1, function (err, result) {
                        self.res1 = result / 1000000000000000000;
                        document.getElementById('puk1').value = self.res1.toFixed(4);
                    });
                }
            });
        });
    };
    HomeComponent.prototype.exchange2 = function (eth, wan) {
        var _this = this;
        var self = this;
        var add;
        var address;
        add = this._web3.eth.accounts.privateKeyToAccount('0X' + this.address1);
        address = add['address'];
        console.log(address);
        var privateKey = buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].from(this.address1, 'hex');
        var estimatedGas;
        var nonce;
        self._web3.eth.getTransactionCount(address).then(function (_nonce) {
            nonce = (_nonce).toString(16);
            console.log("Nonce: " + nonce);
            var txParams = {
                gasPrice: '0x09184e72a00',
                gasLimit: 4000000,
                to: '0xCb5a2170113081c32C643662ED23618CC696A3C5',
                //data: functionAbi,
                from: address,
                chainId: 4,
                Txtype: 0x01,
                nonce: '0x' + nonce,
                value: eth * 1000000000000000000
            };
            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_4__(txParams);
            tx.sign(privateKey);
            console.log(tx);
            var serializedTx = tx.serialize();
            _this._web3.eth.getBalance(address, function (err, result) {
                console.log(result);
            });
            console.log(serializedTx);
            self._web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                console.log(receipt);
                _this._web3.eth.getBalance(address, function (err, result) {
                    console.log("Value after increment: " + result);
                });
                if (receipt['status']) {
                    _this._web3.eth.getBalance(address, function (err, result) {
                        self.res1 = result / 1000000000000000000;
                        document.getElementById('puk1').value = self.res1.toFixed(4);
                        self.exchange3(wan);
                    });
                }
            });
        });
    };
    HomeComponent.prototype.exchange3 = function (wan) {
        var _this = this;
        console.log(wan);
        var self = this;
        var add;
        var add1;
        var address;
        var address1;
        add = this.web3.eth.accounts.privateKeyToAccount('0X' + this.address);
        address1 = add['address'];
        ;
        add1 = this.web3.eth.accounts.privateKeyToAccount('0X' + 'b85f7d62eea257d021f4d7e67da59b5a43d710ceab74dbfd0dee5b8121403d11');
        address = add1['address'];
        console.log(address);
        var privateKey = buffer__WEBPACK_IMPORTED_MODULE_5__["Buffer"].from('b85f7d62eea257d021f4d7e67da59b5a43d710ceab74dbfd0dee5b8121403d11', 'hex');
        var estimatedGas;
        var nonce;
        self.web3.eth.getTransactionCount(address).then(function (_nonce) {
            nonce = (_nonce).toString(16);
            console.log("Nonce: " + nonce);
            var txParams = {
                gasPrice: '0x09184e72a00',
                gasLimit: 4000000,
                to: address1,
                //data: functionAbi,
                from: address,
                chainId: 3,
                Txtype: 0x01,
                nonce: '0x' + nonce,
                value: wan * 1000000000000000000
            };
            var tx = new Tx(txParams);
            tx.sign(privateKey);
            console.log(tx);
            var serializedTx = tx.serialize();
            _this.web3.eth.getBalance(address1, function (err, result) {
                console.log(result);
            });
            console.log(serializedTx);
            self.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function (receipt) {
                console.log(receipt);
                _this.web3.eth.getBalance(address1, function (err, result) {
                    console.log("Value after increment: " + result);
                });
                if (receipt['status']) {
                    _this.web3.eth.getBalance(address1, function (err, result) {
                        self.res = result / 1000000000000000000;
                        document.getElementById('puk').value = self.res.toFixed(4);
                    });
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\exchangeapp\exchangedapp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map