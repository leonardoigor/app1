(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\r\n<div *ngIf=\"jogoEmAndamento;else fimDeJogo\">\r\n    <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\r\n\r\n</div>\r\n\r\n<ng-template #fimDeJogo>\r\n    <div *ngIf=\"tipoEncerramento ==='derrota'; else fimDeJogoVitoria\" class=\"container mt-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 style=\"color:red\">Fim de jogo,Infelismente voce perdeu :S</h2>\r\n                <button class=\"btn btn-outline-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #fimDeJogoVitoria>\r\n    <div class=\"container mt-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 style=\"color:green\">Fim de jogo voce ganhou Xd</h2>\r\n                <button class=\"btn btn-outline-primary\" (click)=\"reiniciarJogo()\">Jogar novamente</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        // console.log(tipo)
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topo/topo.component */ "./app/topo/topo.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel/painel.component */ "./app/painel/painel.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./app/tentativas/tentativas.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progresso/progresso.component */ "./app/progresso/progresso.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _topo_topo_component__WEBPACK_IMPORTED_MODULE_5__["TopoComponent"],
                _painel_painel_component__WEBPACK_IMPORTED_MODULE_6__["PainelComponent"],
                _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_7__["TentativasComponent"],
                _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_8__["ProgressoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/painel/frases-mock.ts":
/*!***********************************!*\
  !*** ./app/painel/frases-mock.ts ***!
  \***********************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
var FRASES = [
    { fraseEN: "how are You?", frasePt: "como vai voce?" },
    { fraseEN: 'I like to learn', frasePt: 'eu gosto de aprender' },
    { fraseEN: 'I watch tv', frasePt: 'eu assisto tv' },
    { fraseEN: 'I eat bread', frasePt: 'eu como pão' }
];


/***/ }),

/***/ "./app/painel/painel.component.css":
/*!*****************************************!*\
  !*** ./app/painel/painel.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron\r\n{\r\n    margin-top:20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n.mensagem\r\n{\r\n    top: 27px;\r\n    right: 50%;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uXHJcbntcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLm1lbnNhZ2VtXHJcbntcclxuICAgIHRvcDogMjdweDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./app/painel/painel.component.html":
/*!******************************************!*\
  !*** ./app/painel/painel.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n \n<div class=\"container\">\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <app-progresso [progresso]=\"progresso\" ></app-progresso>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"d-flex justify-content-end\">\n                    <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <h6>{{instrucao}}</h6>\n                <p>{{rodadaFrase.fraseEN}}</p>\n                <p [class]=\"ClassMensagem\">{{menssage}}</p>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\"(input)=\"atualizaResposta($event)\" [value]=\"resposta\"></textarea>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"d-flex justify-content-end\">\n                    <button class=\"btn btn-primary\" (click)=\"verificarResposta()\">Verificar</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./app/painel/painel.component.ts":
/*!****************************************!*\
  !*** ./app/painel/painel.component.ts ***!
  \****************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frases-mock */ "./app/painel/frases-mock.ts");



var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_2__["FRASES"];
        this.instrucao = "Traduza a frase";
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.menssage = '';
        this.menssagemGreen = "mensagem alert-success ";
        this.menssagemRed = "mensagem  alert-danger";
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.atualizaRodada();
        this.MenssagemEndGame();
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        // console.log("painel destruido")
    };
    PainelComponent.prototype.ngOnChanges = function () {
        this.MenssagemEndGame();
    };
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
    };
    PainelComponent.prototype.verificarResposta = function () {
        // vericar acertos
        if (this.rodadaFrase.frasePt == this.resposta.toLowerCase()) {
            // progesssbar start
            this.progresso = this.progresso + (100 / this.frases.length);
            // progressbar end
            this.rodada++;
            if (this.progresso === 100) {
                this.menssage = 'ganhou';
                this.encerrarJogo.emit('vitoria');
            }
            if (this.rodada >= this.frases.length) {
                this.rodada = 0;
            }
            this.atualizaRodada();
            if (this.progresso < 100) {
                this.menssage = 'Traduçao correta';
            }
            if (this.progresso > 100) {
                this.progresso = 0;
                // this.ide=true
            }
        }
        else {
            this.menssage = 'Traduçao errada';
            // lost life
            this.tentativas--;
            if (this.tentativas == -1) {
                this.menssage = 'Voce perdeu todas tentativas';
                this.encerrarJogo.emit('derrota');
                this.tentativas = 0;
                // this.ide=false
            }
            // console.log(this.tentativas)
        }
    };
    // limpar campo
    PainelComponent.prototype.atualizaRodada = function () {
        this.rodadaFrase = this.frases[this.rodada];
        this.resposta = '';
    };
    // change class front-end
    PainelComponent.prototype.MenssagemEndGame = function () {
        var ide = true;
        // console.log(ide)
        if (ide) {
            this.ClassMensagem = this.menssagemGreen;
        }
        else {
            this.ClassMensagem = this.menssagemRed;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel',
            template: __webpack_require__(/*! ./painel.component.html */ "./app/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.css */ "./app/painel/painel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./app/progresso/progresso.component.css":
/*!***********************************************!*\
  !*** ./app/progresso/progresso.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress\r\n{\r\n    background:#EEF8DA;\r\n    border:solid 1px #99CE28\r\n}\r\n.progress-bar\r\n{\r\n    background:#99CE28;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzXHJcbntcclxuICAgIGJhY2tncm91bmQ6I0VFRjhEQTtcclxuICAgIGJvcmRlcjpzb2xpZCAxcHggIzk5Q0UyOFxyXG59XHJcbi5wcm9ncmVzcy1iYXJcclxue1xyXG4gICAgYmFja2dyb3VuZDojOTlDRTI4O1xyXG59Il19 */"

/***/ }),

/***/ "./app/progresso/progresso.component.html":
/*!************************************************!*\
  !*** ./app/progresso/progresso.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div class=\"progress-bar w-{{progresso}}\">{{progresso}}%</div>\n</div>"

/***/ }),

/***/ "./app/progresso/progresso.component.ts":
/*!**********************************************!*\
  !*** ./app/progresso/progresso.component.ts ***!
  \**********************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progresso = 0;
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progresso',
            template: __webpack_require__(/*! ./progresso.component.html */ "./app/progresso/progresso.component.html"),
            styles: [__webpack_require__(/*! ./progresso.component.css */ "./app/progresso/progresso.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./app/shared/coracao.model.ts":
/*!*************************************!*\
  !*** ./app/shared/coracao.model.ts ***!
  \*************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
var Coracao = /** @class */ (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCoracaoVazio) {
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = "/app1/assets/coracao_cheio.png"; }
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = "/app1/assets/coracao_vazio.png"; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());



/***/ }),

/***/ "./app/tentativas/tentativas.component.css":
/*!*************************************************!*\
  !*** ./app/tentativas/tentativas.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/tentativas/tentativas.component.html":
/*!**************************************************!*\
  !*** ./app/tentativas/tentativas.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img [src]=\"coracaoCheio\">\n<img [src]=\"coracaoCheio\" >\n<img [src]=\"coracaoCheio\" > -->\n\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" />"

/***/ }),

/***/ "./app/tentativas/tentativas.component.ts":
/*!************************************************!*\
  !*** ./app/tentativas/tentativas.component.ts ***!
  \************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/coracao.model */ "./app/shared/coracao.model.ts");



var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracaoVazio = "/assets/coracao_vazio.png";
        this.coracaoCheio = "/assets/coracao_cheio.png";
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true),
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true)
        ];
        // console.log(this.coracoes)
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.coracoes.length !== this.tentativas) {
            var indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
            if (indice <= 0) {
                indice = 0;
            }
        }
        // console.log(`tentativas: ${this.tentativas}`)
    };
    TentativasComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tentativas',
            template: __webpack_require__(/*! ./tentativas.component.html */ "./app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__(/*! ./tentativas.component.css */ "./app/tentativas/tentativas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./app/topo/topo.component.css":
/*!*************************************!*\
  !*** ./app/topo/topo.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar\r\n{\r\n    background:#1cb0f6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyXHJcbntcclxuICAgIGJhY2tncm91bmQ6IzFjYjBmNjtcclxufSJdfQ== */"

/***/ }),

/***/ "./app/topo/topo.component.html":
/*!**************************************!*\
  !*** ./app/topo/topo.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-faded\">\r\n    <h1 class=\"navbar-brand mb-0\">{{titulo}}</h1>\r\n</nav>"

/***/ }),

/***/ "./app/topo/topo.component.ts":
/*!************************************!*\
  !*** ./app/topo/topo.component.ts ***!
  \************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.titulo = 'Aprendendo Inglês';
    }
    TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topo',
            template: __webpack_require__(/*! ./topo.component.html */ "./app/topo/topo.component.html"),
            styles: [__webpack_require__(/*! ./topo.component.css */ "./app/topo/topo.component.css")]
        })
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projetos\angulasJS\Angular-4\projetos\app1\src\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map