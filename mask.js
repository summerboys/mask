$(function() {
        $(".list").on("mouseenter mouseleave", function(e) {
            var that = $(this);
            var w = $(this).width(); // 模型宽度
            var h = $(this).height(); // 模型高度
            var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
            // 获取x值
            var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
            // 获取y值
            var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
            // 将点的坐标对应的弧度值换算成角度度数值
            //不同的进入角度，就是不同的鼠标进入图片的方向
            //var dirName = new Array('上方', '右侧', '下方', '左侧');
            if (e.type == 'mouseenter') {
                switch (direction) {
                    case 0:
                        that.children('div')
                            .css({
                                left: 0,
                                top: -h + 'px'
                            })
                            .stop(true)
                            .animate({
                                left: 0,
                                top: 0
                            }, 300);
                        break;
                    case 1:
                        that.children('div')
                            .css({
                                left: w + 'px',
                                top: 0
                            })
                            .stop(true).animate({
                                left: 0,
                                top: 0
                            }, 300);
                        break;
                    case 2:
                        that.children('div')
                            .css({
                                left: 0,
                                top: h + 'px'
                            })
                            .stop(true).animate({
                                left: 0,
                                top: 0
                            }, 300);
                        break;
                    case 3:
                        that.children('div')
                            .css({
                                left: -w + 'px',
                                top: 0
                            })
                            .stop(true).animate({
                                left: 0,
                                top: 0
                            }, 300);
                        break;
                }
            } else {
                switch (direction) {
                    case 0:
                        that.children('div')
                            .animate({
                                left: 0,
                                top: -h + 'px'
                            }, 300);
                        break;
                    case 1:
                        that.children('div')
                            .animate({
                                left: w + 'px',
                                top: 0
                            }, 300);
                        break;
                    case 2:
                        that.children('div')
                            .animate({
                                left: 0,
                                top: h + 'px'
                            }, 300);
                        break;
                    case 3:
                        that.children('div')
                            .animate({
                                left: -w + 'px',
                                top: 0
                            }, 300);
                        break;
                }
            }
        });
    })