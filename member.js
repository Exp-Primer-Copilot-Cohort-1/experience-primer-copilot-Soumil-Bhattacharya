function skillMember() {
    // 1. 获取数据
    var data = {
        "action": "member",
        "skill": "skill"
    };
    // 2. 发送请求
    $.ajax({
        url: "/skill",
        type: "post",
        data: data,
        dataType: "json",
        success: function (result) {
            // 3. 处理数据
            var member = result.data;
            // 4. 渲染页面
            var html = template("member", member);
            $("#member").html(html);
        }
    });
}