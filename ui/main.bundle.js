webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var cookie = document.cookie;
        var cookieFound = cookie.indexOf("x-auth-token") >= 0;
        if (cookieFound) {
            console.log("Access found");
        }
        else {
            console.log("Access not found");
            if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
                window.location.href = "/user";
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Urls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURLS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var URLS = {
    local: "http://localhost:3000",
    prod: ""
};
var Urls = /** @class */ (function () {
    function Urls() {
    }
    Urls.getDomain = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) {
            return URLS.prod;
        }
        return URLS.local;
    };
    return Urls;
}());

var APIURLS = {
    flats: "/api/flats",
    maintenance: "/api/maintenance",
    expence: "/api/expence",
    totalCash: "/api/totalCash"
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__flats_flats_component__ = __webpack_require__("./src/app/flats/flats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__maintenance_maintenance_component__ = __webpack_require__("./src/app/maintenance/maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__expence_expence_component__ = __webpack_require__("./src/app/expence/expence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__monthly_report_monthly_report_component__ = __webpack_require__("./src/app/monthly-report/monthly-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__flats_report_flats_report_component__ = __webpack_require__("./src/app/flats-report/flats-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__flats_flats_service__ = __webpack_require__("./src/app/flats/flats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__maintenance_maintenance_service__ = __webpack_require__("./src/app/maintenance/maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__expence_expence_service__ = __webpack_require__("./src/app/expence/expence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_pager_service__ = __webpack_require__("./src/app/app.pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'flats', component: __WEBPACK_IMPORTED_MODULE_8__flats_flats_component__["a" /* FlatsComponent */] },
    { path: 'maintenance', component: __WEBPACK_IMPORTED_MODULE_10__maintenance_maintenance_component__["a" /* MaintenanceComponent */] },
    { path: 'expence', component: __WEBPACK_IMPORTED_MODULE_11__expence_expence_component__["a" /* ExpenceComponent */] },
    { path: 'monthlyReport', component: __WEBPACK_IMPORTED_MODULE_12__monthly_report_monthly_report_component__["a" /* MonthlyReportComponent */] },
    { path: 'flatsReport', component: __WEBPACK_IMPORTED_MODULE_13__flats_report_flats_report_component__["a" /* FlatsReportComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__flats_flats_component__["a" /* FlatsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__maintenance_maintenance_component__["a" /* MaintenanceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__expence_expence_component__["a" /* ExpenceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__monthly_report_monthly_report_component__["a" /* MonthlyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_13__flats_report_flats_report_component__["a" /* FlatsReportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["a" /* Ng2SearchPipeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__flats_flats_service__["a" /* FlatsService */], __WEBPACK_IMPORTED_MODULE_15__maintenance_maintenance_service__["a" /* MaintenanceService */], __WEBPACK_IMPORTED_MODULE_16__expence_expence_service__["a" /* ExpenceService */], __WEBPACK_IMPORTED_MODULE_17__app_pager_service__["a" /* PagerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/expence/expence.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/expence/expence.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n    This page is ment to add Expences in your community.\r\n  </div>\r\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 col-lg-5\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"clearfix\">\r\n            <h5 class=\"card-title float-left\">New Expence</h5>\r\n            <button class=\"btn btn-light float-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#newmaintForm\" aria-controls=\"newmaintForm\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle newmaintForm\">\r\n              <i class=\"fas fa-angle-down\"></i>\r\n            </button>\r\n          </div>\r\n          <div id=\"newmaintForm\" class=\"collapse navbar-collapse\">\r\n            <div class=\"form-group\">\r\n              <label for=\"maint No\">Date</label>\r\n              <input type=\"date\" id=\"datepicker\" class=\"form-control\"\r\n               placeholder=\"yyyy-mm-dd\"\r\n                [(ngModel)]=\"expen.date\" required>\r\n              <small class=\"form-text text-muted\">Please enter the Date in dd-mm-yyyy</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"ownerName\">Tenure</label>\r\n              <input required type=\"number\" class=\"form-control\" id=\"tenure\" placeholder=\"Enter the tenure\" [(ngModel)]=\"expen.tenure\">\r\n              <small class=\"form-text text-muted\">Please enter the Tenure</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"ownerName\">Expence Amount</label>\r\n              <input required type=\"number\" class=\"form-control\" id=\"ownerName\" placeholder=\"Enter Maintenance Amount\" [(ngModel)]=\"expen.amount\">\r\n              <small class=\"form-text text-muted\">Please enter the maintenance Amount</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"ownerPhNo\">Comment</label>\r\n              <textarea required row=\"3\" class=\"form-control\" id=\"ownerPhNo\" placeholder=\"Please add comment\" [(ngModel)]=\"expen.comment\">\r\n              </textarea>\r\n                <small class=\"form-text text-muted\">Please enter Comment if any</small>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"save()\">Submit</button>\r\n              <button type=\"reset\" class=\"btn btn-outline-secondary\" (click)=\"clear()\">Clear</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-8 col-lg-7\" *ngIf=\"expens\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">List of Expences : Expenditure so far : {{total}} </h5>\r\n          <div  class=\"input-group\">\r\n            <input class=\"form-control\" type=\"number\" name=\"tenure\" [(ngModel)]=\"tenure\"/> \r\n            <button class=\"btn btn-success\" (click)=\"get()\">GO</button>\r\n          </div>    \r\n            <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Given on </th>\r\n                  <th scope=\"col\">Tenure</th>\r\n                  <th scope=\"col\">Amount</th>\r\n                  <th scope=\"col\">Comment</th>\r\n                  <th scope=\"col\">option</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let expen of expens; let i = index\">\r\n                  <td>{{expen.date | date:'dd-MM-yyyy'}}</td>\r\n                  <td>{{expen.tenure}}</td>\r\n                  <td>{{expen.amount}}</td>\r\n                  <td>{{expen.comment}}</td>\r\n                  <td>\r\n                      <button class=\"btn btn-sm btn-danger\" (click)=\"delete(expen._id)\" >\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/expence/expence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expence_service__ = __webpack_require__("./src/app/expence/expence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expence_domains__ = __webpack_require__("./src/app/expence/expence.domains.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pager_service__ = __webpack_require__("./src/app/app.pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpenceComponent = /** @class */ (function () {
    function ExpenceComponent(expenceService, pagerService) {
        this.expenceService = expenceService;
        this.pagerService = pagerService;
        this.error = false;
        this.errorMessage = "";
        this.tenure = 3;
        // pager object
        this.pager = {};
    }
    ExpenceComponent.prototype.ngOnInit = function () {
        this.error = false;
        this.expen = new __WEBPACK_IMPORTED_MODULE_2__expence_domains__["a" /* Expence */]();
        this.get();
    };
    ExpenceComponent.prototype.clear = function () {
        this.expen = new __WEBPACK_IMPORTED_MODULE_2__expence_domains__["a" /* Expence */]();
    };
    ExpenceComponent.prototype.save = function () {
        var _this = this;
        this.error = false;
        this.expenceService.save(this.expen)
            .subscribe(function (flat) {
            console.log("Saved successfully");
            _this.get();
        }, function (err) {
            _this.handleError(err);
        });
    };
    ExpenceComponent.prototype.get = function () {
        var _this = this;
        this.error = false;
        this.expenceService.getByTenure(this.tenure)
            .subscribe(function (expens) {
            _this.expens = expens;
            _this.total = _this.expens.reduce(function (sum, item) { return sum + item.amount; }, 0);
            _this.setPage(1);
        }, function (err) {
            _this.handleError(err);
        });
    };
    ExpenceComponent.prototype.delete = function (_id) {
        var _this = this;
        this.error = false;
        console.log("Deleting " + _id);
        this.expenceService.delete(_id)
            .subscribe(function (flat) {
            console.log("Deleted successfully");
            _this.get();
        }, function (err) {
            _this.handleError(err);
        });
    };
    ExpenceComponent.prototype.handleError = function (err) {
        this.error = true;
        this.errorMessage = "Error calling the service";
    };
    ExpenceComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.expens.length, page);
        // get current page of items
        this.pagedItems = this.expens.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ExpenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-expence',
            template: __webpack_require__("./src/app/expence/expence.component.html"),
            styles: [__webpack_require__("./src/app/expence/expence.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__expence_service__["a" /* ExpenceService */], __WEBPACK_IMPORTED_MODULE_3__app_pager_service__["a" /* PagerService */]])
    ], ExpenceComponent);
    return ExpenceComponent;
}());



/***/ }),

/***/ "./src/app/expence/expence.domains.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expence; });
var Expence = /** @class */ (function () {
    function Expence() {
        this.date = "";
        this.tenure = 3;
        this.comment = "";
    }
    return Expence;
}());



/***/ }),

/***/ "./src/app/expence/expence.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ExpenceService = /** @class */ (function () {
    function ExpenceService(http) {
        this.http = http;
    }
    ExpenceService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].expence);
        return this.http.get(url);
    };
    ExpenceService.prototype.getByTenure = function (tenure) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].expence)
            .concat("/tenure/")
            .concat(tenure.toString());
        return this.http.get(url);
    };
    ExpenceService.prototype.save = function (maint) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].expence);
        return this.http.post(url, maint, { headers: httpOptions.headers });
    };
    ExpenceService.prototype.delete = function (_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].expence).concat("/").concat(_id);
        return this.http.delete(url, { headers: httpOptions.headers });
    };
    ExpenceService.prototype.getByMonth = function (year, month) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].expence)
                    .concat("/").concat(year.toString())
                    .concat("/").concat(month.toString());
                return [2 /*return*/, this.http.get(url).toPromise()];
            });
        });
    };
    ExpenceService.prototype.getAsyncByTenure = function (tenure) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].expence)
                    .concat("/tenure/")
                    .concat(tenure.toString());
                return [2 /*return*/, this.http.get(url).toPromise()];
            });
        });
    };
    ExpenceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ExpenceService);
    return ExpenceService;
}());



/***/ }),

/***/ "./src/app/flats-report/flats-report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/flats-report/flats-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  This page give you the maintenance give by each flat in your community.\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Maintenance collected for Flats</h5>\r\n        <div class=\"form-group\">\r\n            <label for=\"isOwner\">Flat No</label>\r\n            <select class=\"form-control\" id=\"flats\" [(ngModel)]=\"flatNumber\" (change)=\"getMaint()\">\r\n                <option *ngFor=\"let flat of flats\" [value]=\"flat.number\">{{flat.number}}</option>\r\n              </select>\r\n            <small class=\"form-text text-muted\">Please select Flat No</small>\r\n          </div>\r\n          <table class=\"table\" *ngIf=\"maints\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Flat No</th>\r\n                  <th scope=\"col\">Given on </th>\r\n                  <th scope=\"col\">Amount : {{total}} </th>\r\n                  <th scope=\"col\">Comment</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let maint of pagedItems | filter:filter; let i = index\">\r\n                  <th scope=\"row\">{{maint.flatNumber}}</th>\r\n                  <td>{{maint.date | date:'dd-MM-yyyy'}}</td>\r\n                  <td>{{maint.amount}}</td>\r\n                  <td>{{maint.comment}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <ul class=\"pagination\">\r\n              <li *ngFor=\"let page of pager.pages\" class=\"page-item\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\" >{{page}}</a>\r\n            </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flats-report/flats-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatsReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maintenance_maintenance_service__ = __webpack_require__("./src/app/maintenance/maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flats_flats_service__ = __webpack_require__("./src/app/flats/flats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pager_service__ = __webpack_require__("./src/app/app.pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatsReportComponent = /** @class */ (function () {
    function FlatsReportComponent(maintenanceService, flatsService, pagerService) {
        this.maintenanceService = maintenanceService;
        this.flatsService = flatsService;
        this.pagerService = pagerService;
        this.error = false;
        this.errorMessage = "";
        this.flatNumber = "";
        // pager object
        this.pager = {};
    }
    FlatsReportComponent.prototype.ngOnInit = function () {
        this.getFlats();
    };
    FlatsReportComponent.prototype.getFlats = function () {
        var _this = this;
        this.error = false;
        this.flatsService.getAllFlats()
            .subscribe(function (flats) {
            _this.flats = flats;
        }, function (err) {
            _this.handleError(err);
        });
    };
    FlatsReportComponent.prototype.getMaint = function () {
        var _this = this;
        console.log(this.flatNumber);
        this.maintenanceService.getByFlatno(this.flatNumber)
            .subscribe(function (maints) {
            _this.maints = maints;
            _this.total = _this.maints.reduce(function (sum, item) { return sum + item.amount; }, 0);
            _this.maints.sort(function (a, b) {
                return (+b.date) - (+a.date);
            });
            _this.setPage(1);
        }, function (err) {
            _this.handleError(err);
        });
    };
    FlatsReportComponent.prototype.handleError = function (err) {
        this.error = true;
        this.errorMessage = "Error calling the service";
    };
    FlatsReportComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.maints.length, page);
        // get current page of items
        this.pagedItems = this.maints.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    FlatsReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flats-report',
            template: __webpack_require__("./src/app/flats-report/flats-report.component.html"),
            styles: [__webpack_require__("./src/app/flats-report/flats-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__maintenance_maintenance_service__["a" /* MaintenanceService */], __WEBPACK_IMPORTED_MODULE_2__flats_flats_service__["a" /* FlatsService */], __WEBPACK_IMPORTED_MODULE_3__app_pager_service__["a" /* PagerService */]])
    ], FlatsReportComponent);
    return FlatsReportComponent;
}());



/***/ }),

/***/ "./src/app/flats/flats.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/flats/flats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  This page is ment to add flats in your community.\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-4 col-lg-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"clearfix\">\r\n        <h5 class=\"card-title float-left\">New Flat</h5>\r\n        <button class=\"btn btn-light float-right\" type=\"button\" data-toggle=\"collapse\" \r\n          data-target=\"#newFlatForm\" aria-controls=\"newFlatForm\"\r\n          aria-expanded=\"false\" aria-label=\"Toggle newFlatForm\">\r\n          <i class=\"fas fa-angle-down\"></i>\r\n        </button>\r\n        </div>\r\n        <div id=\"newFlatForm\" class=\"collapse navbar-collapse\">  \r\n          <div class=\"form-group\">\r\n            <label for=\"Flat No\">Flat No</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"flatNo\"\r\n             aria-describedby=\"flatNoHelp\" placeholder=\"Enter Flat Number\" [(ngModel)]=\"flat.number\">\r\n            <small id=\"flatNoHelp\" class=\"form-text text-muted\">Please enter the flat number</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"isOwner\">Owner</label>\r\n            <select id=\"owner\" class=\"form-control\" aria-describedby=\"isOwnerHelp\"  [(ngModel)]=\"flat.isOwner\">\r\n              <option value=\"true\">Yes </option>\r\n              <option value=\"false\">No </option>\r\n            </select>\r\n            <small id=\"isOwnerHelp\" class=\"form-text text-muted\">Please select whether the current stay is by owner or not</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ownerName\">Owner Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"ownerName\" aria-describedby=\"ownerNameHelp\" placeholder=\"Enter Owner Name\"  [(ngModel)]=\"flat.ownerName\">\r\n            <small id=\"ownerNameHelp\" class=\"form-text text-muted\">Please enter the flat Owner name</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ownerPhNo\">Owner Phone Number</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"ownerPhNo\" aria-describedby=\"ownerPhNoHelp\" placeholder=\"Enter Owner Phone Number\"  [(ngModel)]=\"flat.ownerPhNo\">\r\n            <small id=\"ownerPhNoHelp\" class=\"form-text text-muted\">Please enter the Owner Phone number</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"residentName\">Resident Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"residentName\" aria-describedby=\"residentNameHelp\" placeholder=\"Enter Resident Name\"  [(ngModel)]=\"flat.residentName\">\r\n            <small id=\"residentNameHelp\" class=\"form-text text-muted\">Please enter the Resident name</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"residentPhNo\">Resident Phone Number</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"residentPhNo\" aria-describedby=\"residentPhNoHelp\" placeholder=\"Enter Resident Phone Number\"  [(ngModel)]=\"flat.residentPhNo\">\r\n            <small id=\"residentPhNoHelp\" class=\"form-text text-muted\">Please enter the Resident Phone number</small>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveFlat()\">Submit</button>\r\n          <button type=\"reset\" class=\"btn btn-outline-secondary\" (click)=\"clear()\">Clear</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-8 col-lg-7\" *ngIf=\"flats\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">List of Flats</h5>\r\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\"> \r\n        <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Block</th>\r\n              <th scope=\"col\">Flat No</th>\r\n              <th scope=\"col\">Owner Name</th>\r\n              <th scope=\"col\">Owner Phone</th>\r\n              <th scope=\"col\">Resident Name</th>\r\n              <th scope=\"col\">Resident Phone</th>\r\n              <th scope=\"col\">Added On</th>\r\n              <th scope=\"col\">option</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let flat of pagedItems | filter:filter; let i = index\">\r\n              <td>{{flat.block}}</td>\r\n              <th scope=\"row\">{{flat.number}}</th>\r\n              <td>{{flat.ownerName}}</td>\r\n              <td>{{flat.ownerPhNo}}</td>\r\n              <td>{{flat.residentName}}</td>\r\n              <td>{{flat.residentPhNo}}</td>\r\n              <td>{{flat.createdDate | date:'dd-MM-yyyy'}}</td>\r\n              <td>\r\n                  <button class=\"btn btn-sm btn-danger\" (click)=\"delete(flat._id)\" >\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <ul class=\"pagination\">\r\n          <li *ngFor=\"let page of pager.pages\" class=\"page-item\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n            <a class=\"page-link\" (click)=\"setPage(page)\" >{{page}}</a>\r\n        </li>\r\n        </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/flats/flats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flats_domains__ = __webpack_require__("./src/app/flats/flats.domains.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flats_service__ = __webpack_require__("./src/app/flats/flats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pager_service__ = __webpack_require__("./src/app/app.pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatsComponent = /** @class */ (function () {
    function FlatsComponent(flatsService, pagerService) {
        this.flatsService = flatsService;
        this.pagerService = pagerService;
        this.error = false;
        this.errorMessage = "";
        // pager object
        this.pager = {};
    }
    FlatsComponent.prototype.ngOnInit = function () {
        this.error = false;
        this.flat = new __WEBPACK_IMPORTED_MODULE_1__flats_domains__["a" /* Flats */]();
        this.getFlats();
    };
    FlatsComponent.prototype.clear = function () {
        this.flat = new __WEBPACK_IMPORTED_MODULE_1__flats_domains__["a" /* Flats */]();
    };
    FlatsComponent.prototype.saveFlat = function () {
        var _this = this;
        this.error = false;
        console.log("Saving flat" + this.flat);
        this.flatsService.saveFlat(this.flat)
            .subscribe(function (flat) {
            console.log("Flat saved successfully");
            _this.getFlats();
        }, function (err) {
            _this.handleError(err);
        });
    };
    FlatsComponent.prototype.getFlats = function () {
        var _this = this;
        this.error = false;
        this.flatsService.getAllFlats()
            .subscribe(function (flats) {
            _this.flats = flats;
            _this.setPage(1);
        }, function (err) {
            _this.handleError(err);
        });
    };
    FlatsComponent.prototype.delete = function (flatno) {
        var _this = this;
        this.error = false;
        console.log("Deleting  flat" + flatno);
        this.flatsService.delete(flatno)
            .subscribe(function (flat) {
            console.log("Flat Deleted successfully");
            _this.getFlats();
        }, function (err) {
            _this.handleError(err);
        });
    };
    FlatsComponent.prototype.handleError = function (err) {
        this.error = true;
        this.errorMessage = "Error calling the service";
        console.log(err);
    };
    FlatsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.flats.length, page);
        // get current page of items
        this.pagedItems = this.flats.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    FlatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flats',
            template: __webpack_require__("./src/app/flats/flats.component.html"),
            styles: [__webpack_require__("./src/app/flats/flats.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__flats_service__["a" /* FlatsService */], __WEBPACK_IMPORTED_MODULE_3__app_pager_service__["a" /* PagerService */]])
    ], FlatsComponent);
    return FlatsComponent;
}());



/***/ }),

/***/ "./src/app/flats/flats.domains.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flats; });
var Flats = /** @class */ (function () {
    function Flats() {
        this.number = "";
        this.block = "";
        this.ownerName = "";
        this.residentName = "";
        this.ownerPhNo = "";
        this.residentPhNo = "";
        this.createdDate = new Date();
        this.dateStr = "";
    }
    return Flats;
}());



/***/ }),

/***/ "./src/app/flats/flats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var FlatsService = /** @class */ (function () {
    function FlatsService(http) {
        this.http = http;
    }
    FlatsService.prototype.getAllFlats = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].flats);
        return this.http.get(url);
    };
    FlatsService.prototype.saveFlat = function (flat) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].flats);
        return this.http.post(url, flat, { headers: httpOptions.headers });
    };
    FlatsService.prototype.delete = function (flatno) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].flats).concat("/").concat(flatno);
        return this.http.delete(url, { headers: httpOptions.headers });
    };
    FlatsService.prototype.getAllFlatsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].flats);
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    FlatsService.prototype.getTotalCash = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].totalCash);
        var response = this.http.get(url);
        return response;
    };
    FlatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FlatsService);
    return FlatsService;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  This page is ment to add Maintenance in your community.\r\n  tenure 1-> july 2015 to june 2016, 2 -> july 2016 to june 2017, 3->july 2017 to june 2018, and so on ...\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{errorMessage}}\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-4 col-lg-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Create Maintenance</h5>\r\n        <table>\r\n          <tr>\r\n            <th>Tenure</th>\r\n            <th>Year</th>\r\n            <th>Month</th>\r\n            <th>Amount</th>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <select type=\"text\" class=\"form-control btn-sm\" [(ngModel)]=\"tenure.tenure\">\r\n                <option *ngFor=\"let t of tenures\" [value]=\"t\">{{t}}</option>\r\n              </select>\r\n            </td>\r\n            <td>\r\n              <select type=\"text\" class=\"form-control btn-sm\" [(ngModel)]=\"tenure.year\">\r\n                <option *ngFor=\"let t of years\" [value]=\"t\">{{t}}</option>\r\n              </select>\r\n            </td>\r\n            <td>\r\n            <select type=\"text\" class=\"form-control btn-sm\" [(ngModel)]=\"tenure.month\">\r\n                <option *ngFor=\"let t of months\" [value]=\"t\">{{t}}</option>\r\n              </select>\r\n            </td>\r\n            <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"tenure.amount\"></td>\r\n            <td>\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"save()\">Submit</button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-8 col-lg-7\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <table>\r\n          <tr>\r\n            <th>Tenure</th>\r\n            <th>Date</th>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <select type=\"text\" class=\"form-control btn-sm\" [(ngModel)]=\"selTenure\" (change)=\"loadDates();\">\r\n                <option *ngFor=\"let t of tenures\" [value]=\"t\">{{t}}</option>\r\n              </select>\r\n            </td>\r\n            <td><select type=\"text\" class=\"form-control btn-sm\" [(ngModel)]=\"selTenureId\"  (change)=\"getMaint();\" >\r\n                <option *ngFor=\"let ten of tenureRecords\" [value]=\"ten._id\" >{{ten.month}}-{{ten.year}}</option>\r\n              </select></td>\r\n          </tr>\r\n        </table>\r\n        <h5 class=\"card-title\">List of maints : Maintenance collected so far : {{total}}</h5>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Flat No</th>\r\n                <th scope=\"col\">Status </th>\r\n                <th scope=\"col\">Amount</th>\r\n                <th scope=\"col\">Comment</th>\r\n                <th scope=\"col\">option</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"maints\">\r\n              <tr *ngFor=\"let maint of maints.details\">\r\n                <th scope=\"row\">{{maint.flatNumber}}</th>\r\n                <td>\r\n                  {{maint.status}}&nbsp;  \r\n                  <i *ngIf=\"maint.status==='PAID'\" class=\"fa fa-check-circle\" style=\"color:green\"></i>\r\n                </td>\r\n                <td>{{maint.amount}}</td>\r\n                <td>{{maint.comment}}</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-secondary\" \r\n                  data-toggle=\"modal\" \r\n                  data-target=\"#approveMaint\" (click)=\"update(maints._id,maint)\">\r\n                    <i class=\"fa fa-cogs\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"approveMaint\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n         <h3>{{selmaintDetail.flatNumber}}</h3>\r\n         <small>\r\n           Updated On {{selmaintDetail.updatedDate|date:'dd/MM/yyyy'}},\r\n           Created On {{selmaintDetail.createdDate|date:'dd/MM/yyyy'}},\r\n         </small>\r\n         <div class=\"form-group\">\r\n         <label>Status</label>\r\n          <select type=\"text\" class=\"form-control btn-sm\" [(ngModel)]=\"selmaintDetail.status\">\r\n             <option value=\"PAID\">PAID</option>\r\n             <option value=\"PENDING\">PENDING</option>\r\n          </select>\r\n         </div>\r\n         <div class=\"form-group\">\r\n         <label>Comments Please</label>\r\n         <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"selmaintDetail.comment\"></textarea>\r\n         </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <small>Tenure Id {{maintId}}, Flat Id: {{selmaintDetail._id}}</small>&nbsp;\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"approve(maintId,selmaintDetail._id)\">Save changes</button>\r\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maintenance_domains__ = __webpack_require__("./src/app/maintenance/maintenance.domains.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintenance_service__ = __webpack_require__("./src/app/maintenance/maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flats_flats_service__ = __webpack_require__("./src/app/flats/flats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_pager_service__ = __webpack_require__("./src/app/app.pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(maintenanceService, flatsService, pagerService) {
        this.maintenanceService = maintenanceService;
        this.flatsService = flatsService;
        this.pagerService = pagerService;
        this.error = false;
        this.errorMessage = "";
        this.selTenure = 0;
        this.tenures = [];
        this.months = [];
        this.years = [];
        this.selTenureId = "";
        this.selmaintDetail = {};
        // pager object
        this.pager = {};
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        this.error = false;
        this.maint = new __WEBPACK_IMPORTED_MODULE_1__maintenance_domains__["a" /* Maintenance */]();
        this.tenure = new __WEBPACK_IMPORTED_MODULE_1__maintenance_domains__["b" /* Tenure */]();
        for (var index = 1; index <= 20; index++) {
            this.tenures.push(index);
        }
        for (var index = 1; index <= 12; index++) {
            this.months.push(index);
        }
        for (var index = 2015; index <= 2025; index++) {
            this.years.push(index);
        }
    };
    MaintenanceComponent.prototype.clear = function () {
        this.maint = new __WEBPACK_IMPORTED_MODULE_1__maintenance_domains__["a" /* Maintenance */]();
    };
    MaintenanceComponent.prototype.getFlats = function () {
        var _this = this;
        this.error = false;
        this.flatsService.getAllFlats()
            .subscribe(function (flats) {
            _this.flats = flats;
            _this.setPage(1);
        }, function (err) {
            _this.handleError(err);
        });
    };
    MaintenanceComponent.prototype.loadDates = function () {
        var _this = this;
        this.maintenanceService.getByTenure(this.selTenure)
            .subscribe(function (tenureRecords) {
            tenureRecords.sort(function (a, b) { return a.month - b.month; });
            _this.tenureRecords = tenureRecords;
        }, function (err) {
            _this.handleError(err);
        });
    };
    MaintenanceComponent.prototype.getMaint = function () {
        var _this = this;
        console.log(this.selTenureId);
        this.maints = this.tenureRecords.filter(function (rec) { return rec._id === _this.selTenureId; })[0];
        console.log(this.maints);
    };
    MaintenanceComponent.prototype.save = function () {
        var _this = this;
        this.error = false;
        if (this.tenure.tenure < 0 && this.tenure.tenure > 20) {
            this.error = true;
            this.errorMessage = "Invalid tenure";
            return;
        }
        if (this.tenure.amount < 0) {
            this.error = true;
            this.errorMessage = "Invalid Amount";
            return;
        }
        if (this.tenure.year < 2015 && this.tenure.year > 2025) {
            this.error = true;
            this.errorMessage = "Invalid Year";
            return;
        }
        if (this.tenure.month < 0 && this.tenure.month > 12) {
            this.error = true;
            this.errorMessage = "Invalid Month";
            return;
        }
        this.maintenanceService.create(this.tenure)
            .subscribe(function (maint) {
            console.log("Saved successfully");
            alert("Tenure Created");
        }, function (err) {
            _this.handleError(err);
        });
    };
    MaintenanceComponent.prototype.update = function (maintId, maint) {
        this.selmaintDetail = maint;
        this.maintId = maintId;
    };
    MaintenanceComponent.prototype.approve = function (maintId, detailId) {
        var _this = this;
        console.log(this.selmaintDetail);
        this.maintenanceService.approve(maintId, detailId, this.selmaintDetail)
            .subscribe(function (updatedRec) {
            alert("Updated successfully");
            console.log(_this.selmaintDetail);
        }, function (err) {
            _this.handleError(err);
        });
    };
    MaintenanceComponent.prototype.get = function () {
        var _this = this;
        this.error = false;
        this.maintenanceService.getAll()
            .subscribe(function (maints) {
            _this.maints = maints;
            _this.total = _this.maints.reduce(function (sum, item) { return sum + item.amount; }, 0);
        }, function (err) {
            _this.handleError(err);
        });
    };
    MaintenanceComponent.prototype.delete = function (_id) {
        var _this = this;
        this.error = false;
        console.log("Deleting " + _id);
        this.maintenanceService.delete(_id)
            .subscribe(function (flat) {
            console.log("Deleted successfully");
            _this.get();
        }, function (err) {
            _this.handleError(err);
        });
    };
    MaintenanceComponent.prototype.handleError = function (err) {
        this.error = true;
        this.errorMessage = "Error calling the service";
        console.log(err.error.errorMessage.errmsg);
    };
    MaintenanceComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.maints.length, page);
        // get current page of items
        this.pagedItems = this.maints.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    MaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maintenance',
            template: __webpack_require__("./src/app/maintenance/maintenance.component.html"),
            styles: [__webpack_require__("./src/app/maintenance/maintenance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__maintenance_service__["a" /* MaintenanceService */], __WEBPACK_IMPORTED_MODULE_3__flats_flats_service__["a" /* FlatsService */], __WEBPACK_IMPORTED_MODULE_4__app_pager_service__["a" /* PagerService */]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.domains.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maintenance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tenure; });
/* unused harmony export MaintenanceDetail */
var Maintenance = /** @class */ (function () {
    function Maintenance() {
        this.flatNumber = "";
        this.comment = "";
    }
    return Maintenance;
}());

var Tenure = /** @class */ (function () {
    function Tenure() {
        this.tenure = 3;
        this.year = 2017;
        this.month = 1;
        this.amount = 750;
    }
    return Tenure;
}());

var MaintenanceDetail = /** @class */ (function () {
    function MaintenanceDetail() {
        this.flatNumber = "";
        this.comment = "";
    }
    return MaintenanceDetail;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var MaintenanceService = /** @class */ (function () {
    function MaintenanceService(http) {
        this.http = http;
    }
    MaintenanceService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance);
        return this.http.get(url);
    };
    MaintenanceService.prototype.getByTenure = function (selTenure) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain()
            .concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance)
            .concat("/tenure/")
            .concat(selTenure.toString());
        return this.http.get(url, { headers: httpOptions.headers });
    };
    MaintenanceService.prototype.create = function (tenure) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance)
            .concat("/")
            .concat(tenure.year.toString())
            .concat("/")
            .concat(tenure.month.toString())
            .concat("/")
            .concat(tenure.tenure.toString())
            .concat("/")
            .concat(tenure.amount.toString());
        return this.http.put(url, { headers: httpOptions.headers });
    };
    MaintenanceService.prototype.delete = function (_id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance).concat("/").concat(_id);
        return this.http.delete(url, { headers: httpOptions.headers });
    };
    MaintenanceService.prototype.getByFlatno = function (flatNo) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance).concat("/").concat(flatNo);
        return this.http.get(url);
    };
    MaintenanceService.prototype.approve = function (mainId, detailId, details) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance)
            .concat("/").concat(mainId)
            .concat("/").concat(detailId);
        return this.http.post(url, details, { headers: httpOptions.headers });
    };
    MaintenanceService.prototype.getByMonth = function (year, month) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance)
                            .concat("/").concat(year.toString())
                            .concat("/").concat(month.toString());
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    MaintenanceService.prototype.getAsyncByTenure = function (selTenure) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain()
                    .concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].maintenance)
                    .concat("/tenure/")
                    .concat(selTenure.toString());
                return [2 /*return*/, this.http.get(url, { headers: httpOptions.headers }).toPromise()];
            });
        });
    };
    MaintenanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MaintenanceService);
    return MaintenanceService;
}());



/***/ }),

/***/ "./src/app/monthly-report/monthly-report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/monthly-report/monthly-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\r\n  This page is ment to View Monthly Report.\r\n</div>\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{errorMessage}}\r\n</div>\r\n<div class=\"form-inline\">\r\n  Year\r\n  <select class=\"form-control\" [(ngModel)]=\"year\">\r\n    <option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</option>\r\n  </select>\r\n  Month\r\n  <select class=\"form-control\" [(ngModel)]=\"month\">\r\n    <option *ngFor=\"let m of months\" [value]=\"m\">{{m}}</option>\r\n  </select>\r\n  &nbsp;\r\n  <button class=\"btn btn-primary\" (click)=\"submit()\">Submit</button>\r\n</div>\r\n<hr/>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-4 col-lg-4\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header bg-secondary\">\r\n            Summary for {{month}}-{{year}}\r\n          </div>\r\n      <div class=\"card-body\">\r\n          <dl class=\"row\">\r\n              <dt class=\"col-sm-7\">Maintenance Collected</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.maintenanceCollection_Month<0?'red':'#000099'\">{{monthlySummary.maintenanceCollection_Month| currency:'INR'}}</dd>\r\n              <dt class=\"col-sm-7\">Expence Made</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.expenditure_Month<0?'red':'#000099'\">{{monthlySummary.expenditure_Month| currency:'INR'}}</dd>\r\n              <dt class=\"col-sm-7\">Pending Payment</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.pending>0?'red':'#000099'\">{{monthlySummary.pending| currency:'INR'}}</dd>\r\n\r\n              <dt class=\"col-sm-7\">Available Balance</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.availableBalance_Month<0?'red':'#000099'\">{{monthlySummary.availableBalance_Month| currency:'INR'}}</dd>\r\n          </dl>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header bg-secondary\">\r\n            Summary for Tenure {{tenure}}\r\n          </div>\r\n      <div class=\"card-body\">\r\n        <div  class=\"input-group\">\r\n            <input class=\"form-control\" type=\"number\" name=\"tenure\" [(ngModel)]=\"tenure\"/> \r\n            <button class=\"btn btn-success\" (click)=\"getByTenure()\">GO</button>\r\n          </div>\r\n          <dl class=\"row\">\r\n              <dt class=\"col-sm-7\">Maintenance Collected</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.maintenanceCollection_Year<0?'red':'#000099'\">{{monthlySummary.maintenanceCollection_Year| currency:'INR'}}</dd>\r\n              <dt class=\"col-sm-7\">Expence Made</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.expenditure_Year<0?'red':'#000099'\">{{monthlySummary.expenditure_Year| currency:'INR'}}</dd>\r\n              <dt class=\"col-sm-7\">Pending Payment</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.pending_year>0?'red':'#000099'\">{{monthlySummary.pending_year| currency:'INR'}}</dd>\r\n              <dt class=\"col-sm-7\">Available Balance</dt>\r\n              <dd class=\"col-sm-5\" [style.color]=\"monthlySummary.availableBalance_Year<0?'red':'#000099'\">{{monthlySummary.availableBalance_Year| currency:'INR'}}</dd>\r\n          </dl>\r\n          <h5 [style.color]=\"'#000099'\">Total Available Cash: {{monthlySummary.availableBalance_Year | currency:'INR'}}</h5>\r\n          <div class=\"clearfix\">\r\n            <h5 class=\"card-title float-left\">View Pending Amount Details</h5>\r\n            <button class=\"btn btn-light float-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#pendingDtls\" \r\n            aria-controls=\"pendingDtls\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle pendingDtls\">\r\n              <i class=\"fas fa-angle-down\"></i>\r\n            </button>\r\n          </div>\r\n        <div id=\"pendingDtls\" class=\"collapse navbar-collapse\">\r\n          <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Flat No</th>\r\n                  <th scope=\"col\">Month </th>\r\n                  <th scope=\"col\">year </th>\r\n                  <th scope=\"col\">Amount</th>\r\n                  <th scope=\"col\">Comment</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let maint of maintenanceDetail\" >\r\n                  <td >{{maint.flatNumber}}</td>\r\n                  <td >{{maint.month}}</td>\r\n                  <td >{{maint.year}}</td>\r\n                  <td [ngClass]=\"maint.status=='PENDING'?'bg-danger':''\" >{{maint.amount}}</td>\r\n                  <td>{{maint.comment}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-4 col-lg-4\" *ngIf=\"maints\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header bg-primary\">\r\n            Details of Maintenance  {{month}}-{{year}}\r\n        </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Flat No</th>\r\n                  <th scope=\"col\" style=\"width:20px;\">Date </th>\r\n                  <th scope=\"col\">Amount</th>\r\n                  <th scope=\"col\">Comment</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let maint of maints.details\" >\r\n                  <td >{{maint.flatNumber}}</td>\r\n                  <td nowrap>{{maint.updatedDate | date:'dd-MMM'}}</td>\r\n                  <td [ngClass]=\"maint.status=='PENDING'?'bg-danger':''\" >{{maint.amount}}</td>\r\n                  <td>{{maint.comment}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-4 col-lg-4\" *ngIf=\"expens\">\r\n      <div class=\"card\">\r\n          <div class=\"card-header bg-info\">\r\n              Details of Expence  {{month}}-{{year}}\r\n          </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Date</th>\r\n                    <th scope=\"col\">Amount</th>\r\n                    <th scope=\"col\">Comment</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let exp of expens\">\r\n                    <td nowrap>{{exp.date | date:'dd-MMM'}}</td>\r\n                    <td>{{exp.amount}}</td>\r\n                    <td>{{exp.comment}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/monthly-report/monthly-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maintenance_maintenance_service__ = __webpack_require__("./src/app/maintenance/maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flats_flats_service__ = __webpack_require__("./src/app/flats/flats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maintenance_maintenance_domains__ = __webpack_require__("./src/app/maintenance/maintenance.domains.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expence_expence_service__ = __webpack_require__("./src/app/expence/expence.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__monthly_report_domain__ = __webpack_require__("./src/app/monthly-report/monthly-report.domain.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MonthlyReportComponent = /** @class */ (function () {
    function MonthlyReportComponent(maintenanceService, flatsService, expenceService) {
        this.maintenanceService = maintenanceService;
        this.flatsService = flatsService;
        this.expenceService = expenceService;
        this.months = [];
        this.years = [];
        this.error = false;
        this.errorMessage = "";
        this.maintsTenure = [];
        this.monthlyReports = {};
        this.maintRepo = [];
        this.monthlySummary = new __WEBPACK_IMPORTED_MODULE_5__monthly_report_domain__["a" /* MonthlyReportSummary */]();
        this.tenure = 3;
        this.maintenanceDetail = [];
    }
    MonthlyReportComponent.prototype.ngOnInit = function () {
        for (var index = 1; index <= 12; index++) {
            this.months.push(index);
        }
        for (var index = 2015; index < 2025; index++) {
            this.years.push(index);
        }
    };
    MonthlyReportComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.maints = new __WEBPACK_IMPORTED_MODULE_3__maintenance_maintenance_domains__["a" /* Maintenance */]();
                        this.flats = [];
                        this.expens = [];
                        this.maintRepo = [];
                        this.error = false;
                        this.maintsTenure = [];
                        if (typeof this.year === 'undefined' || this.year === null) {
                            this.error = true;
                            this.errorMessage = "Please select the year";
                        }
                        if (typeof this.month === 'undefined' || this.month === null) {
                            this.error = true;
                            this.errorMessage = "Please select the month";
                        }
                        _a = this;
                        return [4 /*yield*/, this.maintenanceService.getByMonth(this.year, this.month)];
                    case 1:
                        _a.maints = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.expenceService.getByMonth(this.year, this.month)];
                    case 2:
                        _b.expens = _c.sent();
                        this.monthlySummary.expenditure_Month = this.expens.reduce(function (sum, item) { return sum + item.amount; }, 0);
                        this.monthlySummary.maintenanceCollection_Month = this.maints.details
                            .filter(function (maint) { return maint.status === 'PAID'; })
                            .reduce(function (sum, item) { return sum + item.amount; }, 0);
                        this.monthlySummary.pending = this.maints.details
                            .filter(function (maint) { return maint.status === 'PENDING'; })
                            .reduce(function (sum, item) { return sum + item.amount; }, 0);
                        this.monthlySummary.availableBalance_Month = this.monthlySummary.maintenanceCollection_Month - this.monthlySummary.expenditure_Month;
                        return [2 /*return*/];
                }
            });
        });
    };
    MonthlyReportComponent.prototype.getByTenure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var maintsTenure, expenseTenure, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.maintenanceService.getAsyncByTenure(this.tenure)];
                    case 1:
                        maintsTenure = _a.sent();
                        return [4 /*yield*/, this.expenceService.getAsyncByTenure(this.tenure)];
                    case 2:
                        expenseTenure = _a.sent();
                        console.log(maintsTenure);
                        for (i = 0; i < maintsTenure.length; i++) {
                            maintsTenure[i].details.forEach(function (det) {
                                _this.maintsTenure.push(det);
                            });
                        }
                        console.log(this.maintsTenure);
                        this.monthlySummary.maintenanceCollection_Year = this.maintsTenure
                            .filter(function (maint) { return maint.status === 'PAID'; })
                            .reduce(function (sum, item) { return sum + item.amount; }, 0);
                        this.monthlySummary.expenditure_Year = expenseTenure.reduce(function (sum, item) { return sum + item.amount; }, 0);
                        this.monthlySummary.pending_year = this.maintsTenure
                            .filter(function (maint) { return maint.status === 'PENDING'; })
                            .reduce(function (sum, item) { return sum + item.amount; }, 0);
                        this.monthlySummary.availableBalance_Year = this.monthlySummary.maintenanceCollection_Year - this.monthlySummary.expenditure_Year;
                        this.maintenanceDetail = this.maintsTenure.filter(function (maint) { return maint.status === 'PENDING'; });
                        return [2 /*return*/];
                }
            });
        });
    };
    MonthlyReportComponent.prototype.handleError = function (err) {
        this.error = true;
        this.errorMessage = "Error calling the service";
    };
    MonthlyReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monthly-report',
            template: __webpack_require__("./src/app/monthly-report/monthly-report.component.html"),
            styles: [__webpack_require__("./src/app/monthly-report/monthly-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__maintenance_maintenance_service__["a" /* MaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_2__flats_flats_service__["a" /* FlatsService */],
            __WEBPACK_IMPORTED_MODULE_4__expence_expence_service__["a" /* ExpenceService */]])
    ], MonthlyReportComponent);
    return MonthlyReportComponent;
}());



/***/ }),

/***/ "./src/app/monthly-report/monthly-report.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyReportSummary; });
/* unused harmony export MonthlyReport */
var MonthlyReportSummary = /** @class */ (function () {
    function MonthlyReportSummary() {
        this.maintenanceCollection_Month = 0;
        this.expenditure_Month = 0;
        this.availableBalance_Month = 0;
        this.maintenanceCollection_Year = 0;
        this.expenditure_Year = 0;
        this.availableBalance_Year = 0;
    }
    return MonthlyReportSummary;
}());

var MonthlyReport = /** @class */ (function () {
    function MonthlyReport(flatNo) {
        this.flatNo = "";
        this.amount = 0;
        this.comment = "";
        this.flatNo = flatNo;
    }
    return MonthlyReport;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Sevvel</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/flats\" routerLinkActive=\"active\">Flats</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/maintenance\" routerLinkActive=\"active\">Maintenance</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/expence\" routerLinkActive=\"active\">Expences</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" \r\n        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Reports\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <!-- <a class=\"dropdown-item\" routerLink=\"/flatsReport\" routerLinkActive=\"active\">Paid By Flats</a>-->\r\n          <a class=\"dropdown-item\" routerLink=\"/monthlyReport\" routerLinkActive=\"active\">Monthly</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map