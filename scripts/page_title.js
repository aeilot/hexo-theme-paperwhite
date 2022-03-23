hexo.extend.helper.register("page_title", function () {
    var title = this.page.title ? this.page.title : this.config.title;
    return title;
});