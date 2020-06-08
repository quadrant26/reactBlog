'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller{
    async index (){
        this.ctx.body = 'hi api';
    }
}

module.exports = MainController