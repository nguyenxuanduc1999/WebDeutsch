function removeItem(o){
   var item = $(o).closest('li'), id = item.data('id'), checkbox = $('.chk_compare[value='+ id +']'), count = item.length;
    console.log(p_array);
   if($('#exampleModal .pn-list-result > ul > li').length <= 2){
        $('#exampleModalNotify').modal('show');
   }else{
        checkbox.prop('checked', false);
        item.remove();
   }
}
var Website = {
	run: function(){

		String.prototype.toSubString = function(t) {
			var i = this;
			if ("" == i || i.Length <= t) return i;
			var e = $.trim(i).lastIndexOf(" ");
			return (i = i.substring(0, Math.min(i.length, t))).length > e && (i = i.substring(0, e)), i
		};
		$.fn.trimLine = function(t, i) {
			return this.each(function() {
				var e = $(this).text().length,
				n = parseFloat($(this).css("line-height")) * t;
				isNaN(n) && (n = parseFloat($(this).css("font-size").replace("px", "")) * t);
				for (var a = $(this).height() > n && e > 0; $(this).height() > n && e > 0;) {
					e--;
					var s = $(this).html().toSubString(e);
					$(this).html(s)
				}
				a && $(this).html($(this).html().substring(0, $(this).html().lastIndexOf(" ")) + " ..."), !0 === i && $(this).css({
					"min-height": n + "px"
				})
			})
		};
		$('.pn-two-line').trimLine(2); $('.pn-three-line').trimLine(3); $('.pn-six-line').trimLine(6);
//
$('.js-add-disabled').click(function(e) {
    e.preventDefault();
var status = 1, btn = $(this);
btn.attr('disabled','disabled');
var pa_form = $(this).closest('form');
pa_form.find('input').each(function(){
if($(this).attr('required') != 'undefined' && $(this).val() == ''){
status = 0;
}
});
if (status  == 0) {  btn.removeAttr('disabled'); }
else pa_form.submit();
});
//
		$('html,body').click(function(){
			$('.pn-wrapper-menu').removeClass('active');
			$('body').removeClass('visible_menu')
		});
		$('.pn-icon-menu').click(function(event){event.stopPropagation();$('.pn-wrapper-menu').toggleClass('active');$('body').addClass('visible_menu')});
		$('.pn-wrapper-menu').click(function(event){event.stopPropagation();});

		$('#close-menu').click(function(){
			$('.pn-wrapper-menu').removeClass('active');
			$('body').removeClass('visible_menu');
		});

		if($(window).width() < 992){
			$('.pn-menu li.haschild > span').on("click", function(){
				//$(this).closest('.pn-menu').children('li.showchild').removeClass('showchild');
		        $(this).parent().toggleClass('showchild');
			});
			$('.pn-menu li.haschilds > span').on("click", function(){
				//$(this).closest('ul').find('li.showchild').removeClass('showchild');
		        $(this).parent().toggleClass('showchild');
			});
			$('#js-popup').on('click', function(e){
				e.stopPropagation()
				$('.pn-wrapper-popup').addClass('active');
			});
			$('html,body').on('click', function(){
				$('.pn-wrapper-popup').removeClass('active');
			});
			$('.pn-wrapper-popup .pn-content').on('click', function(e){
				e.stopPropagation()
			});
			$('#pn-close').on('click', function(){
				$('.pn-wrapper-popup').removeClass('active');
			});
		}
$('#request-call-back').click(function (e) {
        var parent = $(this).parent(), c_phone = parent.find('input[name="phone"]').val(), c_timer = parent.find('select[name="timer"] option:selected').val(), html_rp = parent.find('.form-report');
		if (c_phone.length == 0) {
			html_rp.text('Vui lòng nhập số điện thoại');
			if (!html_rp.hasClass('error_report')) html_rp.addClass('error_report');
		} else if (c_phone.length < 10 || c_phone.length > 15) {
			html_rp.text('Số điện thoại phải từ 10 đến 15 ký tự');
			if (!html_rp.hasClass('error_report')) html_rp.addClass('error_report');
		} else {
			$(this).attr('disabled', "");
            var vdata = { "c_phone": c_phone, "c_timer": c_timer };
			$.ajax({
				type: "POST", url: window.location.href, data: vdata, dataType: "html",
				success: function (result) {
					$('.pn-content-change').html('<div class="text-center"><img style="max-width: 100%" src="/styles/website/images/thank-pne.png" alt="" /></div><div style="font-size: 16px;line-height: 26px;margin-top: 30px">Cảm ơn bạn đã để lại số điện thoại,<br />Phuong Nam Education sẽ liên hệ với bạn sớm nhất.</div>');
					// var getData = $.parseJSON(result);
					// if(getData.status === 0){
					//     html_rp.text(getData.report);
					//     if(!html_rp.hasClass('error_report')) html_rp.addClass('error_report');
					// }
				}, error: function () {
					$(this).removeAttr('disabled');
					html_rp.text('Xảy ra lỗi, vui lòng thử lại sau');
					if (!html_rp.hasClass('error_report')) html_rp.addClass('error_report');
				}
			});
		}
		e.preventDefault();
	});
		if($('.pn-banner').length > 0){ $('.pn-banner .owl-carousel').owlCarousel({ items:1, loop: false, nav: true, autoplayHoverPause: true, dots: false, autoplay: true, navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'] }); }


if($('.pn-wrapper-toc').find('h2').length > 0){
			$("#js-toc").toc({ content: ".pn-wrapper-toc", headings: "h2,h3,h4" });
			$('.table-of-contents').show()
		} 
		$(document).on('click', '.js-table-of-contents', function () {
			$(this).toggleClass("open");
			$('.table-of-contents-item').slideToggle();
		});
/*
		if($('.pn-detail').length > 0){
			var data = [], group = null
			$('.pn-detail .pn-wrapper').find('h2,h3').each(function (i) {
				var head = $(this), level = head.prop('tagName').substring(1)
				if (i == 0 && level != 2) {
					console.log('h2 is missing.')
					return;
				}
				if (level == 2) {
					if (group) {
						data.push(group)
					}
					group = {
						name: head.text(),
						head: head,
						items: [],
					}
				} else {
					group.items.push({
						name: head.text(),
						head: head,
					})
				}
			})
			group && data.push(group)
			if (data.length > 0) {
				var wrapperAnchor = $('<div class="wrapper-anchor"><span class="anchor-title">Mục lục</span></div>'), list = $('<ul></ul>')
				wrapperAnchor.append(list)
				$('.pn-detail .pn-wrapper').prepend(wrapperAnchor)
				var i = 1;
				for (var item of data) {
					var list2 = $('<ul></ul>')
					for (var y in item.items) {
						var child = item.items[y], index2 = parseInt(y) + 1, li2 = $('<li></li>')
						li2.text(i+'.'+index2 + '. ' + child.name).prop('head', child.head)
						list2.append(li2)
					}
					var li = $('<li></li>')
					li.text(i + '. ' + item.name).prop('head', item.head).append(list2)
					list.append(li)
					i=i+1;
				}
			}
			$('.wrapper-anchor').click('li', function (e) {
				$("body,html").animate({ scrollTop: $(e.target).prop('head').offset().top - 60 }, "500");
			});
		}
		*/
		//
		var p_array = new Array();

		function getCompare(){
		    $('.chk_compare').on('click', function(){
		        var count = p_array.length;
		        var id = $(this).val();
		        if($(this).prop('checked')){
		            if(count >= 5){
                        $(this).prop('checked', false);
						$('#exampleModalNotify .modal-body p').text($("input[name='max_rp']").attr('value'));
						$('#exampleModalNotify').modal('show');
                    }else{
                        var arrs = new Array();
                        var parent = $('#page-result>li[data-id="'+id+'"]'),
    		                name = parent.find('.pn-name').text(),
    		                university = parent.find('.pn-university').html(),
    		                campus = parent.find('.pn-country').html();
    		            arrs.push(id, name, university, campus);
    		            p_array.push(arrs);
                    }
		        }else{
		            for(var i = 0; i < p_array.length; i++){
    		            var ars = p_array[i];
    		            if(ars != null && ars[0] == id){
    		                 p_array.splice(i, 1);
    		            }
    		        }
		        }
		        var af_count = p_array.length;
		        if (af_count > 1) {
                    $('#button-compare').addClass('active');
                } else {
                    $('#button-compare').removeClass('active');
                }
          	});
		}
		getCompare();
		function createHtml(p_array){
		    var html = '';
	        for(var i = 0; i < p_array.length; i++){
	            var ars = p_array[i];
	            if(ars != null){
	                html += '<li data-id="'+ars[0]+'"><div class="row"><div class="col-sm-8"><a href="javascript:;" class="pn-name">'+ars[1]+'</a><ul><li class="pn-university">'+ars[2]+'</li><li class="pn-country">'+ars[3]+'</li></ul></div><div class="col-sm-4"><span class="pn-remove" data-id="'+ars[0]+'">Remove</span></div></div></li>';
	            }
	        }
	        $('#getlist-cpr').html(html);
		}
		$('#button-compare').click(function(){
		    if(p_array != null){
		        createHtml(p_array);
		        $('.pn-remove').unbind('click').click(function(){
                    var id = $(this).data('id'), checkbox = $('.chk_compare[value='+ id +']'), count = p_array.length, item = $('#getlist-cpr>li[data-id="'+id+'"]');
                   if($('#exampleModal .pn-list-result > ul > li').length <= 2){
						$('#exampleModalNotify .modal-body p').text($("input[name='min_rp']").attr('value'));
                        $('#exampleModalNotify').modal('show');
                   }else{
                        checkbox.prop('checked', false);
                        item.remove();
                        for(var i = 0; i < p_array.length; i++){
                            var ars = p_array[i];
                            if(ars != null && ars[0] == id){
                                 p_array.splice(i, 1);
                            }
                        }
                        //createHtml(p_array);
                   }
                });
		    }
		});
		
        
		function gotoPage(){
			$('.page_button').unbind('click').click(function(e){
				if(!$(this).hasClass('pn-disable')){
					var type = $(this).attr('data-type'), cur_page = parseInt($('input[name="curpage"]').val()), total_page = parseInt($('input[name="totalpage"]').val()), nextpage = 1;
					$('.page_button').removeClass('pn-disable');
					if(type == 'first') nextpage = 1;
					else if(type == 'last') nextpage = total_page;
					else if(type == 'prev'){
						nextpage = (cur_page - 1) <= 0 ? 1 : cur_page - 1;
					}else if(type == 'next'){
						nextpage = (cur_page + 1) >= total_page ? total_page : cur_page + 1;
					}
					$('input[name="curpage"]').val(nextpage);getPage(nextpage);
					if(nextpage == 1){
						$('.page_button[data-type="first"],.page_button[data-type="prev"]').addClass('pn-disable');
					}else if(nextpage == total_page) $('.page_button[data-type="next"],.page_button[data-type="last"]').addClass('pn-disable');
				}
			});
		}gotoPage();
		function getPage(page = 1){
			var vdata = { "page" : page };
			$.ajax({
			  type: "POST",url: window.location.href, data: vdata,
			  success: function(result){
					var getData = $.parseJSON(result);
					if(getData.rp_result != ''){
						var total_page = parseInt($('input[name="totalpage"]').val());
						$('.gpage-info').text('Page '+page+' of '+total_page);
					}
					$('#page-result').html(getData.rp_result);
					$("body,html").animate({ scrollTop: $('.pn-form-course').offset().top }, "slow");
					
					//
					getCompare();
			  }
			});
		}
		$('.chkSchool').on('change', function(e){
			$('.chkProgr').removeAttr('checked'); getAction();
		});
		$('.chkProgr').on('change', function(e){ getAction(); });

		if($("#rangeSlider").length > 0){
			$("#rangeSlider").ionRangeSlider({ skin:"big",grid:!0,min:$(this).data("min"),max:$(this).data("max"),from:$(this).data("min"),step:0,prettify_enabled:!0,prettify_separator:" ",type:"double",grid:!0, onStart: saveResult, onFinish: getResult });
			function saveResult(data){
				$('input[name="fromRange"]').val(data.from);$('input[name="toRange"]').val(data.to);
			}
			function getResult(data){
				$('input[name="fromRange"]').val(data.from);$('input[name="toRange"]').val(data.to);
				getAction();
			}
		}

		function getAction(){
			var _array = new Array(), _arrpro = new Array();
			$('.chkSchool').each(function(){
				if($(this).prop('checked')){ _array.push($(this).val()); }
			});
			var _fee = new Array(parseFloat($('input[name="fromRange"]').val()), parseFloat($('input[name="toRange"]').val()));
			$('.chkProgr').each(function(){
				if($(this).prop('checked')){ _arrpro.push($(this).val()); }
			});
			postOther(_array, _arrpro, _fee);
		}

		function postOther(_shools = array(), _programs = array(), _tution = array()){
			var vdata = { "chkSchool" : _shools, "chkProgr" : _programs, "rgTution" : _tution };
			$.ajax({
			  type: "POST",url: window.location.href, data: vdata,
			  success: function(result){
					var getData = $.parseJSON(result);
					$('#page-result').html(getData.rp_result);
					if(getData.rp_level_list != null){
						var plis = getData.rp_level_list;
						for(var i=0; i< plis.length; i++){
							$('.level_filter_list li').eq(i).children('span').text(plis[i])
						}
					}
					if(getData.rp_result != ''){
						var total_page = getData.rp_total_page;
						$('.gpage-info').text('Page 1 of '+total_page);
$('#gresult-total').text(getData.rp_total);
						$('input[name="totalpage"]').val(total_page);
						$('input[name="curpage"]').val(1);
						gotoPage();
					}
					$("body,html").animate({ scrollTop: $('.pn-form-course').offset().top }, "slow");
					getCompare();
			  }
			});
		}
		//
		$('#compare-now').unbind('click').click(function(e){
			var _arr = new Array();
			$('#getlist-cpr>li').each(function(){
				var course_id = parseInt($(this).attr('data-id'));
				_arr.push(course_id);
			});
			if(_arr != null){
				var vdata = { "course_ids" : _arr };
				$.ajax({
				  type: "POST",url: window.location.href, data: vdata,
				  success: function(result){
						var getData = $.parseJSON(result);
						$('#table-compare tbody').html(getData.rp_result);
				  }
				});
			}
		});
		//
	}
};
$(document).ready(function(){
	Website.run();
});

$(window).load(function () {
	var hash = window.location.hash;
        if(hash != ''){
            hash = decodeURI(hash);
            var _id = hash.slice(1);
            if($(':is(h2,h3,h4)[id="'+_id+'"]').length > 0){
                var tops = $('h2[id="'+_id+'"],h3[id="'+_id+'"],h4[id="'+_id+'"]').offset().top;
               $('body,html').animate({ scrollTop: tops - $('header').height() }, 'fast');
            }
        }
	var hei = $('header').height();
	$(window).scroll(function(){
		if ($(window).scrollTop() >= hei && $(window).width() > 991) {
			$('header').addClass('fixed');
			$('body').css({'padding-top': hei });
		}else{
			$('header').removeClass('fixed');
			$('body').css({'padding-top': 0});
		}
	});
})
