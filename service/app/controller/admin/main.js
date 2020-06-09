'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller{
    async index (){
        this.ctx.body = 'hi api';
    }

    // 后台登录接口
    async checkLogin (){
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password

        const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password = '" + password + "'"
        const res = await this.app.mysql.query(sql)

        if( res.length > 0){
            let openId = Date.now()
            this.ctx.session.openId = {"openId": openId}
            this.ctx.body = {"data": "登录成功", "openId": openId}
        }else{
            this.ctx.body = {"data": "登录失败"}
        }
    }

    // 后台文章分类信息
    async getTypeInfo (){
        const resType = await this.app.mysql.select('type')
        this.ctx.body = {data: resType}
    }

    // 添加文章
    async addArticle(){
        let tempAricle = this.ctx.request.body;
        const result = await this.app.mysql.insert('article', tempAricle)
        const insertSucces = result.affectedRows === 1
        const insertId = result.insertId;

        this.ctx.body = {
            isSuccess: insertSucces,
            insertId: insertId
        }
    }

    // 修改文章
    async updateArticle (){
        let tempAricle = this.ctx.request.body;

        const result = await this.app.mysql.update('article', tempAricle)
        const insertSucces = result.affectedRows === 1

        this.ctx.body = {
            isSuccess: insertSucces,
        }
    }

}

module.exports = MainController