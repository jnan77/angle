angular.module("textAngularSetup",[]).value("taOptions",{toolbar:[["h1","h2","h3","h4","h5","h6","p","pre","quote"],["bold","italics","underline","strikeThrough","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight","indent","outdent"],["html","insertImage","insertLink","insertVideo","wordcount","charcount"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",disabled:"disabled",textEditor:"form-control",htmlEditor:"form-control"},setup:{textEditorSetup:function(){},htmlEditorSetup:function(){}},defaultFileDropHandler:function(t,e){var n=new FileReader;return"image"===t.type.substring(0,5)?(n.onload=function(){""!==n.result&&e("insertImage",n.result,!0)},n.readAsDataURL(t),!0):!1}}).value("taSelectableElements",["a","img"]).value("taCustomRenderers",[{selector:"img",customAttribute:"ta-insert-video",renderLogic:function(t){var e=angular.element("<iframe></iframe>"),n=t.prop("attributes");angular.forEach(n,function(t){e.attr(t.name,t.value)}),e.attr("src",e.attr("ta-insert-video")),t.replaceWith(e)}}]).value("taTranslations",{html:{tooltip:"Toggle html / Rich Text"},heading:{tooltip:"Heading "},p:{tooltip:"Paragraph"},pre:{tooltip:"Preformatted text"},ul:{tooltip:"Unordered List"},ol:{tooltip:"Ordered List"},quote:{tooltip:"Quote/unquote selection or paragraph"},undo:{tooltip:"Undo"},redo:{tooltip:"Redo"},bold:{tooltip:"Bold"},italic:{tooltip:"Italic"},underline:{tooltip:"Underline"},strikeThrough:{tooltip:"Strikethrough"},justifyLeft:{tooltip:"Align text left"},justifyRight:{tooltip:"Align text right"},justifyCenter:{tooltip:"Center"},indent:{tooltip:"Increase indent"},outdent:{tooltip:"Decrease indent"},clear:{tooltip:"Clear formatting"},insertImage:{dialogPrompt:"Please enter an image URL to insert",tooltip:"Insert image",hotkey:"the - possibly language dependent hotkey ... for some future implementation"},insertVideo:{tooltip:"Insert video",dialogPrompt:"Please enter a youtube URL to embed"},insertLink:{tooltip:"Insert / edit link",dialogPrompt:"Please enter a URL to insert"},editLink:{reLinkButton:{tooltip:"Relink"},unLinkButton:{tooltip:"Unlink"},targetToggle:{buttontext:"Open in New Window"}},wordcount:{tooltip:"Display words Count"},charcount:{tooltip:"Display characters Count"}}).run(["taRegisterTool","$window","taTranslations","taSelection",function(t,e,n,o){t("html",{iconclass:"fa fa-code",tooltiptext:n.html.tooltip,action:function(){this.$editor().switchView()},activeState:function(){return this.$editor().showHtml}});var a=function(t){return function(){return this.$editor().queryFormatBlockState(t)}},i=function(){return this.$editor().wrapSelection("formatBlock","<"+this.name.toUpperCase()+">")};angular.forEach(["h1","h2","h3","h4","h5","h6"],function(e){t(e.toLowerCase(),{buttontext:e.toUpperCase(),tooltiptext:n.heading.tooltip+e.charAt(1),action:i,activeState:a(e.toLowerCase())})}),t("p",{buttontext:"P",tooltiptext:n.p.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<P>")},activeState:function(){return this.$editor().queryFormatBlockState("p")}}),t("pre",{buttontext:"pre",tooltiptext:n.pre.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<PRE>")},activeState:function(){return this.$editor().queryFormatBlockState("pre")}}),t("ul",{iconclass:"fa fa-list-ul",tooltiptext:n.ul.tooltip,action:function(){return this.$editor().wrapSelection("insertUnorderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertUnorderedList")}}),t("ol",{iconclass:"fa fa-list-ol",tooltiptext:n.ol.tooltip,action:function(){return this.$editor().wrapSelection("insertOrderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertOrderedList")}}),t("quote",{iconclass:"fa fa-quote-right",tooltiptext:n.quote.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),t("undo",{iconclass:"fa fa-undo",tooltiptext:n.undo.tooltip,action:function(){return this.$editor().wrapSelection("undo",null)}}),t("redo",{iconclass:"fa fa-repeat",tooltiptext:n.redo.tooltip,action:function(){return this.$editor().wrapSelection("redo",null)}}),t("bold",{iconclass:"fa fa-bold",tooltiptext:n.bold.tooltip,action:function(){return this.$editor().wrapSelection("bold",null)},activeState:function(){return this.$editor().queryCommandState("bold")},commandKeyCode:98}),t("justifyLeft",{iconclass:"fa fa-align-left",tooltiptext:n.justifyLeft.tooltip,action:function(){return this.$editor().wrapSelection("justifyLeft",null)},activeState:function(t){var e=!1;return t&&(e="left"===t.css("text-align")||"left"===t.attr("align")||"right"!==t.css("text-align")&&"center"!==t.css("text-align")&&"justify"!==t.css("text-align")&&!this.$editor().queryCommandState("justifyRight")&&!this.$editor().queryCommandState("justifyCenter")&&!this.$editor().queryCommandState("justifyFull")),e=e||this.$editor().queryCommandState("justifyLeft")}}),t("justifyRight",{iconclass:"fa fa-align-right",tooltiptext:n.justifyRight.tooltip,action:function(){return this.$editor().wrapSelection("justifyRight",null)},activeState:function(t){var e=!1;return t&&(e="right"===t.css("text-align")),e=e||this.$editor().queryCommandState("justifyRight")}}),t("justifyCenter",{iconclass:"fa fa-align-center",tooltiptext:n.justifyCenter.tooltip,action:function(){return this.$editor().wrapSelection("justifyCenter",null)},activeState:function(t){var e=!1;return t&&(e="center"===t.css("text-align")),e=e||this.$editor().queryCommandState("justifyCenter")}}),t("indent",{iconclass:"fa fa-indent",tooltiptext:n.indent.tooltip,action:function(){return this.$editor().wrapSelection("indent",null)},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),t("outdent",{iconclass:"fa fa-outdent",tooltiptext:n.outdent.tooltip,action:function(){return this.$editor().wrapSelection("outdent",null)},activeState:function(){return!1}}),t("italics",{iconclass:"fa fa-italic",tooltiptext:n.italic.tooltip,action:function(){return this.$editor().wrapSelection("italic",null)},activeState:function(){return this.$editor().queryCommandState("italic")},commandKeyCode:105}),t("underline",{iconclass:"fa fa-underline",tooltiptext:n.underline.tooltip,action:function(){return this.$editor().wrapSelection("underline",null)},activeState:function(){return this.$editor().queryCommandState("underline")},commandKeyCode:117}),t("strikeThrough",{iconclass:"fa fa-strikethrough",action:function(){return this.$editor().wrapSelection("strikeThrough",null)},activeState:function(){return document.queryCommandState("strikeThrough")}}),t("clear",{iconclass:"fa fa-ban",tooltiptext:n.clear.tooltip,action:function(t,e){var n;this.$editor().wrapSelection("removeFormat",null);var a=angular.element(o.getSelectionElement()),i=function(t){t=angular.element(t);var e=t;angular.forEach(t.children(),function(t){var n=angular.element("<p></p>");n.html(angular.element(t).html()),e.after(n),e=n}),t.remove()};if(angular.forEach(a.find("ul"),i),angular.forEach(a.find("ol"),i),"li"===a[0].tagName.toLowerCase()){var l=a[0].parentNode.childNodes,r=[],s=[],u=!1;for(n=0;n<l.length;n++)l[n]===a[0]?u=!0:u?s.push(l[n]):r.push(l[n]);var c=angular.element(a[0].parentNode),d=angular.element("<p></p>");if(d.html(angular.element(a[0]).html()),0===r.length||0===s.length)0===s.length?c.after(d):c[0].parentNode.insertBefore(d[0],c[0]),0===r.length&&0===s.length?c.remove():angular.element(a[0]).remove();else{var p=angular.element("<"+c[0].tagName+"></"+c[0].tagName+">"),f=angular.element("<"+c[0].tagName+"></"+c[0].tagName+">");for(n=0;n<r.length;n++)p.append(angular.element(r[n]));for(n=0;n<s.length;n++)f.append(angular.element(s[n]));c.after(f),c.after(d),c.after(p),c.remove()}o.setSelectionToElementEnd(d[0])}var m=this.$editor(),h=function(t){t=angular.element(t),t[0]!==m.displayElements.text[0]&&t.removeAttr("class"),angular.forEach(t.children(),h)};angular.forEach(a,h),"li"!==a[0].tagName.toLowerCase()&&"ol"!==a[0].tagName.toLowerCase()&&"ul"!==a[0].tagName.toLowerCase()&&this.$editor().wrapSelection("formatBlock","default"),e()}});var l=function(t,e,n){var o=function(){n.updateTaBindtaTextElement(),n.hidePopover()};t.preventDefault(),n.displayElements.popover.css("width","375px");var a=n.displayElements.popoverContainer;a.empty();var i=angular.element('<div class="btn-group" style="padding-right: 6px;">'),l=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');l.on("click",function(t){t.preventDefault(),e.css({width:"100%",height:""}),o()});var r=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');r.on("click",function(t){t.preventDefault(),e.css({width:"50%",height:""}),o()});var s=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');s.on("click",function(t){t.preventDefault(),e.css({width:"25%",height:""}),o()});var u=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');u.on("click",function(t){t.preventDefault(),e.css({width:"",height:""}),o()}),i.append(l),i.append(r),i.append(s),i.append(u),a.append(i),i=angular.element('<div class="btn-group" style="padding-right: 6px;">');var c=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');c.on("click",function(t){t.preventDefault(),e.css("float","left"),e.css("cssFloat","left"),e.css("styleFloat","left"),o()});var d=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');d.on("click",function(t){t.preventDefault(),e.css("float","right"),e.css("cssFloat","right"),e.css("styleFloat","right"),o()});var p=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');p.on("click",function(t){t.preventDefault(),e.css("float",""),e.css("cssFloat",""),e.css("styleFloat",""),o()}),i.append(c),i.append(p),i.append(d),a.append(i),i=angular.element('<div class="btn-group">');var f=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');f.on("click",function(t){t.preventDefault(),e.remove(),o()}),i.append(f),a.append(i),n.showPopover(e),n.showResizeOverlay(e)};t("insertImage",{iconclass:"fa fa-picture-o",tooltiptext:n.insertImage.tooltip,action:function(){var t;return t=e.prompt(n.insertImage.dialogPrompt,"http://"),t&&""!==t&&"http://"!==t?this.$editor().wrapSelection("insertImage",t,!0):void 0},onElementSelect:{element:"img",action:l}}),t("insertVideo",{iconclass:"fa fa-youtube-play",tooltiptext:n.insertVideo.tooltip,action:function(){var t;if(t=e.prompt(n.insertVideo.dialogPrompt,"https://"),t&&""!==t&&"https://"!==t){var o=t.match(/(\?|&)v=[^&]*/);if(o&&o.length>0){var a="https://www.youtube.com/embed/"+o[0].substring(3),i='<img class="ta-insert-video" src="https://img.youtube.com/vi/'+o[0].substring(3)+'/hqdefault.jpg" ta-insert-video="'+a+'" contenteditable="false" src="" allowfullscreen="true" frameborder="0" />';return this.$editor().wrapSelection("insertHTML",i,!0)}}},onElementSelect:{element:"img",onlyWithAttrs:["ta-insert-video"],action:l}}),t("insertLink",{tooltiptext:n.insertLink.tooltip,iconclass:"fa fa-link",action:function(){var t;return t=e.prompt(n.insertLink.dialogPrompt,"http://"),t&&""!==t&&"http://"!==t?this.$editor().wrapSelection("createLink",t,!0):void 0},activeState:function(t){return t?"A"===t[0].tagName:!1},onElementSelect:{element:"a",action:function(t,o,a){t.preventDefault(),a.displayElements.popover.css("width","436px");var i=a.displayElements.popoverContainer;i.empty(),i.css("line-height","28px");var l=angular.element('<a href="'+o.attr("href")+'" target="_blank">'+o.attr("href")+"</a>");l.css({display:"inline-block","max-width":"200px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","vertical-align":"middle"}),i.append(l);var r=angular.element('<div class="btn-group pull-right">'),s=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+n.editLink.reLinkButton.tooltip+'"><i class="fa fa-edit icon-edit"></i></button>');s.on("click",function(t){t.preventDefault();var i=e.prompt(n.insertLink.dialogPrompt,o.attr("href"));i&&""!==i&&"http://"!==i&&(o.attr("href",i),a.updateTaBindtaTextElement()),a.hidePopover()}),r.append(s);var u=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+n.editLink.unLinkButton.tooltip+'"><i class="fa fa-unlink icon-unlink"></i></button>');u.on("click",function(t){t.preventDefault(),o.replaceWith(o.contents()),a.updateTaBindtaTextElement(),a.hidePopover()}),r.append(u);var c=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">'+n.editLink.targetToggle.buttontext+"</button>");"_blank"===o.attr("target")&&c.addClass("active"),c.on("click",function(t){t.preventDefault(),o.attr("target","_blank"===o.attr("target")?"":"_blank"),c.toggleClass("active"),a.updateTaBindtaTextElement()}),r.append(c),i.append(r),a.showPopover(o)}}}),t("wordcount",{display:'<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',disabled:!0,wordcount:0,activeState:function(){var t=this.$editor().displayElements.text,e=t[0].innerHTML,n=e.replace(/(<[^>]*?>)/gi," "),o=n.match(/\S+/g),a=o&&o.length||0;return this.wordcount=a,this.$editor().wordcount=a,!1}}),t("charcount",{display:'<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',disabled:!0,charcount:0,activeState:function(){var t=this.$editor().displayElements.text,e=t[0].innerText||t[0].textContent,n=e.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g," ").replace(/\s+$/g," ").length;return this.charcount=n,this.$editor().charcount=n,!1}})}]);