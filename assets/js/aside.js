$(function(){
    // console.log('ok')

    //获取location.href
    var href=location.href
    //?就是是否有参数的标识
    var index=href.indexOf('?')
    //定义一个变量来存储路由名称
    var routername=''
    //判断是否有参数
    if(index==-1){
        routername=href.substring(href.lastIndexOf('/')+1)
    }else{
        routername=href.substring(href.lastIndexOf('/')+1,href.indexOf('?'))
    }

    //获取你想操作的dom元素
    var menu_posts=$('#menu-posts')
    //判断路由名称
    if(routername=='post-add'|| router=='posts'||router=='categories'){
       menu_posts.addClass('in')
       menu_posts.attr('aria-expanded',true)
    }
    
    //设置菜单
    var menu_setting=$('#menu-settings')
    //判断路由名称
    if(routername=='nav-menus'|| router=='slides'||router=='settings'){
        menu_setting.addClass('in')
        menu_setting.attr('aria-expanded',true)
     }




    //添加active样式
    $('li').removeClass('active')
    $('#'+routername).addClass('active')
})
