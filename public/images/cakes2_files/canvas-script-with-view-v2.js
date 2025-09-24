

if (typeof __st !== "undefined") {
  if (__st.p == 'product' ) {
    var pd_id = __st.rid;
    if(pd_id !== pplr_product.id ){

    }
  } else {
    var pd_id = pplr_product.id;
  }
}
else {
var pd_id = pplr_product.id;
}

var pplr_myshopify_url = Shopify.shop;

var pplrReadyCustom = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};


var loadScript_pplr = function(url, callback) {
var script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
if (script.readyState) {
script.onreadystatechange = function() {
  if (script.readyState == "loaded" ||
      script.readyState == "complete") {
    script.onreadystatechange = null;
    callback();
  }
};
} else {
script.onload = function() {
  callback();
};
}
script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
};

function dominicolors(){
    var link = "<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.2.6/jquery.minicolors.min.css'>";
    jQuery("head").append(link);
    loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/jquery.minicolors.min.js', function() {
    pplrReadyCustom(function() {
        $PP_EL('.jscolor').each( function() {
        jQuery(this).minicolors({
            change: function(value, opacity) {
            jQuery(this).val(value).trigger('change');
                var name = jQuery(this).attr("name");
                var frame = jQuery(this).data("frame");
                $PP_EL('.jscolor[name="' + name + '"]').each(function() {
                var t = jQuery(this);
                if (t.attr('data-frame') !== frame) {
                        t.val(value);
                        t.siblings().find('.minicolors-swatch-color').css('background-color',value);
                }
                });
            }
        });
        })
    });
    });
}
var uaPPLR = navigator.userAgent || navigator.vendor || window.opera;
if(uaPPLR.indexOf("Instagram") > -1){
window.addEventListener( "pageshow", function ( event ) {
var historyTraversal = event.persisted || ( typeof window.performance != "undefined" &&  window.performance.navigation.type === 2 );
if ( historyTraversal ) {
  window.location.reload();
}
});
}

function decode_utf8(s) {
    return decodeURIComponent(encodeURIComponent(s));
}

function pisFacebookOrInstagram() {
  var uaPPLR = navigator.userAgent || navigator.vendor || window.opera;
  return /(FBAN|FBAV|Instagram|musical_ly)/.test(uaPPLR) || 'WebkitAppearance' in document.documentElement.style;
}

function pisSafari() {
    return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
}
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
function ISiPAD(){ return /iPad/.test(navigator.userAgent) && !window.MSStream || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));}
var p_isMobile = false; 
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
p_isMobile = true;
}
function isIE() {
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE");
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
{
return true;
}
else{return false;}
}

function is_int(value) {
return !isNaN(value) &&
parseInt(Number(value)) == value &&
!isNaN(parseInt(value, 10));
}

function extractContent(s) {
var txt = document.createElement("textarea");
txt.innerHTML = s;
var span = document.createElement('span');
span.innerHTML = txt.value;
return (span.textContent).replace(/"/g,'&quot;') || (span.innerText).replace(/"/g,'&quot;');
};


function decodeHtml(html, s) {
var txt = document.createElement("textarea");
var c = 0;
if(s){
  var decodedText = html;
  while (decodedText !== txt.value && c<10) {
      txt.innerHTML = decodedText;
      decodedText = txt.value;
      c = c+1;
  }
  return decodedText;
}
txt.innerHTML = html;
return txt.value;
}

function pplrischecked(tis){
if(tis.is(':checkbox')){
if(tis.is(':checked')){
  return true;
}
else{
  return false;
}
}
else{
return true;
}

}


function isRTL(s){           
var ltrChars    = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
  rtlChars    = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
  rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

return rtlDirCheck.test(s);
};


function pplrreverse(s){
return s.split("").reverse().join("");
}

function selectthistag(t,e){
  var a= jQuery(t).parent(),
    b= jQuery(t).data('val'),
    k = decodeHtml(b).replace(/["']/g, "").replace(/ /g, '_').replace(/\./g, ''),
    c=a.siblings('[data-tag="'+k+'"]'),
    d=a.siblings('[data-tag="'+k+'"]:not(.vrdisabled)')
  jQuery(t).addClass('active').siblings().removeClass('active');
  a.siblings(':not(.pplrgcolor)').hide();
  c.show();
  a.siblings('.pplr_deselect').show();
  if(e){
   pplrcomplete();
   const frame = jQuery(t).closest(".pplr-wrapper").attr('data-main');
    const _m = _PP[_CM+frame]?.split(",");
    if(_m[72] != 1){
        d.first().trigger('click'); 
    }
    // d.first().trigger('click'); 
  }
  
}

function pplrgetC(cn) {
  cn = cn + pd_id;
  var nameEQ = cn + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      try {
        return decodeURIComponent(c.substring(nameEQ.length));
      } catch (e) {
        return c.substring(nameEQ.length); // fallback if decode fails
      }
    }
  }
  return false;
}


function setC(cn, cv) {
  cn = cn + pd_id;
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cn + "=" + encodeURIComponent(cv) + ";" + expires + ";path=/";
}


var pplr_no_day = '?v=123'+date_pplr.getDate()+pplr_file_var;

var _PP = product_personalizer;
var _CM = 'cstmfy_meta_';
var _SJ = settings_json;
if (typeof pplr_c_title == 'undefined') {
var pplr_c_title = '_'+_SJ[8];
}
var app_link_pplr = 'https://cdn-zeptoapps.com/product-personalizer/'; 
var _p_R = ".pplr-wrapper input[required]:not([disabled]),.pplr-wrapper textarea[required]:not([disabled]),.pplr-wrapper select[required]:not([disabled])";
var hasfont = false;
var loadfont = "<div class='pplrloadfont' style=\"font-family:\'pFontAwesome\';\">a</div>";
var font_face_array = [];
var font_face_export = [];
var pplr_img_name_array = [];
var t_p_f = [];
var fontface = "@font-face {font-family: '" + "pFontAwesome" + "';src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf') format('truetype');} ";
var fontface3='';
var resizepplr ='';
var pplr_formdata;
var pplrframe = 1;
var pplrtracolready = false;
var font_loaded = false;
var pplrloading = false;
var checktimout;
var pplrimgloading = true;
var p_d_o = false;
var cimage = false;
var pplrloadfinish= 1;
var create_pplr = false;
var create_svg = false;
var price_pplr = false;
var gcolor = false;
var pplr_html ;
var pricechange = false;
var pplrcurrentimage='';
var spn = 10;
var pplrlarge_all='';
var pplrlarge = '';
var tabstart =0;
var pplrabsloaded = true;
var tabend = false;
var pplr_final;
var change_frame = false;
var c_f_t = true;
var pplr_final_check=false;
var popup_wrapper_left = 0; 
var fontload = [];
var image_load = [];
var pplr_design_p = {};
var pplr_buy_now = false;
var _CP = _PP['cstmfy_prodata'].split(',');
var _P_P = ".product-personalizer";
var cstmfywidth = _CP[3];
var pplr_tolal_image = [];
var fNamearray = [];
var pplr_view_array = [];
var pplr_preview_save = false;
var  pplr_preview_no_code = "<input type='hidden' class='pplr_check_order' name='properties[_pplr_customization_id]' value='' />";
var pplr_event_attached = false;
var pplr_values = {}
var pplr_values_origin = {};
var pplr_last_idx = 93;
var pplr_has_tab = false;
var pplr_el = null;
var main_pplr_el = null;
var pplr_has_duplicate = {field: false, img: false, pplrjscolor: false, jscolor: false, font: false}
var pplr_dup_labels = {field: {}, img: {}, pplrjscolor: {}, jscolor: {}, font: {}}
var pplr_has_checkbox = false;
var is_pplr_canvas_img_append = false;
var pplr_first_load = true;
var pplr_image_loader_array = [];
var pplr_image_upload = false;
var optionwithclass_v = false;
var pplr_variant_now;
var pplr_check_fl;
var document_f_loaded = false;
window.rounding_enabled = false;
window.rounding_price = 0.95;
var pplr_files_values = {};

var $PP_EL = function(q) {
  return jQuery(q);
  // return pplr_el.find(q);
}

var imageCache = new Map();

function p_loadImage(url) {
    if (imageCache.has(url)) {
        return Promise.resolve(imageCache.get(url));
    }
    const img = new Image();
    img.crossOrigin = 'anonymous'; 
    const promise = new Promise((resolve, reject) => {
        img.onload = () => {
            imageCache.set(url, img);
            resolve(img);
        };
        img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
    });
    img.src = url;
    return promise;
}


function isLandscape() {
return (window.orientation === 90 || window.orientation === -90);
}

var   pplr_vScale = screen.width / window.innerWidth;

if(isLandscape()){
pplr_vScale = screen.height / window.innerWidth;
}

if(product_personalizer.cstmfy_view){
var pplr_view_set = JSON.parse(product_personalizer.cstmfy_view);


}
else{

var pplr_view_set = {};

var pplr_view_id = '';

var cstmfy_count = _CP[1];
for (var x_n = 1; x_n <= cstmfy_count; x_n++) {

if(_PP[_CM + x_n].split(',')[18] !== pplr_view_id){

  if(x_n==1){
    var pplr_view_name = 'Main View';
  }
  else{
    var pplr_view_name = 'View '+x_n+1;
  }

  if(_CP[7]>1){
     var cstmfy_save_prev = 1;
    }
    else{
    var cstmfy_save_prev = 0;
    }

    if(_CP[7]>3){
      var cstmfy_save_back = 1;
    }
    else{
      var cstmfy_save_back = 0;
    }
    if(_CP[11]==2){
      var cstmfy_save_size=2;
    }
    else{
      var cstmfy_save_size=1;
    }

    var cstmfy_save_type = _SJ[34];

    var cstmfy_image_position = '';
    var cstmfy_prev_tab=0;
    var cstmfy_prev_cart=_SJ[34];

    pplr_view_id = _PP[_CM + x_n].split(',')[18];

    var cstmfy_view_is_image = 1;
    var cstmfy_view_image = pplr_view_id;
    var cstmfy_can_width = 1000 ;
    var cstmfy_can_height = 1000;
    var all_variant_image= 0;
    if (_CP[0] > 0 ) {
        all_variant_image= 1;
    }
    var cstmfy_view_preview_type = 1;
    var cstmfy_preview_arrows = 0;
    var cstmfy_view_thumb_icon = '';
    var cstmfy_view_field_type = 1;


    pplr_view_set[pplr_view_id] = [cstmfy_view_is_image,cstmfy_view_image,cstmfy_can_width,cstmfy_can_height,pplr_view_name,cstmfy_save_prev,cstmfy_save_back,cstmfy_save_size,cstmfy_save_type,cstmfy_image_position,cstmfy_prev_tab,cstmfy_prev_cart,all_variant_image,cstmfy_view_preview_type,cstmfy_preview_arrows,cstmfy_view_thumb_icon,cstmfy_view_field_type]

}

}
}
var commonsvg = false;

for (var y_n = 0; y_n < Object.keys(pplr_view_set).length; ++y_n) {
  var vnt  = Object.keys(pplr_view_set)[y_n];
  if(pplr_view_set[vnt][8] == 5){
    pplr_view_set[vnt][8] = _SJ[34];
  }

  if(pplr_view_set[vnt][5]>0 && _CP[8] != 3){
      pplr_preview_save = true;
  }

  if(pplr_view_set[vnt][8]>1){
    commonsvg = true;
  }

}


if (parseInt(cstmfywidth) > 1024) {
var pplrreplace = "_2048x2048.";
} else {
var pplrreplace = "_1024x1024.";
}
if (typeof pplr_enabled_currencies_size == 'undefined') {
var pplr_enabled_currencies_size = 1;
}
function pplrCustomeEvent(eventName){
if(!isIE()){
var pplrcustomfunction = new CustomEvent(eventName, {bubbles: !1
});
window.dispatchEvent(pplrcustomfunction);
}
}

var p_ecz = pplr_enabled_currencies_size;
var hden = 0;
var rounding = 0;
var recurstop = true; 
var img_loader = app_link_pplr+'l_loading.gif';
var createproduct = _CP[7];

if(window.pplr_create_disabled){
  createproduct = 3;
}

if (typeof pplr_publication_access === 'undefined' || !pplr_publication_access) {
    createproduct = 3;
}

var pplrheight = window.innerHeight;
var pplr_delay = 0;
var canratio = 1;
var pplr_tab ='';
var RP = '.pplr-wrapper';

var pplr_image = _PP['cstmfy_meta_1'].split(',')[18];



// newly added
var pplr_views = [];
var pplr_is_views = false;
var pplr_total_views = 0;

var pplr_current_view = false;

if(_PP['cstmfy_view']){
    try {
        pplr_is_views = true;
        pplr_views = JSON.parse(_PP['cstmfy_view']);
    } catch (error) {
        console.log("NO VIEWS AVAILABLE");
    }
}
if(pplr_is_views){
    pplr_total_views = Object.keys(pplr_views).length;
    var first_view_id = Object.keys(pplr_views)[0];
    pplr_image = pplr_views[first_view_id][1];
}
// newly added


var pplr_old_image = pplr_image;
if(_SJ[27]==1){_SJ[27]='ADD TO CART';}
var atcb = _SJ[27];
var pplr_product_json=[];

var IsAndroidp = /(android)/i.test(navigator.userAgent);

var blendc=['source-over','lighter','multiply','screen','overlay','darken','lighten'];
_SJ[9] = _SJ[9].replace("#","").replace(".","");
var add_to_cart = '.so-btn-add-to-cart,[data-pf-type="ProductATC"]:visible,input[name=\"add\"],button[name=\"add\"],#buy_it_now,#addToCart,#add-to-cart,.product-form--atc-button,.ProductForm__AddToCart,.add-to-cart,.AddToCart-product-template,#add-to-cart,.product-submit,.' + _SJ[9]+',#' + _SJ[9];
var kkr = /(_compact\.)|(_medium\.)|(_large\.)|(_grande\.)|(_160x160\.)|(_480x480\.) |(_900x900\.)|(_400x400\.)|(_1024x1024\.)|(_2048x2048\.)|(_580x@2x\.)|(_2048x@2x\.)|(_580x\.)|(_600x\.)|(_530x\.)|(_1200x\.)|(_800x\.)|(_850x\.)|(_900x\.)|(_100x\.)|(_300x\.)|(_1024x\.)|(_2000x\.)|(_2048x\.)|(_custompplr\.)/;
var queryreplacestring = kkr.toString().replace("custompplr", _SJ[12]);
queryreplacestring = new RegExp(queryreplacestring);
var queryreplacestring2 = /.+_((?:medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})(@{1}?\d{1}?x{1}?)*[_\.]/;
var p_r ;
var diffcur = false;
if (typeof pplr_shop_currency !== 'undefined') {
if(pplr_shop_currency !== Shopify.currency.active){
diffcur = true;
}
}

if(_SJ2[20]>0){
var bcolor = ' style="background-color:'+_SJ2[21]+'" ';
}
else{
var bcolor = '';
}
var PIXEL_RATIO_PPLR = function() {
var el = document.createElement('canvas');
var ctx = el.getContext('2d');
var dpr = window.devicePixelRatio || 1,
  bsr = ctx.webkitBackingStorePixelRatio ||
  ctx.mozBackingStorePixelRatio ||
  ctx.msBackingStorePixelRatio ||
  ctx.oBackingStorePixelRatio ||
  ctx.backingStorePixelRatio || 1;
return dpr / bsr;
};
var p_r = PIXEL_RATIO_PPLR;
if(!window.pplr_font_factor){
window.pplr_font_factor = 10;
}
var pplr_form_id ='';

function updatepricepplr(tis,m){
if(m){
if(jQuery(tis).find(":selected").attr('data-pplr_price')>0){
jQuery(tis).addClass('pplraddprice').attr('data-pplr_price',jQuery(tis).find(":selected").attr('data-pplr_price'));
}
else{
jQuery(tis).removeClass('pplraddprice');
}
jQuery(tis).attr('data-variant',jQuery(tis).find(":selected").attr('data-variant'));
}
var frame =jQuery(tis).attr('data-frame');

if(typeof frame !== 'undefined'){
var _m = _PP[_CM + frame].split(',');
if(_m[82]>0){
    jQuery(tis).parent().find('.pplr_option_text_span').text(' - '+jQuery(tis).val());
}
}


var name= jQuery('.pplr_select[data-frame="'+frame+'"]').attr('name');
jQuery('.pplr_select[name="'+name+'"]').each(function() {
var t = jQuery(this);
if (t.val() !== jQuery(tis).val()) {
t.val(jQuery(tis).val());

if(_m[82]>0){
  t.parent().find('.pplr_option_text_span').text(' - '+jQuery(tis).val());
}

var dp = t.find('option[value="'+jQuery(tis).val().replace(/"/g, '\\"')+'"]');
t.attr("data-pplr_price",dp.attr("data-pplr_price")).attr("data-variant",dp.attr("data-variant"));
}
})
if(m){
if(jQuery(tis).val() !==''){jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');}
}
}

function sourceBiggerFont(tis){
var a = jQuery(tis).siblings('.pplr-size-select');
var now_font = a.attr('data-size');
var now_frame =a.attr('data-frame');
var now_name= jQuery('.pplr_text[data-frame="'+now_frame+'"]').attr('name');
var data_size = (now_font*(1+window.pplr_font_factor/100)).toFixed(10)
jQuery('.pplr-size-select[data-frame="' + now_frame + '"]').attr('data-size',data_size);
jQuery('.pplr_text[name="'+now_name+'"]').each(function() {
  pplr_values[jQuery(this).attr('data-frame')][1] = data_size;
jQuery(this).parent(RP).find('.pplr-size-select').attr('data-size',data_size);
})
LoadPplrWithFont(pplrframe);
}

function sourceSmallerFont(tis){
var a = jQuery(tis).siblings('.pplr-size-select');
var now_font = a.attr('data-size');
var fr = a.attr('data-frame');
var n = 1/(1+window.pplr_font_factor/100);
var fh= 1;
if (jQuery('input.pplr_font[data-frame=\"' + fr + '"]').length !== 0) {
fh = jQuery('input.pplr_font[data-frame=\"' + fr + '"]').attr('data-height');
}
if(now_font>a.val()*n){
now_font = a.val()*n/fh;
n = 1;
}
if(now_font*0.9>4){
var now_frame =a.attr('data-frame');
var now_name= jQuery('.pplr_text[data-frame="'+now_frame+'"]').attr('name');
var data_size = (now_font*n).toFixed(10)
jQuery('.pplr_text[name="'+now_name+'"]').each(function() {
  pplr_values[jQuery(this).attr('data-frame')][1] = data_size;
  jQuery(this).parent(RP).find('.pplr-size-select').attr('data-size',data_size);
})
LoadPplrWithFont(pplrframe);
}
}


function pplr_align_select(tis,t){
jQuery(tis).addClass('active').siblings().removeClass('active');
var now_frame =jQuery(tis).siblings('.pplr-align-select').attr('data-frame');
var now_name= jQuery('.pplr_text[data-frame="'+now_frame+'"]').attr('name');
jQuery('.pplr_text[name="'+now_name+'"]').each(function() {
  pplr_values[jQuery(this).attr('data-frame')][20] = t;
jQuery(this).parent(RP).find('.pplr-align-select').val(t);
})
LoadPplrWithFont(pplrframe);

}

function pplrcomplete(){
    // if($PP_EL(".pplr_image_loaded")[0] || _CP[10]>2 || _CP[8] !=='1' && _CP[10]<3){
    if(_CP[10]>2 || _CP[8] !=='1' && _CP[10]<3 || pplr_el.hasClass("pplr_image_loaded")){
        $PP_EL(".pplr-wrapper:not(.pplr_no_preview):not(.pplr-hide) .pplr-swatch-element[data-thumb]:visible").each(function() {
            jQuery(this).css('background-image', 'url("' + jQuery(this).attr('data-thumb') + '")');
            jQuery(this).removeAttr('data-thumb');
        })
    }
}

function pplr_tab_show(k,tis){


    // newly added
    if(jQuery(tis).attr("data-pview")){
        if(jQuery(tis).hasClass("pplr_active")){
            return;
        }
        pplr_is_image_change = false;
        pplr_pre_type_active_sync(jQuery(tis).attr("data-pview"));
    }

    jQuery('#pplr_tab_'+k).addClass('pplr_active').removeClass('pplr_notab').siblings().removeClass('pplr_active');
    jQuery(tis).addClass('pplr_active').siblings().removeClass('pplr_active');
    var t_ = jQuery('#pplr_tab_'+k).find(RP+'[data-main]:not(.pplr_no_preview)');
    if(t_[0]){
        var frame = t_.first().attr("data-main");
    }else{
        var frame = jQuery('#pplr_tab_'+k).find(RP+'[data-main]').first().attr("data-main");
    }
    setTimeout(function() {
        var b = jQuery('.pplr_tab_wrapper');
        var c = jQuery(".pplr-p-right:visible");
        if(!c[0]){c = jQuery(_P_P);}
        var d= 0; if(c[0]){d = -c.offset().top;}
        var a = d+b.offset().top;
        if(a<0){
            c.animate({ scrollTop:c.scrollTop()+a});
        }
        jQuery('.pplr_active').animate({ scrollTop:0});
    },10);

    pplr_hide_duplicate();
    LoadPplrWithFont(frame);
    pplrcomplete();
}

function pplr_checker(arr, is_any = false){
  if(is_any == 2){
      for(let i = 0; i < arr.length; i++){
          if(arr[i]) {
              console.log('returend true');
              return true;
          }
      }
  }
  return arr.every(val => val == true);
}

function autocorrectHTML(e){const n=document.implementation.createHTMLDocument("temp");return n.body.innerHTML=e,1===n.body.children.length&&"P"===n.body.children[0].nodeName&&n.body.children[0].textContent===e?e:n.body.innerHTML}


function updateconditionFeild(tis, k, mn, t){
  if(jQuery(tis)){
    var $tis = jQuery(tis);

    const m_13 = pplr_values[k][13];
    if(m_13 == 8){
      pplr_values[k][pplr_last_idx].val = $tis.is(":checked");
    }else if(m_13 == 7){
      pplr_values[k][pplr_last_idx].val = $tis.val();
    }
  }
  updatecondition(k, mn, t);
}

function showHideFieldCondition() {

  var ancestor = [];
  var showcon = [];

  var variant_now;
  var varriant_title;
  var has_v_id = true;

  if(product_personalizer['conditions']){

      var pplr_conditions = JSON.parse(product_personalizer['conditions']);

      for (var y = 1; y <= parseInt(_CP[1]); ++y) {

          newcondition= true;
          var condition_items = pplr_conditions['condition_'+y];

          if(condition_items && condition_items?.value && condition_items?.value[0]){

              var condition =  condition_items?.value;

              var show_f = [];

              for (var z = 0; z < Object.keys(condition).length; ++z) {
                  var show_a = false;
                  var pplrcheck = true;
                  var A= condition[z][0];


              if(ancestor.indexOf(parseInt(A)) < 0){

                var E = [];
                var pv_ = [];
                if(A != "v__title"){
                    pv_ = pplr_values[A];
                    var inp_type = pv_[13];

                    var e_val = pv_[pplr_last_idx]?.val;
                    E = Array.isArray(e_val) ? e_val : [e_val];
                    if(inp_type == 8) {
                        if(!e_val){
                            E = [''];
                        }
                    }
                  }

                    if(condition[z][1] == 0){
                        show_a = true;
                    }

                  
                   if(typeof condition[z][2]!=='string'){
                      for (var l = 0; l < Object.keys(condition[z][2]).length; ++l) {

                          if(condition[z][2][l]=='unchecked'){ var pplrcheck = false;}

                          if(A == "v__title" && !variant_now && !varriant_title){
                            if(jQuery('.pplr_popup_form')[0]){
                                variant_now = pplr_variant_id(jQuery('.pplr_popup_form'));
                            }
                            else{
                                variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
                            }
                            varriant_title = pplr_variant_title(variant_now);
                          }

                          // if(E.indexOf(condition[z][2][l]) > -1  || ((condition[z][2][l] == varriant_title || (Array.isArray(condition[z][3]) && (condition[z][3]?.includes(parseInt(variant_now)) || condition[z][3]?.includes(variant_now)))) && A=='v__title') || jQuery('.pplrcheckbox[data-frame="' + A+ '"]').is(':checked')== pplrcheck ){
                          if(E.indexOf(condition[z][2][l]) > -1  || ((condition[z][2][l] == varriant_title || (Array.isArray(condition[z][3]) && (condition[z][3]?.includes(parseInt(variant_now)) || condition[z][3]?.includes(variant_now) || condition[z][3]?.includes(String(variant_now)))))  && A=='v__title') || (A != "v__title" && pv_ && pv_[13] == 8 && e_val== pplrcheck) ){

                              if(condition[z][1] == 1){
                                  show_a = true;
                              }
                              else{
                                  show_a = false;
                              }
                          }
                      }
                    }
                    else{

                      if(condition[z][2]=='unchecked'){ var pplrcheck = false;}

                          if(A == "v__title" && !variant_now && !varriant_title){
                            if(jQuery('.pplr_popup_form')[0]){
                                variant_now = pplr_variant_id(jQuery('.pplr_popup_form'));
                            }
                            else{
                                variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
                            }
                            varriant_title = pplr_variant_title(variant_now);
                          }

                          // if(E.indexOf(condition[z][2][l]) > -1  || ((condition[z][2][l] == varriant_title || condition[z][3]?.indexOf(variant_now) > -1) && A=='v__title') || jQuery('.pplrcheckbox[data-frame="' + A+ '"]').is(':checked')== pplrcheck ){
                          if(E.indexOf(condition[z][2][l]) > -1  || ((condition[z][2][l] == varriant_title || condition[z][3]?.indexOf(variant_now) > -1) && A=='v__title') || e_val== pplrcheck ){

                              if(condition[z][1] == 1){
                                  show_a = true;
                              }
                              else{
                                  show_a = false;
                              }
                          }


                    }
                    
                } else{
                        if((Object.keys(condition[z][2]).includes("") && condition[z][2]?.length == 1) || condition[z][2]?.length == 0){
                            show_a = true;
                        }

                    }

                show_f.push(show_a);

                if(A=='id' ||  A=='v__title'){
                    has_v_id = false;
                }

              }

              if(Object.keys(condition).length > 0){

                  if(pplr_checker(show_f, condition_items?.type)){
                      showcon.push(y);
                  }else{
                      ancestor.push(y);
                  }
              }


          }
      }
  }

  if(conditions_json !== null){
      if (Array.isArray(conditions_json) || typeof(conditions_json) !== 'undefined') {
          for (var y = 0; y < Object.keys(conditions_json).length; ++y) {
              var pplrcheck = true;
              var A= conditions_json[y][0];
              if(!A || A =="0"){
                continue;
              }
              var B = decodeHtml(conditions_json[y][1]).split('||'); 
              var B0 = decodeHtml(decode_utf8(conditions_json[y][1]));
              var B1 = decodeHtml(decode_utf8(conditions_json[y][1])).split('||');
              var B2 = decodeHtml(decode_utf8(extractContent(conditions_json[y][1]))).split('||');
              var B3 = [];

              for (let n = 0; n < B1.length; n++) {
                  var m = B1[n].split('-');
                  if(parseInt(m[0])>10000 && m.length>1){
                  m.shift();
                  B3.push(m.join('-'));
                  }
              } 

              var C = conditions_json[y][2];
              var D = conditions_json[y][3].split('||');
              // var EL = $PP_EL('input[data-frame="' + A+ '"]:not(.pplr-crop):not(.pplr_no_condition),select[data-frame="' + A+ '"]')
              var E = null;

              if(A == "id" && !variant_now && !varriant_title){
                if(jQuery('.pplr_popup_form')[0]){
                    variant_now = pplr_variant_id(jQuery('.pplr_popup_form'));
                }
                else{
                    variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
                }
                varriant_title = pplr_variant_title(variant_now);
              }else if(A != "id"){
                E = pplr_values[A][pplr_last_idx].val;
                E = Array.isArray(E) ? E.join("") : E;
              }

              if(B=='unchecked'){ var pplrcheck = false;}
              // if( B.indexOf(E) > -1 || B1.indexOf(E) > -1 || B2.indexOf(E) > -1 || B0.indexOf(variant_now) > -1 && A=='id' || B3.indexOf(varriant_title) > -1 && A=='id'  || jQuery('.pplrcheckbox[data-frame="' + A+ '"]').is(':checked')==pplrcheck ){
              if( B.indexOf(E) > -1 || B1.indexOf(E) > -1 || B2.indexOf(E) > -1 || B0.indexOf(variant_now) > -1 && A=='id' || B3.indexOf(varriant_title) > -1 && A=='id' || (pplr_values[A] && pplr_values[A][13] == 8 && E==pplrcheck) ){


              if(C=='show'  && ancestor.indexOf(A)<0){
                  for (l = 0; l < D.length; ++l) {
                      if(showcon.indexOf(D[l])<0){
                      showcon.push(D[l]);
                      }
                  }

                  }
                  else{
                  for (l = 0; l < D.length; ++l) {
                  ancestor.push(D[l]);
                  }

                  }

              }
              else{

                  if(C=='show' ){
                  for (l = 0; l < D.length; ++l) {
                  ancestor.push(D[l]);
                  }

                  }
                  else{
                  for (l = 0; l < D.length; ++l) {
                      if(showcon.indexOf(D[l])<0){
                      showcon.push(D[l]);
                      }

                  }

                  }

              }
              if (A == 'id' ||  A=='v__title'){
                    has_v_id = false;
                }
          }

      }
  }


  var hidecon = ancestor.filter(function(item, pos) {
    return ancestor.indexOf(item) == pos;
  });

  hidecon =  hidecon.filter(it => it > 0 && ((pplr_values && pplr_values[it]) || !pplr_values?.[1]));
  showcon =  showcon.filter(it => it > 0 && ((pplr_values && pplr_values[it]) || !pplr_values?.[1]));

  return [hidecon, showcon, variant_now,has_v_id];

}


function updatecondition(k,mn,t,s,r,v,qr){

    if(p_d_o){
        return;
    }

    if (_CP[10]>2) {
        if(!jQuery('.pplr-main')[0]){
            return;
        }
    }

    var p = k; 

var [hidecon, showcon, variant_now, has_v_id] = showHideFieldCondition();

if(hden==hidecon.length){spn=0;}
hden=hidecon.length;

var newhidecon = [];


for (var i = 0; i < hidecon.length; ++i) {
  if(!pplr_values[hidecon[i]][pplr_last_idx]?.hidden || _CP[10] > 2){

    const inp_type = pplr_values[hidecon[i]][13];

    var n_b = $PP_EL('.pplr-wrapper[data-main="' + hidecon[i]+ '"],.pplr-wrapper[data-frame="' + hidecon[i]+ '"]');
    n_b.addClass('pplr_no_preview').removeClass('pplr_show_preview').slideUp(spn);
    if(inp_type == 8){
      $PP_EL('.pplrcheckbox[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
    }else if(inp_type == 6 || inp_type == 7){
      $PP_EL('.pplr_select[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
    }else{
      $PP_EL('.pplr_aux[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
    }
    if(inp_type < 5){
      $PP_EL('.pplr_monogram[data-frame="' + hidecon[i]+ '"]').prop('disabled', true);
    }
    newhidecon.push(hidecon[i]);
    pplr_values[hidecon[i]][pplr_last_idx].hidden = true;
  }
  var index = showcon.indexOf(hidecon[i]);
  if (index > -1) {
    showcon.splice(index, 1);
  }

}

for (var i = 0; i < newhidecon.length; ++i) {
  var n_b = $PP_EL('.pplr-wrapper[data-main="' + newhidecon[i]+ '"],.pplr-wrapper[data-frame="' + newhidecon[i]+ '"]');
    if(n_b.hasClass('p_h_d_p')){
    var L_ = n_b.find('.cstmfy_c_required,.pplrcheckbox,.pplr_imgg,.pplr_select,.pplr_text');
    if(L_[0]){
    var f = L_.data('frame');
    var n = L_.attr('name');
  
    if($PP_EL('.pplr-wrapper:not(.p_h_d_p):not(.pplr_no_preview):not(.cstmfy_static) [name="'+n+'"]').length == 0){
  
    var k_ = $PP_EL('[name="'+n+'"]').parents('.pplr-wrapper:not(.pplr_no_preview):not(.cstmfy_static)');
    k_.removeClass('p_h_d_p').show(0);
    k_.find('[name="'+n+'"]').removeClass('pplr_hide_duplicate').attr('disabled',false);
    }
    }
    
  }
}


var p_old = pplrframe;
var newframe = false;

for (var i = 0; i < showcon.length; ++i) {
  if(pplr_values[showcon[i]][pplr_last_idx]?.hidden){
    var a = $PP_EL('.pplr-wrapper[data-main="' + showcon[i]+ '"]');
    var b = $PP_EL('.pplr-wrapper[data-frame="' + showcon[i]+ '"]');
    a.removeClass('pplr_no_preview p_h_d_p');
    b.removeClass('pplr_no_preview p_h_d_p');
    a.addClass('pplr_show_preview preffect').show();
    b.addClass('pplr_show_preview preffect').show();
    var ttk = $PP_EL('.pplr-wrapper:not(.cstmfy_static) .pplr_monogram[data-frame="' + showcon[i]+ '"]');
    ttk.prop('disabled', false);
    newframe = true;
    $PP_EL('.pplr_monogram[data-frame="' + showcon[i]+ '"]').removeClass('pplr_hide_duplicate');

    const inp_type = pplr_values[showcon[i]][13];
    if(inp_type == 8){
      $PP_EL('.pplrcheckbox[data-frame="' + showcon[i]+ '"]').prop('disabled', false);
    }else if(inp_type == 6 || inp_type == 7){
      $PP_EL('.pplr_select[data-frame="' + showcon[i]+ '"]').prop('disabled', false);
    }else{
      $PP_EL('.pplr_aux[data-frame="' + showcon[i]+ '"]').prop('disabled', false);
    }

    pplr_values[showcon[i]][pplr_last_idx].hidden = false;
  }
}
var check1c = true;

if(pplr_has_tab){ // new condition for tabs
  if (pplr_values[pplrframe][pplr_last_idx]?.hidden) {
    for (var i = 0; i < showcon.length; ++i) {
      if(!(pplr_values[showcon[i]][13] == 6 || pplr_values[showcon[i]][13] == 7) && $PP_EL('.pplr-wrapper[data-main="' + showcon[i]+ '"]').parents('.pplr_tab.pplr_active')[0]){
        pplrframe = showcon[i];
        check1c = false;
        break;
      }
    }
  }
  
  if (pplr_values[pplrframe][pplr_last_idx]?.hidden && check1c) {
    for (var i = 0; i < showcon.length; ++i) {
      if($PP_EL('.pplr-wrapper[data-main="' + showcon[i]+ '"]').parents('.pplr_tab.pplr_active')[0]){
        pplrframe = showcon[i];
        check1c = false;
        break;
      }
    }
  }
}

var showcon_a = showcon.sort(function(a, b){return a-b});

if (showcon_a.indexOf(pplrframe)<0 && newframe && check1c) {
  for (var i = 0; i < showcon_a.length; ++i) {
  if(pplr_values[pplrframe][pplr_last_idx]?.hidden && parseInt(showcon_a[i])>parseInt(p)){
    pplrframe = showcon_a[i];
    check1c = false;
    break;
  }
  }
}

if (showcon.indexOf(pplrframe)<0 && newframe && check1c) {
  for (var i = 0; i < showcon.length; ++i) {
  if(pplr_values[pplrframe][pplr_last_idx]?.hidden){
    pplrframe = showcon[i];
    check1c = false;
    break;
  }
  }
}

if(pplr_has_tab){ // new conditon for tabs
  if (newframe && check1c) {
    for (var i = 0; i < showcon_a.length; ++i) {
      if(!pplr_values[showcon_a[i]][pplr_last_idx]?.hidden && parseInt(showcon_a[i])>parseInt(p) && $PP_EL('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').parents('.pplr_tab.pplr_active')[0]){
        check1c = false;
        pplrframe = showcon_a[i];
        break;
      }
    }
  }
}

if (newframe && check1c) {
  for (var i = 0; i < showcon_a.length; ++i) {
    // if(!jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').hasClass('pplr_no_preview') && parseInt(showcon_a[i])>parseInt(p)){
    if(!pplr_values[showcon_a[i]][pplr_last_idx]?.hidden && parseInt(showcon_a[i])>parseInt(p)){
      check1c = false;
      pplrframe = showcon_a[i];
      break;
    }
  }
}

if(pplr_has_tab){ // new condition for tabs
  if (newframe && check1c) {
    for (var i = 0; i < showcon_a.length; ++i) {
      // if(!jQuery('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').hasClass('pplr_no_preview')){
      if(!pplr_values[showcon_a[i]][pplr_last_idx]?.hidden){
        if(parseInt(showcon_a[i])<parseInt(p) && $PP_EL('.pplr-wrapper[data-main="' + showcon_a[i]+ '"]').parents('.pplr_tab')[0] && $PP_EL('.pplr-wrapper[data-main="' + parseInt(p)+ '"]').parents('.pplr_tab')[0]){
        }else{
          pplrframe = showcon_a[i];
          break;
        }
      }
    }
  }
}

// if(p_old == pplrframe && jQuery('.pplr-wrapper .pplr_select[data-frame="' + k+ '"]')[0] && k !== pplrframe){
if(p_old == pplrframe && (pplr_values[k][13] == 6 || pplr_values[k][13] == 7) && k !== pplrframe){
  pplrframe = k;
}



if(pplr_has_tab){ // new condition for tabs
  // if (jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview')) {
  if (pplr_values[pplrframe][pplr_last_idx]?.hidden) {
    var bg = $PP_EL('.pplr_tab.pplr_active .pplr-wrapper[data-main]:not(.pplr_no_preview)');
    if(bg[0]){
    pplrframe= bg.attr("data-main");
    }
  }
}

// if (jQuery('.pplr-wrapper[data-main="' + pplrframe+ '"]').hasClass('pplr_no_preview')) {
if (pplr_values[pplrframe][pplr_last_idx]?.hidden) {
  var bg = $PP_EL('.pplr-wrapper[data-main]:not(.pplr_no_preview)');
  if(bg[0]){
  pplrframe= bg.attr("data-main");
  }
}
var p_l_h = false;

if(pplr_has_tab){ // new condtion for tabs

  $PP_EL('.pplr_tab').each(function() {
    var q = $PP_EL(this);
    var v = q.find('.pplr-wrapper:not(.cstmfy_static)').length;
    var xy = q.find('.pplr_no_preview:not(.cstmfy_static)').length;
    var vx = q.data('tab');
    var vv = $PP_EL('.pplr_tab_index[data-tab="'+vx +'"]');
    if(v==xy){
    vv.addClass('p_l_h');
    p_l_h = true;
    }
    else{
    vv.removeClass('p_l_h');
    }
  })

  //if(p_l_h && !window.PPLR_PREVENT_AUTO_TAB){
   // ptabify(true);
  //}

  var nn = $PP_EL('.pplr-wrapper[data-main="' + pplrframe+ '"]').parent('.pplr_tab');

  if(nn[0] && p_old !== pplrframe && !window.PPLR_PREVENT_AUTO_TAB){
    nn.addClass('pplr_active').siblings().removeClass('pplr_active'); 
    var k = nn.data('tab');
    $PP_EL('.pplr_tab_index[data-tab="'+k +'"]').addClass('pplr_active').siblings().removeClass('pplr_active');
  }

  if($PP_EL('.pplr_tab_index:visible')[0]){
    if(!$PP_EL('.pplr_tab_index:visible').hasClass('pplr_active')){
    var nn = $PP_EL('.pplr_tab_index:visible').first();
    nn.addClass('pplr_active').siblings().removeClass('pplr_active');
    var k = nn.data('tab');
    if(!window.PPLR_PREVENT_AUTO_TAB){
      $PP_EL('.pplr_tab[data-tab="'+k +'"]').addClass('pplr_active').removeClass('pplr_notab').siblings().removeClass('pplr_active');
    }
    }
  }

  if(window.PPLR_PREVENT_AUTO_TAB){
    var tab_index = $PP_EL('.pplr_tab_index.pplr_active').data('tab');
    if(tab_index && !$PP_EL(`.pplr_tab[data-tab="${tab_index}"]`).hasClass("pplr_active")){
      $PP_EL(`.pplr_tab[data-tab="${tab_index}"]`).addClass('pplr_active').removeClass('pplr_notab').siblings().removeClass('pplr_active');
    }
  }

} // pplr has tab condition

$PP_EL('.pplr_show_preview').show(0).removeClass('p_h_d_p');
$PP_EL('.pplr_show_preview .pplr_hide_duplicate').prop('disabled', false).removeClass('pplr_hide_duplicate');
$PP_EL('.preffect').removeClass('preffect');
$PP_EL('.pplr_show_preview:not(.p_h_d_p)').each(function() {
  if(jQuery(this).hasClass('preffect')){
    jQuery(this).hide(0).removeClass('preffect');
    jQuery(this).slideDown(spn);
  }
})

$PP_EL('.p_h_d_p .pplr_aux:not(.pplr-crop)').each(function() {
  var f = jQuery(this).data('frame');
  var n = jQuery(this).attr('name');
  if($PP_EL('.pplr-wrapper[data-main="' + f + '"]:not(.pplr_no_preview):not(.cstmfy_static)')[0]){
  var k = $PP_EL('[name="'+n+'"]').parents('.pplr-wrapper:not(.pplr_no_preview):not(.cstmfy_static):not([data-main])');
    k.removeClass('p_h_d_p').show(0);
    k.find('[name="'+n+'"]').removeClass('pplr_hide_duplicate').attr('disabled',false);
  }
})

if(pplr_has_tab){
  if(!$PP_EL('.pplr_tab_index:visible')[0]){
    $PP_EL('.pplr_tab_wrapper,.pplr_tab.pplr_active').addClass('pplr_notab');
  }
  else{
    $PP_EL('.pplr_tab_wrapper,.pplr_tab.pplr_active').removeClass('pplr_notab');
  }
}

pplr_hide_duplicate(); 

var pplr_img_now = pplr_field_img(pplrframe);


if (_CP[0] > 0) {

  if(typeof variant_now === 'undefined'){
   var variant_now = pplr_variant_id(jQuery('.pplr_popup_form'));
  }

for (var i = 0; i < pplr_product.variants.length; i++) {
  if (pplr_product.variants[i].id == variant_now) {
    if(pplr_product.variants[i]["featured_image"]){
      var pplr_img_now = pplr_product.variants[i]["featured_image"]["src"];
      break;
    }

  }
}
}

if (_CP[10] >2){
  if(pplr_img_now.indexOf('/products/') == -1 && pplr_img_now.indexOf('/files/') == -1 && pplr_img_now.indexOf('data:image') == -1){pplr_img_now =app_link_pplr+resizepplr+pplr_img_now+pplr_no_day;}

  if(pplr_img_now !== $PP_EL('.pplr-p-left .pplr_popup_image').attr('src')){
    $PP_EL('.pplr-p-left .pplr_popup_image').attr('src',pplr_img_now);
    if($PP_EL('.pplr-p-left').height()>100){
      $PP_EL('.pplr-p-left .pplr_popup_image').css('max-height',$PP_EL('.pplr-p-left').height());
    }
    pplr_modal_correct();
  }
}
pplr_preload_image();
if(v && has_v_id){
pplrcomplete();
return;
}
var preee = true;
if(!qr){
if(_CP[8] <2 || _CP[10] > 2){
  if(r){
    preee= false;
    LoadPplrWithFont(pplrframe,s);
  }
  else{
  if(!mn){
      if (_CP[8] == 1 || t) {
        preee= false;
        setTimeout(function() {
          LoadPplrWithFont(pplrframe,s);  
        },10)
      }
    }
    else{
      preee= false;
      LoadPplrWithFont(mn,s);
    }
  }
}
}

if(preee){
pplrcomplete();
}


spn = (typeof window.pplr_slide_animation === 'number') ? window.pplr_slide_animation : 500;

if(_CP[10] <2){
jQuery('.p_a_t_c').removeAttr(_SJ2[33]).removeClass(_SJ2[33]);
}


if(k!==pplrframe){return true;}else{return false;}
}

function img_save_from_canvas(type, canvas){
    var byteString = atob(canvas.split(",")[1]),
    ab = new ArrayBuffer(byteString.length),
    ia = new Uint8Array(ab),
    i;

    for(i = 0; i < byteString.length; i++){
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], {
        type : type
    });
}

function p_bar(evt,t,v){
    var c = jQuery(".progress-title");
    if (evt.lengthComputable) {
    var n = (evt.loaded / evt.total) * 100/t+v;
    if (n > 100) {n=n-100;}
    if (n > 99.99 && c[0]) {
        c.text(decodeHtml(decode_utf8(_SJ[6])));
        var originalText = c.text(),
            i = 0;
        setInterval(function() {

        c.append("-");
        c.prepend("-");
        i++;

        if (i == 4) {
            c.html(originalText);
            i = 0;
        }

        }, 500);
    }

    jQuery(".loader-canvas .pplr-progress").width(n + "%");
    jQuery(".loader-canvas .progress-txt").text(parseInt(n) + "%");
    if(jQuery('.pplr_svg')[0]){
            var circle = jQuery('.pplr_svg .pplr_bar');
            var r = circle.attr('r');
            var k = Math.PI*(r*2);
            var pct = ((100-n)/100)*k;
            circle.css({ strokeDashoffset: pct});
            jQuery('.pplr_cont').attr('data-pct',parseInt(n));
        }
    }
}

function g_f_tract(){
    if(pplrtracolready){
        return;
    }
    pplrtracolready = true;
    if(typeof fbq !== 'undefined' && typeof fbq === "function"){
        fbq('track', 'AddToCart', {
            content_name: pplr_product['title'], 
            content_ids: [pplr_product['id']],
            content_type: 'product_group',
            content_category : pplr_product['type'],
            value: (pplr_product['price']/100),
            currency: Shopify.currency.active 
        }); 
    }
    if(typeof ga !== 'undefined' && typeof ga === "function"){
        ga('ec:addProduct', {              
            'id': pplr_product['id'],                   
            'name': pplr_product['title'],        
            'price': (pplr_product['price']/100)                           
        });
    }
    if(window.pintrk){
        pintrk('track', 'addtocart', {
            value: (pplr_product['price']/100),
            currency: Shopify.currency.active ,
            order_quantity: 1, 
            line_items: [
                { 
                    product_id: pplr_product['id'], 
                    product_category: '' 
                }
            ]
        });
    }
}

if(typeof pplr_update_minicart !=='undefined'){
window.pplr_update_minicart = pplr_update_minicart;
}
var PIXEL_RATIO = PIXEL_RATIO_PPLR;

function pplr_reset_cart() {

window.no_self_running_request = true;

if(_SJ2[0]>3 && !pplr_buy_now){
  window.pplr_atc_triggered = true;
}

pplr_final_check=false;
jQuery('.addtocartbg').remove();
p_r = PIXEL_RATIO_PPLR;
pplrloadfinish= 1;
create_pplr = false;pplr_final_check=false;create_svg=false;
clearTimeout(checktimout);
price_pplr= false;
pplr_delay = 0;
pplr_view_array = [];
if(jQuery('.npbs')[0]){
  jQuery('.npbs').text(decodeHtml(decode_utf8(atcb))).val(decodeHtml(decode_utf8(atcb)));
}
pplrtracolready = false;
jQuery('#pplr,.pplr-item-added,.addtocartw,.pplrcustomref,.pplrcustomprice,.pplrcustompriceorigin,.pplrvarianttitle,.pplrcustomqtysplit').remove();

jQuery(".pplrform").find("input[name='id'],select[name='id']").prop("disabled", false);

jQuery(".pplr_preview_final").removeClass('pplr_preview_final').addClass('pplr_preview_wrapper');
pplr_tolal_image = [];
jQuery(`.pplr-hidden-file-input`).remove();

if(preSavedItems[`properties[${decodeHtml(_SJ[7])}]`]){
  delete preSavedItems[`properties[${decodeHtml(_SJ[7])}]`];
}
jQuery(`.pplr-hidden-file-input-ref[data-p-name]`).each(function() {
  jQuery(this).attr('name', jQuery(this).attr('data-p-name')).removeClass("pplr-hidden-file-input-ref");
})

jQuery('.pplr-empty-value-disabled').each(function() {
  jQuery(this).prop("disabled", false).removeClass("pplr-empty-value-disabled");
})

}



function pplr_after_cart(cart,form){

window.pplr_atc_triggered = false;

if(_SJ2[31]<1) {
    g_f_tract();
}

var locale ='';
if (typeof __st !== "undefined") {
if (__st.p == 'product' ) {
  var purl = __st.pageurl.split('/');
  if(purl[1] !=='products' && purl[1] !=='collections'){
    locale = '/'+purl[1];
  }
  if(purl[0].indexOf('shopifypreview')>-1){
    locale = 'https://'+purl[0];
  }
}}

if(pplr_buy_now){

  jQuery(`.pplr-hidden-file-input`).remove();
  if(preSavedItems[`properties[${decodeHtml(_SJ[7])}]`]){
    delete preSavedItems[`properties[${decodeHtml(_SJ[7])}]`];
  }

  if(window.pplr_draft_order){
      window.pplr_draft_order();return;
  }else{
      window.location = '/checkout';return;
  }
}

pplr_reset_cart();

pplrCustomeEvent("pplrAddToCartCompleted");

try {

  if(window.pplr_update_minicart){
      console.log('pplr_update_minicart');
      window.pplr_update_minicart(cart);
      return;
  }

  if(window.pplr_custom_cart_track){
      window.pplr_custom_cart_track(cart);
  }

  if (window.SLIDECART_UPDATE) {
    if(window.SLIDECART_STATE().settings.enabled){
      console.log('SLIDECART_OPEN');
      window.SLIDECART_UPDATE();
      window.SLIDECART_OPEN();
      if(window.pplr_cart_item_config){
        window.pplr_cart_item_config(true);
      }
      return;
    }
    else{
      console.log('SLIDECART_DISABLED');
    }
  } 
  if(typeof window.HSSLIDECART !== 'undefined') {
    console.log('HsCartDrawer');
    HsCartDrawer.getSlideCart();
    if(window.pplr_cart_item_config){
        window.pplr_cart_item_config(true);
      }
    return;
  }

} catch (err) {
  console.log(err);
}

if(_SJ2[0]==1){ location.reload();return;}
if(_SJ2[0]==2){ 
if(jQuery('#satcb_sticky_cart,.satcb-cs')[0]){
    jQuery('a[href="/cart"]').trigger('click');
  }
  else{
    jQuery('a[href="/cart"]').addClass('pplr_to_cart');
   // document.body.addEventListener('click', function(e) {var t = jQuery(e.target);if (t.hasClass('pplr_to_cart')){window.location = locale+'/cart';}}, true);
}

jQuery('body').append('<div class="pplr-item-added">'+_SJ2[1]+'</div>');
jQuery(".pplr-item-added").slideDown();
jQuery('.pplr_disabled').each(function() {
  if(!jQuery(this).parents('.pplr_no_preview')[0]){
    jQuery(this).prop('disabled', false).removeClass('pplr_disabled');
  }
})
window.PPLR_CAlCULATE_PRICE();
checkinventory();
setTimeout(function() {
      jQuery(".pplr-item-added").slideUp();
},5000);

if(jQuery.trim(_SJ2[2]).indexOf('.') !== 0 && jQuery.trim(_SJ2[2]).indexOf('#') !== 0){
    var a = jQuery('.'+_SJ2[2]+',#'+_SJ2[2]);
}
else{
  var a = jQuery(_SJ2[2]);
}

if(a[0]){
    jQuery.ajax({
        type : 'GET',
        url : "/cart.js",
        dataType : 'json',
        success : function(cart){
        var q = 0;
        for(var i = 0; i < cart.items.length; i ++) {
         var vid = (cart.items[i].variant_id).toString();
          if(vid.indexOf(pricechanger)<0){
            q += cart.items[i].quantity;
          }
        }
        a.text(q);
        a.removeClass('hidden hidden-count');
      }
    })
}
setTimeout(function() {
  if(window.pplr_cart_item_config){
        window.pplr_cart_item_config(true);
    }
},200);

var b = jQuery('.cart-link__bubble,.site-header__cart-indicator,.site-header__cart,.site-header__cart-bubble');
if(b[0]){b.addClass('cart-link__bubble--visible cart-bubble--visible site-header__cart-bubble--visible').removeClass('hide');}
return;
}
if(_SJ2[0]==3){
  if(window.pplr_draft_order){
          window.pplr_draft_order();return;
  }else{
        window.location = '/checkout';return;
  }

}
window.location = locale+'/cart';
}


function pplr_ajax_cart(formdata,form,retry){

  const call = () => {
    if(!isIE()){
      if(formdata.fd){var checkformdata = formdata.fd;console.log('formdata.fd');}else{var checkformdata = formdata;}
      if(!checkformdata.has('id')){
          if (createproduct == 2 || createproduct ==5){
            alert('No product variant found');
          }else{
            var variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
            formdata.append('id', variant_now);
          }
        }
      }
      window.no_self_running_request = false;
    
      jQuery.ajax({
      xhr: function() {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(evt) {

          if(save_to_pplr_host){
            if (createproduct > 2 && createproduct <5){
              p_bar(evt,2,50);
            }
            if (createproduct == 2 || createproduct == 5){
              p_bar(evt,4,75);
            }
          }else {
            if (createproduct > 2 && createproduct <5){
              p_bar(evt,1,0);
            }
            if (createproduct == 2 || createproduct == 5){
              p_bar(evt,1,0);
            }
          }

        }, false);
        return xhr;
      },
      type : 'post',
      url : "/cart/add.js",
      data:  formdata,
      method: "POST",
      contentType : !1,
      global: !1,
      processData : !1,
      dataType : 'json',
      cache: !1,
      crossDomain: true,
      async: true,
      headers: {
              "cache-control": "no-cache"
            },
      success : function(data, textStatus, jqXHR){
    
          if(window.Check_pplr_cart_properties){
            var cart_err = window.Check_pplr_cart_properties(data,formdata);
            if(cart_err){
              console.log(formdata);
              alert('Uploaded file error. Please Retry');
              jQuery.getJSON('/cart/clear.js', function(cart) {
                    // window.location.reload();
                  });
              return;
            }
          }
    
          if(typeof pplr_custom_ajaxcart !=='undefined'){
            console.log('Custom cart activated');
            pplr_custom_ajaxcart(formdata,form,data);
          }
          else{


            if(createproduct>1 && window.pplr_svg2pdf){
              var properties = data['properties'];
              var newproperties = {};
              if (properties !== null) {
              for (var i = 0; i < Object.keys(properties).length; i++) {
                var propertieskey = Object.keys(properties)[i];
                var propvalue = properties[propertieskey];
                if(propvalue && typeof propvalue !== 'object'){
                    if(propvalue.indexOf('.svg')>-1){
                      propvalue = "https://cdn-zeptoapps.com/product-personalizer/uploads?svg="+propvalue;
                    }
                  }
                 newproperties[jQuery.trim(propertieskey)] = propvalue;
               }
             }

              jQuery.ajax({
              type : 'POST',
              url : "/cart/change.js",
              dataType : 'json',
              data : {line: 1,properties: newproperties,quantity: data['quantity']},
              success : function(cart){
                pplr_after_cart(data,form);
                },
                error : function(jqXHR, textStatus, errorThrown){
                  pplr_after_cart(data,form);
                }
              })
            }
            else{
              pplr_after_cart(data,form);
            }

          }
        },
      error : function(jqXHR, textStatus, errorThrown){
          //for(var pair of formdata.entries()) {
            // console.log(pair[0]+ ', '+ pair[1]); 
            //if(pair[0] !=='id' && pair[0] !== 'quantity'){
            //formdata.delete(pair[0]);
            //formdata.delete('Preview');
            //pplr_ajax_cart(formdata,form);
            // break;
          //}
          //}
        console.log(jqXHR);
    
        if(jqXHR.status==404){
          alert("Cannot find variant");
        }
    
        if(jqXHR.status==422){
          alert("Inventory Alert ! You can't add this item to the cart");
        }

        if(jqXHR.status==413){
          alert("Request Entity Too Large");
        }
    
        if(jqXHR.status==504){
          alert("Timout Error");
        }
    
        if(jqXHR.status==504){
          alert("Variant Not Found in Product Form");
        }
        //var err = eval(jqXHR.responseText);
          //alert(errorThrown);
        }
      });
  }


  var save_to_pplr_host = true;
  if(save_to_pplr_host){

      var elements = [];
      formdata.forEach(function(value, key) {
          if (value instanceof File) {
            var upsvg = true;
            if(value.type == 'image/svg+xml' && window.pplr_svg2pdf){
              upsvg = false;
            }
            if(key && value && key.includes("properties[") && upsvg && value.name !==''){
              if(jQuery(`input.file-uploaded-host[data-name="${key}"]`).length > 0 || preSavedItems[key]?.file){
                formdata.set(key, preSavedItems[key]?.file);
              }else {
                elements.push({name: key, file: value});
              }
            }
          }
      });
      saveImages(elements, false, (data) => {
        if(data){
          for(const n in data){
            formdata.set(n, data[n]);
          }
        }
        call();
      });
  }else {
    call();
  }

  
}

if(commonsvg){
  var jspdf_lib = '1.5.3/jspdf.min.js';
  var svg2pdf_lib = 'svg2pdf.min.js';
  if(Shopify.shop == 'allogiocases.myshopify.com'){
    jspdf_lib = '2.5.1/jspdf.umd.min.js';
    svg2pdf_lib = 'svg2pdf.js';
  }
loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/zlib.min.js', function() {
 loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/png.min.js', function() {
  loadScript_pplr('//cdnjs.cloudflare.com/ajax/libs/jspdf/'+jspdf_lib, function() {
    loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/canvas2svg.min.js', function() {
    })
    loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/'+svg2pdf_lib, function() {
    })
  })
})
})
}

loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/changedpi.js', function() {
})


function image_type(url){
    url = url.toLowerCase();
    if(url.indexOf(".png")!== -1 || createproduct <3 || createproduct > 3){
        return 'image/png';}
    else{
        return 'image/jpeg';
    }
}

function changeDPIoFimage(base64image,dpi){
    if(dpi==72){return base64image;}
    else{
        return changeDpiDataUrl(base64image,dpi);
    }
}

window.pplr_shopify_file_size = 10;



function FileListItems(file_objects){
    new_input=new ClipboardEvent("").clipboardData||new DataTransfer()
    for(i=0,size=file_objects.length;i<size;++i){
        new_input.items.add(file_objects[i]);
    }
    return new_input.files; 
} 



function addimagedata(formdata,pplrform){
var addimage = [];
var dpi = _SJ2[27];
if(_SJ2[27]==0){dpi=300;}
if(_SJ2[27]==1){dpi=72;}
for (var ii = 0; ii < jQuery('.fileupload').length; ii++) {
var k = jQuery('.fileupload').eq(ii);
if(!k.parents('.pplr_no_preview')[0]){
  var frame = k.data('frame');
  var prop = k.attr('name');
  var _m = _PP[_CM + frame].split(',');
    if ( _SJ2[26] <2 || _m[39]==3 || createproduct <2 || _CP[8]>2 || !pplr_preview_save) {
          var cc = jQuery('.img_url[data-frame="' + frame + '"]');
            if(cc.attr("data-psrc").indexOf("data:image")!== -1 && addimage.indexOf(prop)<0){
              addimage.push(prop);
              var type =  jQuery('.crop_img_url[data-frame="' + frame + '"]').data('type');
              
              if(cc.attr("src") !== '' && typeof cc.attr("src") !=='undefined'){
                var blobObj = img_save_from_canvas(type, cc.attr("src"));
              }
              else{
                var blobObj = img_save_from_canvas(type, cc.attr("data-psrc"));
              }
              formdata.append(prop, blobObj, 'upload.'+type.split('/')[1].replace('+xml',''));

              if(_SJ2[0]>3 && !pplr_buy_now){

                pplrform.append('<input id="pplr_frame_'+frame+'" '+pplr_form_id+' class="pplr_file_upload" style="display:none;" type="file"  name="'+prop+'" />');
                var file=new File([blobObj],'upload.'+type.split('/')[1].replace('+xml',''),{type:type,lastModified:new Date().getTime()});
                var array_images=[file]; 
                var input_images=document.querySelector("#pplr_frame_"+frame);
                input_images.files=new FileListItems(array_images);

              }
        }
    }
  }
}
}

var preSavedItems = {}
var cropped_image_save_queue = {}
var cropped_image_save_queue_timeout;
async function saveImagesToServer(formItems, fileInput, progressEl){
  // uploaded file class = file-uploaded-host
  return new Promise((resolve, reject) => {
      // if(!window.own_host_1232){
      //   return;
      // }

      // var pplrform = jQuery(".pplr_atc_form");
      // const fileInputs = $('input[type="file"][name*="properties["]');
      var fileInputs = [];
      if(!formItems){
        fileInputs = jQuery(fileInput);
      }
      if((!fileInputs || fileInputs.length === 0) && formItems?.length === 0){
          resolve();
          return;
      }

      const formData = new FormData();

      const names = {};
      let idx = 0;
      if(!formItems && fileInputs.length > 0){
          fileInputs.each(function() {
              const name = jQuery(this).attr("name");
              names[name] = jQuery(this);
              formData.append("name[]", name);
              formData.append("file[]", jQuery(this)[0].files[0]);
              if(preSavedItems[name]?.file){
                formData.append("prev_files[]", preSavedItems[name]?.file);
              }
              preSavedItems[name] = false;
              jQuery(this).removeClass("file-uploaded-host");
              idx++;
          });
      }

      const crpppedNames = {}

      if(formItems){
        formItems.forEach(({name, file, crop}) => {
          formData.append("name[]", name);
          formData.append("file[]", file);
          if(crop){
            crpppedNames[name] = crop
          }
          if(preSavedItems[name]?.file){
            formData.append("prev_files[]", preSavedItems[name]?.file);
          }
          preSavedItems[name] = false;
        })
      }

      var object = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });

      const ts = Math.floor(Date.now() / 1000);
      const tp = `${Shopify.shop}:${ts}`;
      const tn = btoa(tp); 
      

      jQuery.ajax({
        url: 'https://zeptocdn.com/aws-file-store.php?v=2',
        type: 'POST',
        data: formData,
        headers: {
            'Authorization': `Bearer ${tn}`
        },
        contentType: false,
        processData: false, xhr: function() {

            const xhr = new window.XMLHttpRequest();

            // Upload progress
            xhr.upload.addEventListener('progress', function(evt) {
                if (evt.lengthComputable) {
                    if(typeof progressEl == "function"){
                      const percentComplete = (evt.loaded / evt.total) * 100;
                      progressEl(percentComplete)
                    }else {
                      if (createproduct > 2 && createproduct <5){
                        p_bar(evt,2,0);
                      }else if (createproduct == 2 || createproduct == 5){
                        p_bar(evt,4,50);
                      }
                    }
                }
            }, false);
    
            return xhr;
        },
        success: function(response) {
            const res = JSON.parse(response)
            const data = res?.data;
            if (data && typeof data === "object") {
                for (const n in data) {
                    if (!formItems) {
                        const inputEl = names[n];
                        if(inputEl){
                          inputEl.addClass("file-uploaded-host").attr("data-name", n);
                        }
                    }
                    preSavedItems[n] = {file: data[n], ...(crpppedNames[n] ? {crop: crpppedNames[n]} : {})};
                }
            }
            resolve(data);
        },
        error: function(xhr, status, error) {
            let errorMessage = `Error from server: ${error}`;
            if (xhr.responseJSON && xhr.responseJSON.message) {
                errorMessage = `Error from server: ${xhr.responseJSON.message}`;
            }
            reject(new Error(errorMessage)); // Reject promise with error message
        }
      });
  });
}


async function saveImages(formItems, fileInput, callback, progressEl) {
  if(!pplr_s3_upload){
    if(typeof progressEl === "function"){
      progressEl({completed: true})
    }
    if(typeof callback === "function"){
      callback([])
    }
    return;
  }
  await saveImagesToServer(formItems, fileInput, progressEl)
    .then(data => {
      if(typeof callback === "function"){
        callback(data)
      }
      if(typeof progressEl === "function"){
        progressEl({completed: true})
      }
    })
    .catch(error => {
      if(typeof progressEl === "function"){
        progressEl({completed: true})
      }
      console.error('Failed:', error.message);
    });
}

function saveQueueImages(){
  console.log("SAVING CROPPING IMAGES");

  const files = [];
  var indices = [];
  for(const f in cropped_image_save_queue){
    const item = cropped_image_save_queue[f];
    if(item && preSavedItems[f]?.crop != item?.crop){
      indices.push(item?.index);
      files.push({file: item.file, name: f, crop: item?.crop});
      cropped_image_save_queue[f] = false;
    }
  }
  if(files?.length == 0){
    return;
  }

  const loader = `<div class="crop-image-saving" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;display: flex;align-items: center;justify-content: center;background: #00000066;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style="shape-rendering: auto;display: block;width: 50px;height: 50px;animation: p_loading-spinner .6s linear infinite"><g data-idx="1"><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="6" stroke="#fff" fill="none" cy="50" cx="50" data-idx="2" transform="matrix(0.6845426019583707,-0.7289728569048807,0.7289728569048807,0.6845426019583707,-20.67577294316257,52.2215127473255)">
</circle><g data-idx="4"></g></g></svg></div>`;

  indices.forEach(idx => {
    jQuery(`.pplr-wrapper[data-main="${idx}"] .jscroll .pplr_img_w`).css("position", "relative").append(loader)
  })

  saveImages(files, false, (data) => {
    console.log(data)
    jQuery(".crop-image-saving").remove()
  });
}


function saveSyncThemeImages() {

  const call = () => {
    jQuery('.p_a_t_c').addClass('pplr_adding').click();
    pplr_reset_cart();
    console.log("ADDED TO CART")
  }

  pplr_sync_with_theme();
  jQuery('.p_a_t_c').addClass('pplr_adding');
  if(!jQuery('#p_loading-spinner')[0]){
    jQuery('.p_a_t_c').append('<svg id="p_loading-spinner"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20"><g fill="none"><path id="track" fill="#C6CCD2" d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z"></path><path id="section" fill="#3F4850" d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z"></path></g></svg>');
  }

  if(!pplr_s3_upload){
    call();
    return;
  }

  console.log("ADDING TO CART")
  var elements = jQuery();

  jQuery(`input[type="file"][name]:not(disabled):not(.pplr_disabled)`).each(function() {
    if(jQuery(this).attr("name")?.includes("properties[")){
      elements = elements.add(jQuery(this));
    }
  })  
  
  var files = [];
  const inputelements = {}

  elements.each(function() {
      const input = jQuery(this)
      const file = input ? input[0]?.files[0] : false
      const key = input.attr("name")
      if (file instanceof File) {
        if(key && file && key.includes("properties[")){
          if(jQuery(`input.file-uploaded-host[data-name="${key}"]`).length > 0){
            input.after(`<input name="${key}" type="hidden" class="pplr-hidden-file-input" form="${input.attr("form")}" value="${preSavedItems[key]?.file}" />`)
            input.attr('data-p-name', key).removeAttr("name")
          }else {
            const isCroppedItem = input?.attr("id")?.includes("Crop_Url")
            if(isCroppedItem){
              let idx = input?.attr("id")?.replace("Crop_Url_", "")
              console.log(idx)
              const cropVal = jQuery(`.pplr-crop.pplr_aux[data-frame="${parseInt(idx)+1}"]`).val()
              console.log(preSavedItems[key])
              if(preSavedItems[key]?.crop != cropVal){
                files.push({name: key, file: file, crop: cropVal});
              }
            }else {
              files.push({name: key, file: file});
            }
            inputelements[key] = input
          }
        }
      }
  });
  
  saveImages(files, false, (data) => {
    if(data){
      for(const n in data){
        const input = inputelements[n]
        input.after(`<input name="${n}" type="hidden" class="pplr-hidden-file-input" value="${data[n]}" form="${input.attr("form")}" />`)
        input.attr('data-p-name', n).removeAttr("name").addClass("pplr-hidden-file-input-ref")
      }
    }
    call();
  });
      
}


function pplr_final_print(){

    if(createproduct<2 || !pplr_preview_save && createproduct !=='2' && createproduct !=='5'){
        return;
    }

    var ptitle = pplr_product.title;
    var pplrform = jQuery(".pplrform");

    var checkprice = window.PPLR_CAlCULATE_PRICE();
    jQuery('.fileupload').each(function() {
        var cc = jQuery(this).siblings('.img_url');
        if (jQuery(this).attr('accept') !=='' && cc.attr("data-psrc").indexOf("data:image")!== -1) {
            jQuery(this).prop('disabled', true).addClass('pplr_disabled');
        }
    })

    jQuery('.pplr_ref_class,.pplr_file_upload').remove();

    var var_img = pplr_product.images[0];

    if (createproduct == 2 || createproduct ==5){   

        var inv_man = pplr_product.variants[0].inventory_management;
        var pplrvariantid = pplr_variant_id(jQuery('.pplrform,.pplr_atc_form'));

        var sku = '';
        var vtitle = pplr_product.variants[0].title;
        var vname = '';
        var shipping = 'true';
        var taxable = 'true';
        var fulfillment = 'manual';
        var index = 0;
        var pprice = (pplr_product.variants[0].price / 100 + checkprice).toFixed(2);
        var v_oprice = (pplr_product.variants[0].price / 100).toFixed(2);
        for (var i = 0; i < pplr_product.variants.length; i++) {
            if (pplr_product.variants[i]["id"] == pplrvariantid) {
                var pplr_variant = pplr_product.variants[i];
                var pprice = (pplr_variant.price / 100 + checkprice).toFixed(2);
                v_oprice = (pplr_variant.price / 100).toFixed(2);
                var weight = pplr_variant.weight;
                vtitle = pplr_variant.title;
                sku = encodeURIComponent(pplr_variant.sku);
                inv_man = pplr_variant.inventory_management;
                shipping = pplr_variant.requires_shipping;
                taxable = pplr_variant.taxable;
                index = i;

                if(pplr_variant["featured_image"]){
                    var_img = pplr_variant["featured_image"]["src"];
                }

            }
        }

        if(pplr_product_json.length>0) {
            fulfillment = pplr_product_json.variants[index].fulfillment_service;
            weight = pplr_product_json.weight;
        }
        if(pplr_product.variants.length>1){
            vname = pplr_product.options.join(' - ');
        }
        var pv_array = JSON.stringify({"variant_id":parseInt(pplrvariantid),"product_id":parseInt(pplr_product.id)}).replace(/"/g, '&quot;');

        pplrform.find("input[name='id'],select[name='id']").prop("disabled", true);
        pplrform.append('<input class="pplr_ref_class" '+pplr_form_id+'  type="hidden" name="properties[_pplr_ref_variant]" value="'+pv_array+'"  />');

    }


    var sellplan = pplrform.find('[name="selling_plan"]');

    if(createproduct !=='2' && createproduct !=='5'){
      if(sellplan[0]){if(sellplan.val()=='' || sellplan.val()=='null'){sellplan.prop("disabled", true);}}
    }

    var _formdata = new FormData(pplrform[0]);

    var store = Shopify.shop;


    addimagedata(_formdata,pplrform);

    var dpi = _SJ2[27];
    if(_SJ2[27]==0){dpi=300;}
    if(_SJ2[27]==1){dpi=72;}

    var url_to_print = '';
    var _n ='';
    var mcanvas = jQuery('.pplr_print_main');
    for (var ii = 0; ii < mcanvas.length; ii++) {

    create_svg = false;

    var frame = parseInt(jQuery('.pplr_print_main').eq(ii).attr('id').replace('plq_',''));
    var view_id = _PP[_CM + frame].split(',')[92];
    if(view_id){}
    else{
    view_id = _PP[_CM + frame].split(',')[18];
    }
    var cstmfy_save_prev = pplr_view_set[view_id][5];
    var cstmfy_save_back = pplr_view_set[view_id][6];
    var cstmfy_save_size = pplr_view_set[view_id][7];
    var cstmfy_save_type = pplr_view_set[view_id][8];

    if(cstmfy_save_type>2){
    create_svg = true;
    }

    if (createproduct > 3 || create_svg  || cstmfy_save_back>0){
    var _n ='_design_';

    if(jQuery('.pplr_preview_final canvas')[0] ||  Object.keys(pplr_design_p).length > 0){
    if(ii==0){ var jj = '';}else{var jj=ii;}

      if(pplr_is_views){
          var frame = jQuery('.pplr_print_main').eq(ii).attr('id').split('_')[1];
          var field_view_id = _PP[_CM + frame].split(",")[92];
          if(pplr_views[field_view_id][10]>0){
              _SJ[7]= pplr_views[field_view_id][11];
              jj = '';

          }
      }


        var qq = jQuery('.pplr_final');
        var type = 'image/png';

        if(createproduct > 3){
        var _nn = jQuery('.pplr_preview_final canvas').get(0);
        }
        else{
        var _nn = jQuery('.pplr_print_main').eq(ii).find('canvas').get(0);
        }

        var blobt= false;


        if(Object.keys(pplr_design_p).length > 0){

            if(ii==0){
                url_to_print += "&img_to_print[]=" + pplr_design_p[view_id];
            };

            if(pplr_design_p[view_id]){
                var blobObj = img_save_from_canvas(type, changeDPIoFimage(pplr_design_p[view_id],dpi));
                blobt = true;
            }
        }
        else{
            if(!create_svg){
                url_to_print += "&img_to_print[]=" + image_crop(_nn,500,500,false,true).toDataURL(type, 0.9);
                if(cstmfy_save_type >1 || cstmfy_save_size>1){
                    var blobObj = img_save_from_canvas(type, image_crop(_nn,500,500,false,true).toDataURL(type, 0.9));
                    blobt = true;
                }
                else{
                var blobObj = img_save_from_canvas(type, changeDPIoFimage(_nn.toDataURL(type, 1.0),dpi));
                blobt = true;
                }
            }
        }

        if(blobt){

          if(blobObj.size <1){
            alert('Blob Object Error. Please Refresh & Retry');
            return;
          };

        _formdata.append("properties["+decodeHtml(_SJ[7])+jj+"]", blobObj, 'custom_image1.'+type.split('/')[1]);

        if(_SJ2[0]>3 && !pplr_buy_now){

          pplrform.append('<input id="pplr_print_main_'+jj+'" '+pplr_form_id+' class="pplr_file_upload" style="display:none;" type="file"  name="'+"properties["+decodeHtml(_SJ[7])+jj+"]"+'" />');
          var file=new File([blobObj],'custom_image1.'+type.split('/')[1],{type:type,lastModified:new Date().getTime()});
          var array_images=[file]; 
          var input_images=document.querySelector("#pplr_print_main_"+jj);
          input_images.files=new FileListItems(array_images);

        }

        }
    
    }
    }
    }

    if (createproduct == 2 || createproduct ==5){
    var _nn = jQuery('.pplr_preview_final canvas').get(0);

    if (createproduct == 2 && jQuery('.pplr_print_main canvas')[0]){
        _nn = jQuery('.pplr_print_main').eq(0).find('canvas').get(0);
    }
    if(_nn && url_to_print==''){
        if(Object.keys(pplr_design_p).length > 0){
        var firstKey = Object.keys(pplr_design_p)[0];
        url_to_print += "&img_to_print[]=" + pplr_design_p[firstKey];
        }else{
        url_to_print += "&img_to_print[]=" + image_crop(_nn,500,500).toDataURL(type, 1.0);
        }
    }

    }
    var mcanvas = jQuery('.pplr_print_main');

    for (var ii = 0; ii < mcanvas.length; ii++) {

      if(ii==0){ var jj = '';}else{var jj=ii;}

      var frm = parseInt(jQuery('.pplr_print_main').eq(ii).attr('id').split('_')[1]);

      var aa = jQuery('.pplr_print_main').eq(ii);

      var fin = jj ;

    if(pplr_is_views){
        var field_view_id = _PP[_CM + frm].split(",")[92];
        if(field_view_id && pplr_views[field_view_id][10]>0){
            _SJ[7] = pplr_views[field_view_id][11] ? pplr_views[field_view_id][11] : pplr_views[field_view_id][4];
            fin = '';
        }
    }

    create_svg = false;

    var view_id = _PP[_CM + frm].split(',')[92];
    if(view_id){}
    else{
    view_id = _PP[_CM + frm].split(',')[18];
    } 

    var cstmfy_save_prev = pplr_view_set[view_id][5];
    var cstmfy_save_back = pplr_view_set[view_id][6];
    var cstmfy_save_size = pplr_view_set[view_id][7];
    var cstmfy_save_type = pplr_view_set[view_id][8];

    if(cstmfy_save_type>2 && _CP[8]<3){
        create_svg = true;
    }

    if(create_svg){
        var ll = aa.find('svg').get(0);
        var w = jQuery(ll).attr("width");
        var h = jQuery(ll).attr("height");
        var k = 'l';
        if(pplr_view_set[view_id][8]<4 && !window.pplr_svg2pdf){
            if(parseFloat(w)-parseFloat(h)<0){k = 'p';}
            if (window.jspdf){
              window.jsPDF = window.jspdf.jsPDF;
            }
            var pdf = new jsPDF(k, 'pt', [w*72/dpi,h*72/dpi],true);
            svgElementToPdf(ll, pdf, {
            scale: 1*72/dpi,
            removeInvalid: true
            });
            var blobObj = pdf.output('blob');
            _formdata.append("properties[_pdf"+ii+"]", blobObj, '1.pdf');

          if(_SJ2[0]>3 && !pplr_buy_now){
            pplrform.append('<input id="PDF_'+ii+'" class="pplr_file_upload" '+pplr_form_id+' style="display:none;" type="file"  name="'+"properties[_pdf"+ii+"]"+'" />');
            var file=new File([blobObj],'1.pdf',{type:'pdf',lastModified:new Date().getTime()});
            var array_images=[file]; 
            var input_images=document.querySelector("#PDF_"+ii);
            input_images.files=new FileListItems(array_images);
          }


        }
        else{  
        jQuery(ll).attr('width',w/96+'in');
        jQuery(ll).attr('height',h/96+'in');
        var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        var style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
        var fface='';
        for (var y = 0; y < Object.keys(font_face_array).length; ++y) {
            var fontkey = Object.keys(font_face_array)[y];
            if(font_face_export.indexOf(fontkey)>-1){
            fface = fface +"@font-face {font-family: '"+fontkey+"';src: url(data:font/truetype;charset=utf-8;base64,"+font_face_array[fontkey][1]+") format('truetype');font-weight: normal;font-style: normal;}";
            }
        }
        var node = document.createTextNode(fface);
        ll.insertBefore(defs, ll.firstChild);
        defs.appendChild(style);
        style.appendChild(node);
        var pplr_svg = ll.outerHTML;
        var blobObj = new Blob([pplr_svg], {type: 'image/svg+xml'});

        var prop_vp = "properties[_svg ";

        if(window.pplr_svg2pdf){
          prop_vp = "properties[_pdf ";
        }

        _formdata.append(prop_vp+ii+"]", blobObj, '1.svg');

          if(_SJ2[0]>3 && !pplr_buy_now){
            pplrform.append('<input id="SVG_'+ii+'" class="pplr_file_upload" '+pplr_form_id+' style="display:none;" type="file"  name="'+prop_vp+ii+"]"+'" />');
            var file=new File([blobObj],'1.svg',{type:'svg',lastModified:new Date().getTime()});
            var array_images=[file]; 
            var input_images=document.querySelector("#SVG_"+ii);
            input_images.files=new FileListItems(array_images);
          }

        }

    }else{
        var qq = aa.find('canvas').get(0);
        var type = 'image/png';

        if(createproduct > 3 || cstmfy_save_type >0){

            if(cstmfy_save_size>1 && _CP[8] >1 || cstmfy_save_back<1 ){
            _n = '';
            }
            else{
            _n = '_design_';
            }

            var dturl = qq.toDataURL(type, 1.0);
            var s_ = (4 * Math.ceil((dturl.length / 3))*0.562)/1000000;
            if(s_>15)
            {
                type = 'image/jpeg';
                dturl= qq.toDataURL(type, 15/s_);
            }
            if(_CP[8]>2){
                type = 'image/jpeg';
                dturl= qq.toDataURL(type, 0.5);
            }
            if(cstmfy_save_type >1 || cstmfy_save_size >1){
                var blobObj = img_save_from_canvas(type, image_crop(qq,500,500).toDataURL(type, 1.0));
            }
            else{
                var blobObj = img_save_from_canvas(type, changeDPIoFimage(dturl,dpi));
            }

            if(_CP[8]<3){
                _formdata.append("properties["+_n+decodeHtml(_SJ[7])+fin+"]", blobObj, 'custom_image2.'+type.split('/')[1]);

                if(_SJ2[0]>3 && !pplr_buy_now){
                  pplrform.append('<input id="mpplr_print_main_'+fin+'" '+pplr_form_id+' class="pplr_file_upload" style="display:none;" type="file"  name="'+"properties["+_n+decodeHtml(_SJ[7])+fin+"]"+'" />');
                  var file=new File([blobObj],'custom_image1.'+type.split('/')[1],{type:type,lastModified:new Date().getTime()});
                  var array_images=[file]; 
                  var input_images=document.querySelector("#mpplr_print_main_"+fin);
                  input_images.files=new FileListItems(array_images);
                }

            }
            }

            if (url_to_print == ''){
                url_to_print += "&img_to_print[]=" + image_crop(qq,500,500).toDataURL(type, 1.0);
            }

        if(cstmfy_save_type == 2){
            var ll = qq;
                var w = ll.width;
                var h = ll.height;
                var k = 'l';
                if(parseFloat(w)-parseFloat(h)<0){k = 'p';}
                if (window.jspdf){
                  window.jsPDF = window.jspdf.jsPDF
                }
                var pdf = new jsPDF(k, 'pt', [w*72/dpi,h*72/dpi],true);
                pdf.addImage(ll.toDataURL(type, 1.0), type.split('/')[1], 0, 0,w*72/dpi,h*72/dpi,'','FAST');
                var blob2 = pdf.output('blob');
                _formdata.append("properties[_pdf"+jj+"]", blob2, '1.pdf');


              if(_SJ2[0]>3 && !pplr_buy_now){
                pplrform.append('<input id="PDF_'+ii+'" class="pplr_file_upload" '+pplr_form_id+' style="display:none;" type="file"  name="'+"properties[_pdf "+ii+"]"+'" />');
                var file=new File([blobObj],'1.pdf',{type:'pdf',lastModified:new Date().getTime()});
                var array_images=[file]; 
                var input_images=document.querySelector("#PDF_"+ii);
                input_images.files=new FileListItems(array_images);
              }

            }
        }
    }

    if(_SJ2[26] <1 || _SJ2[26] >1){
    var _ss = jQuery('.crop_img_url');
    var addimage2 = [];
    var f_size = window.pplr_shopify_file_size;
    for (var ii = 0; ii < _ss.length; ii++) {
        var kk =  _ss.eq(ii).attr("data_name");     
        if(_ss.eq(ii).attr("src").indexOf("data:image")!== -1 && addimage2.indexOf(kk)<0){
        addimage2.push(kk);
        var type =  _ss.eq(ii).data('type');
        if(_SJ2[26] <1){
            kk = "_"+kk+"_crop";
        }
        var s_ = (4 * Math.ceil((_ss.eq(ii).attr("src").length / 3))*0.5624896334383812)/1000000;

        var w = _ss.eq(ii).get(0).naturalWidth;
        var h = _ss.eq(ii).get(0).naturalHeight;

        if(s_>f_size)
        {
            var blobObj = img_save_from_canvas(type, image_crop(_ss.eq(ii).get(0),w*Math.sqrt(f_size/s_),h*Math.sqrt(f_size/s_)).toDataURL(type));

        }
        else{
        var blobObj = img_save_from_canvas(type, _ss.eq(ii).attr("src"));
        }
        _formdata.append("properties["+kk+"]", blobObj, 'custom_image3.'+type.split('/')[1].replace('+xml',''));

        if(_SJ2[0]>3 && !pplr_buy_now){
            pplrform.append('<input id="Crop_Url_'+ii+'" '+pplr_form_id+' class="pplr_file_upload" style="display:none;" type="file"  name="'+"properties["+kk+"]"+'" />');
            var file=new File([blobObj],'custom_image3.'+type.split('/')[1],{type:type,lastModified:new Date().getTime()});
            var array_images=[file]; 
            var input_images=document.querySelector("#Crop_Url_"+ii);
            input_images.files=new FileListItems(array_images);
          }

        }
    }
    }


    if(url_to_print=='' && jQuery('.pplr_print_main').length>0 && !create_svg){
    var pplr_final = setTimeout(function() {
    pplr_final_print();
    console.log('Not Found');
    return;
    },500);
    }

    if(pplr_final_check){
    return;
    }


    pplr_final_check= true;
     if(pplr_is_views){
      var field_view_id = _PP[_CM + 1].split(",")[92];
      if(pplr_views[field_view_id][10]>0){
          _SJ[7]= pplr_views[field_view_id][11];
      }
     }
    _formdata.append("properties[_pplr_preview]", decodeHtml(_SJ[7]));

     if(_SJ2[0]>3 && !pplr_buy_now){
      pplrform.append('<input  type="hidden" '+pplr_form_id+' name="properties[_pplr_preview]" value="'+decodeHtml(_SJ[7])+'"  />');
     }


    pplr_formdata = _formdata;

    if(typeof pplr_custom_ajaxcart_before !=='undefined'){
    pplr_custom_ajaxcart_before(checkprice,pplrform,false,pplr_formdata);
    return;
    }
    if (createproduct > 2 && createproduct <5) {
    if (checkprice !== 0 || jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])')[0]) {
        pplr_add_price(checkprice, pplrform,false,_formdata);
    } else {

      if(_SJ2[0]>3 && !pplr_buy_now){

        saveSyncThemeImages();
        return;

      }
        pplr_ajax_cart(_formdata,pplrform);
    }
    return;
    }

    var url_to_save =  "save_graphql10.php";

    if(pplr_test_mode){
      url_to_save = "save_graphql10.php";
    }
    if (typeof __st != 'undefined') {
    var prd_id = __st.rid;
    } else {
    var prd_id = pplr_product.id;
    }

    if(url_to_print=='' ){
    if(var_img.indexOf('https:') < 1)
    {
    var_img = 'https:'+var_img;
    }
    url_to_print += "&imgsrc=" + encodeURIComponent(var_img);
    }

    var jQuerydate_now = Date.now();
    if(!jQuery.isNumeric(jQuerydate_now)){
    jQuerydate_now = Math.floor(Math.random()* 1000000000);
    }
    var img_url_each = "";
    if (window.navigator.standalone) jQuery.ajaxSetup({
    isLocal: true
    });
    if(diffcur){
    pprice = pprice/Shopify.currency.rate;
    v_oprice = v_oprice/Shopify.currency.rate;
    }

    var tags = pplr_product.tags.toString();
    var v_oprice_x = '';

    if(window.pplr_currency_adjust){
      v_oprice_x = "&v_oprice="+v_oprice;
    }

    let progressInterval;
    const runProgressInterval = () => {
      let loaded = 0;
      let total = 25
      progressInterval = setInterval(() => {
        p_bar({loaded, total, lengthComputable: true},4,25);
        loaded++
        if(loaded > 25){
          clearInterval(progressInterval)
        }
      }, 120);
    }


    jQuery.ajax({
    xhr: function() {
    var xhr = new window.XMLHttpRequest();
    xhr.upload.addEventListener("progress", function(evt) {

      if(evt?.loaded / evt.total == 1){
        runProgressInterval()
      }
      p_bar(evt,4,0);
    }, false);
    return xhr;
    },
    type: "POST",
    url: app_link_pplr+"server/php/" + url_to_save,
    crossDomain: true,
    data: "pd_id=" + prd_id + "&id_img=" + jQuerydate_now +  url_to_print + "&title=" + encodeURIComponent(ptitle) + "&price=" + pprice + "&weight=" + weight + "&shop=" + store + img_url_each+ "&pdf=" + _SJ[34]+"&handle="+pplr_product.handle+"&sku="+sku+"&timestp="+_SJ2[29]+"&vendor="+pplr_product.vendor+"&vtitle="+vtitle+"&vname="+vname+"&vd_id="+pplrvariantid+"&inv_man="+inv_man+"&taxable="+taxable+"&shipping="+shipping+"&fulfillment="+fulfillment+"&tags="+tags+"&voption="+encodeURIComponent(pplr_product?.options?.join(" | "))+v_oprice_x,
    success: function(data) {
    clearInterval(progressInterval);

    console.log(data);
    if (data == "error") {
        alert("Product / uploaded  Image is corrupted");
    }
    var object = JSON.parse(data);

    if(object["variants"].length>1){
    var variant = object["variants"][1]["id"];
    }
    else{
      var variant = object["variants"][0]["id"];
    }


    var dvr = jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])');
    var varianttoadd =[];
    if(dvr.length>0){
    var qtyvar = [];
    dvr.each(function(i) {
    var manyvar = jQuery(this).data('variant').split("||");
        for(var i = 0; i < manyvar.length; i++) {
        var vvr = manyvar[i].split(',');
        var kkr = parseInt(vvr[0]);
        var sku = '';
        if(vvr.length>3){
            sku = vvr[3];
        }
        if(kkr in qtyvar){
            qtyvar[kkr] = [1+qtyvar[kkr][0],sku];
        }
        else{
        qtyvar[kkr] = [1,sku];
        }
        }
    })

    for (var y = 0; y < Object.keys(qtyvar).length; ++y) {
        var vnt  = Object.keys(qtyvar)[y];
        varianttoadd.push({ "id": vnt , "quantity": qtyvar[vnt][0] , "sku": qtyvar[vnt][1] });
    }
        _formdata.append('properties[_pplr_inv_variant]', JSON.stringify(varianttoadd));
    }

    _formdata.append('id', variant);

    if(_SJ2[0]>3 && !pplr_buy_now){
        if(dvr.length>0){
          pplrform.append('<input class="pplr_ref_class" '+pplr_form_id+'  type="hidden" name="properties[_pplr_inv_variant]" value="'+JSON.stringify(varianttoadd).replace(/"/g, '&quot;')+'"  />');
        }
        pplrform.append('<input class="pplr_ref_class" type="hidden" name="id" value="'+variant+'" />');
        saveSyncThemeImages();
        return;
      }

      setTimeout(function() {
        pplr_ajax_cart(_formdata,pplrform);
      },window.pplr_atc_delay || 0);

    }
    ,
    error : function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        var err = eval(jqXHR.responseText);
            alert('Add to cart error'+errorThrown);
        }
    });

}

var Pplr_isPatched = false;

var pplr_sync_with_theme = function(){
    if(window.pplr_cart_item_config && !Pplr_isPatched){

      Pplr_isPatched = true;

      (function() {
        const originalXhr = window.XMLHttpRequest;
        const originalOpen = originalXhr.prototype.open;
        const originalSend = originalXhr.prototype.send;

        function customXhr() {
            const xhr = new originalXhr();
            let targetUrl = null;

            xhr.open = function(method, url, async, user, password) {
                targetUrl = url;
                return originalOpen.apply(this, arguments);
            };
            xhr.send = function(body) {
                this.addEventListener('load', function() {
                    if (targetUrl.includes('cart/add') || targetUrl.includes('cart/change') || targetUrl.includes('cart/update')) {
                      setTimeout(function() {
                        console.log('Cart updated');
                        window.pplr_cart_item_config(true);return;
                      },1000);
                    }
                });
                return originalSend.apply(this, arguments);
            };

            return xhr;
        }

        window.XMLHttpRequest = customXhr;

        const originalFetch = window.fetch;

        window.fetch = async function(...args) {
            const [resource, config] = args;
            const response = await originalFetch(...args);

            // Clone the response so it can be read and logged without affecting the original response
            const responseClone = response.clone();

            const responseText = await responseClone.text();

            if (resource.includes('cart/add') || resource.includes('cart/change') || resource.includes('cart/update')) {
              setTimeout(function() {
                console.log('Cart updated');
                  window.pplr_cart_item_config(true);return;
              },1000);

            }
            return response;
        };
    })();
  }
}



function shake(div){
var interval=100,distance=10,times=10;
jQuery(div).css('position','relative');
for(var iter=0;iter<(times+1);iter++){
    jQuery(div).animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
}
jQuery(div).animate({ left: 0},interval);
}

function check_req_tab(a,b){
  a.parents(RP).addClass(b).removeClass('stopdance');
    var n = a.parents('.pplr-wrapper');
    jQuery('.'+b).removeClass('pplr-hide');
if(a.parents('.pplr_no_preview')[0]){
  a.parents('.pplr_no_preview').show();
}
    jQuery('.pplr_red_wrapper .pplr-arrow').removeClass('pplr-arrow-right').addClass('pplr-arrow-bottom');
  if(a.parents('.pplr_tab')[0]){
       var k = a.parents('.pplr_tab').attr('data-tab');
      jQuery('.pplr_tab_index[data-tab="'+k +'"]').addClass('pplr_active').siblings().removeClass('pplr_active');
      jQuery('#pplr_tab_'+k).addClass('pplr_active').siblings().removeClass('pplr_active');
      var frame = jQuery('#pplr_tab_'+k).find(RP).first().attr("data-main");
      jQuery('.pplr_active').animate({ scrollTop:n.offset().top});
      pplrcomplete();
      LoadPplrWithFont(frame);
    }
    var safaritimeout ;
    function checksafari(n,a) {
      var c = a.parents(_P_P);
          var wh = 200;
            if(window.innerHeight > window.innerWidth && jQuery('.pplrabs')[0]){
              wh = jQuery('.pplrabs').height()+100;
            }
            window.scrollTo(0, n.offset().top-wh);
    }

    var s = jQuery(window);
    var d  = jQuery('body,html');
    if(pisSafari()){
      d  = jQuery('body,document');
    }
    var pplrabs = 0;

    if (_CP[10] <3) {
      if(window.innerHeight > window.innerWidth && jQuery('.pplrabs')[0]){
        pplrabs = jQuery('.pplrabs').height();
      }

      if(_SJ[0] == 3){
        var c = jQuery(_P_P);
        var l = c.attr('id');
        if(s.scrollTop()+pplrabs>c.offset().top){
            d.animate({ scrollTop:(c.offset().top-80-pplrabs)});
            if(p_isMobile) {         
              window.location.hash = '#'+l;
            }
          }
      }
      if(a.parents('.pplr_tab')[0]){
        var c = a.parents('.pplr_tab');
        if(d.scrollTop()+pplrabs>c.offset().top){
          if(a.parents('.pplr_tab').height()>s.height()){
            d.animate({ scrollTop:n.offset().top-200-pplrabs});
          }
          else{
            d.animate({ scrollTop:c.offset().top-200-pplrabs});
          }
        }

        if(pisSafari()) {
              checksafari(n,a);
        }
      }


      if(!a.parents('.pplr_tab')[0]){
          if(s.scrollTop()+s.height()<n.offset().top+n.height()/2+pplrabs){
            d.animate({ scrollTop:n.offset().top-200-pplrabs});
          }
        if(pisSafari()) {
              checksafari(n,a);
        }

      }
    }
    else{
      var c = jQuery(".pplr-p-right");
    }
    if(typeof c !=='undefined'){
      var a = -c.offset().top+n.offset().top;
      c.animate({ scrollTop:c.scrollTop()+a});
    }
    else{
      if(s.scrollTop()+pplrabs>n.offset().top){
          d.animate({ scrollTop:n.offset().top-120});
          if(p_isMobile || pisSafari()) {
              checksafari(n,a);
          }
        }
    }

   shake('.'+b);

}

function pplr_check_require(pplrtis,e,k){

if(p_d_o){
    jQuery('.pplr-wrapper input,.pplr-wrapper select').prop("disabled", true);
}
var b = 'pplr_red_wrapper';
var check = true ;

pplrtis.find("input[required]:not([disabled]),select[required]:not([disabled])").each(function() {
  if (jQuery(this).val() === "" && !jQuery(this).is(':visible') && !jQuery(this).parents('.pplr-wrapper')[0]) {
     jQuery(this).attr('type', 'text').prop("disabled", true);
  }
})


jQuery(_p_R).each(function() {
  if (jQuery.trim(jQuery(this).val()) === "" && check) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log('Required field must be filled '+jQuery(this).data('frame'));
    if(!k){check_req_tab(jQuery(this),b);}
    check =false;
    return false;
  }
});

jQuery(".pplr-wrapper input[type='checkbox']:not([disabled])").each(function() {
  if (!jQuery(this).is(":checked") && check && jQuery(this).hasClass('cstmfy_c_required')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if(!k){check_req_tab(jQuery(this),b);}
      console.log('Required field must be filled '+jQuery(this).data('frame'));
      check =false;
    return false;
  }

}); 

jQuery(".pplr_imgg:not([disabled]),.pplr_select:not([disabled]),.pplrjscolor:not([disabled])").each(function() {
  if (jQuery(this).val() === "" && jQuery(this).hasClass('cstmfy_c_required') && check) {
     e.preventDefault();
     e.stopImmediatePropagation();
    if(!k){check_req_tab(jQuery(this),b);}
    console.log('Required field must be filled '+jQuery(this).data('frame'));
    check =false;
    return false;
  }

})

if(check){
  jQuery('.pplr-wrapper [name^="properties["]').each(function(){
    if(!jQuery(this).val() && !jQuery(this).is(":disabled")){
      jQuery(this).prop("disabled", true).addClass("pplr-empty-value-disabled");
    }
  });
}

return check;

}

function pplr_update_case(t){
if(t){
jQuery(".pplr_text").each(function() {
  var text = jQuery(this).val();
  var b = jQuery(this);

  text = text.replace(/(<([^>]+)>)/ig, "");

  b.val(text);
  if (b.hasClass('toUpperCase')) {
    b.val(text.toUpperCase()); 
  }
  if (b.hasClass('toLowerCase')) {
    b.val(text.toLowerCase());
  } 
  var frame = jQuery(this).data('frame');
  var a = jQuery(".jscolor[data-frame='" + frame + "'],.pplr_font[data-frame='" + frame + "'],.pplrjscolor[data-frame='" + frame + "'],.pplr-size-select[data-frame='" + frame + "'],.pplr-align-select[data-frame='" + frame + "']");
    a.each(function() {
      var hd = jQuery(this);
      var name = hd.attr('name');
      var krb = jQuery('.pplr_aux[name="'+name+'"]');
          var empty = true;
            krb.each(function() {
              var frame = jQuery(this).attr('data-frame');
              var text = jQuery('.pplr_text[data-frame=\"' + frame + '"]');
              text.each(function() {
                if(jQuery.trim(jQuery(this).val()) !== '') {
                  empty = false;
                }

              })

            })
          if(empty){
            krb.prop('disabled', true);
          }
    })

});
jQuery("input.cstmfy_static,select.cstmfy_static").each(function() {
   var name = jQuery(this).attr('name').replace("properties[", "properties[_");
   jQuery(this).attr('name',name);
})

jQuery(".pplr_text[d-placeholder]:not(.cstmfy_c_required)").each(function() {
   if(jQuery(this).val() == jQuery(this).attr('d-placeholder')){
     if(_SJ2[30]==1){jQuery(this).val('');}
   }
})


jQuery("input.pplr_select").each(function() {
  var regex = /(<([^>]+)>)/ig;
  jQuery(this).val(decodeHtml(jQuery(this).val()).replace(regex, ""));
})
}
}

function n_ad_cart(add_to_cart){

document.addEventListener('click', function(e) {
  var t = jQuery(e.target);
  if (t.hasClass('p_a_t_c') || t.parents('.p_a_t_c:not([disabled])')[0] || t.parents('.shopify-payment-button__button,.shopify-payment-button')[0] || t.hasClass('shopify-payment-button__button')|| t.hasClass('p_a_t_c_o') || t.parents('.p_a_t_c_o:not([disabled])')[0]){
  if (!t.hasClass('bold_clone') && !t.hasClass('bold_hidden')){
     var form = t.closest('form');

     if(t.hasClass('p_a_t_c_o') || t.parents('.p_a_t_c_o:not([disabled])')[0]){
        form = jQuery(".pplr_atc_form");
      }
      if(jQuery('.p_a_t_c').hasClass('pplr_adding')){
        pplr_sync_with_theme();
        jQuery('.p_a_t_c').removeClass('pplr_adding');
        return;
      }


      if(t.prop("tagName")=='FORM' || t.hasClass('gf_button-soldout')){return;}
      if(form[0] && jQuery(".pplr_monogram,.pplr_select,.pplr-wrapper").length>0 ){ 
        if(t.parents('.shopify-payment-button__button,.shopify-payment-button')[0] || t.hasClass('shopify-payment-button__button')){
          pplr_buy_now = true;
        }
        else{
          pplr_buy_now = false;
        }
        var _I_D = form.attr('id');
        var pplr_identifier = jQuery('.product-personalizer input[form],.product-personalizer textarea[form],.product-personalizer select[form]');
        if (typeof _I_D !== 'undefined' && _I_D !== false && _I_D !=='') { 
          pplr_form_id = ' form="'+_I_D+'" ';
          if(pplr_identifier[0]){
            if(pplr_identifier.first().attr('form') !==_I_D){
              pplr_identifier.attr('form',_I_D);
            }
          }
        }

        var n = pplr_check_require(form,e);
        pplr_update_case(n);
        create_pplr_product(e,form);
        pplr_addto_cart(e,form,n);
        if(pplr_buy_now){
          var ar = '[data-testid="ShopifyPay-button"]';
          if(t.find(ar).length>0 || t.is(ar) || t.parents(ar)[0]){
              if (jQuery(_P_P).css('display') == 'none' && _CP[10]<3 || jQuery('.pplr_no_preview[data-main]').length == parseInt(_CP[1]) && _CP[10]<3) {
                   jQuery('.pplr_select[disabled],.pplr_monogram[disabled],.pplr_font[disabled],.pplrjscolor[disabled]').remove();
              }
          }
        }
        
      }
    }
}
}, true);

if(_SJ2[0]<4){
    jQuery(document).on("click", add_to_cart , function(e) {
    var t = jQuery(this);
     var form = t.closest('form');
      if(t.prop("tagName")=='FORM' || t.hasClass('gf_button-soldout')){return;}
      if(form[0] && jQuery(".pplr_monogram,.pplr_select,.pplr-wrapper").length>0 ){ 
        var t = pplr_check_require(form,e);
        pplr_update_case(t);
        create_pplr_product(e,form);
        pplr_addto_cart(e,form,t);
      }
    
    });
    
    jQuery.fn.bindFirst = function(name, fn) {
      var elem, handlers, i, _len;
      this.bind(name, fn);
      for (i = 0, _len = this.length; i < _len; i++) {
        elem = this[i];
        handlers = jQuery._data(elem).events[name.split('.')[0]];
        handlers.unshift(handlers.pop());
      }
    };
    
    jQuery(add_to_cart).bindFirst("click", function(e) {
      var t = jQuery(this);
      var form = t.closest('form');
          if(t.prop("tagName")=='FORM' || t.hasClass('gf_button-soldout')){return;}
          if(form[0] && jQuery(".pplr_monogram,.pplr_select,.pplr-wrapper").length>0){ 
            var t = pplr_check_require(form,e);
            pplr_update_case(t);
            create_pplr_product(e,form);
            pplr_addto_cart(e,form,t);
          }
    });
  }
}



function create_pplr_product(event,tis){ 


    if(create_pplr){
        return;
    }

    if (createproduct <2 || (!pplr_preview_save || _CP[8]>2) && createproduct !=='2' && createproduct !=='5') {
        return false;
    }

    jQuery('.pplrform').removeClass('pplrform'); 

    if(p_d_o){
        return;
    }

    if(_CP[10]>2){
        if(!jQuery('.pplr-modal-box')[0]){
            return;
        }
    }

    if (jQuery(_P_P).css('display') == 'none' && _CP[10]<3 || jQuery('.pplr_no_preview[data-main]').length == parseInt(_CP[1]) && _CP[10]<3) {
        return;
    }

    if(tis[0]){
        tis.addClass('pplrform');
    }else{
        if(jQuery('.pplr_atc_form')[0]){
            jQuery('.pplr_atc_form').addClass('pplrform');
        }else{
            jQuery(_P_P).closest("form").addClass('pplrform');
        }
    }



    var notempty = pplr_check_require(tis,event,true);

    if (notempty) {

        p_r = 1;
        create_pplr = true;

        var view_id = _PP[_CM + 1].split(',')[92];
        if(view_id){}
        else{
            view_id = _PP[_CM + 1].split(',')[18];
        }

        if(_CP[8]<3  && (_SJ[34]>2 || pplr_view_set[view_id][8]>2)){
            create_svg=true;
        }
        resizepplr = '';
        clearTimeout(checktimout);

        pplr_delay = 0;


        jQuery('.pplrform').find(".fileupload").each(function() {
            if(!jQuery(this).val()){
                jQuery(this).attr('disabled', true);
            }
        })

        event.preventDefault();
        event.stopImmediatePropagation();
        if(_SJ[29]==1){
            var sps = jQuery('body');
        }
        else{
            var sps = jQuery('.pplr_atc_form');
            sps.addClass("pplr-modal-open");
        }

        var checkpplr = first_prod_img();
        var maxWwid = sps.width();
        var maxhd = sps.outerHeight();
        if(_SJ2[0]>3){
          pplr_sync_with_theme();
          jQuery('.p_a_t_c').addClass('pplr_adding');

          if(!jQuery('#p_loading-spinner')[0]){
              jQuery('.p_a_t_c').append('<svg id="p_loading-spinner"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20"><g fill="none"><path id="track" fill="#C6CCD2" d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z"></path><path id="section" fill="#3F4850" d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z"></path></g></svg>');
            }

        }else{
            if(_SJ[29]<3 && window.navigator.userAgent.indexOf("Edge") < 0){
                sps.append('<div class="poverlay-bg addtocartbg"><div class="pplr_cont" data-pct="0"><svg class="pplr_svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle><circle class="pplr_bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" style="stroke-dashoffset: -565.487px;"></circle></svg></div><span class="progress-title">' + _SJ[4] + '</span></div>');
            }
            else{
                jQuery('.pplr_atc_form').append('<div class="addtocartw"></div>');
                jQuery('.pplr_atc_form').find('input[type="submit"], button[type="submit"]').text(decodeHtml(decode_utf8(_SJ[6]))).val(decodeHtml(decode_utf8(_SJ[6]))).addClass('npbs');
            }
    
            jQuery(".poverlay-bg").width(maxWwid);
            if(maxhd>0){
                jQuery(".poverlay-bg").height(maxhd);
            }
            if(_SJ[29]==1){
                jQuery(".poverlay-bg").css("position", 'fixed'); 
            }
            jQuery(".poverlay-bg").fadeIn();
        }

        if (_CP[0] > 0 ) {
            var pplrvariantid = pplr_variant_id(jQuery('.pplrform'));
            if(pplrvariantid && _CP[10] <3){
                for (var i = 0; i < pplr_product.variants.length; i++) {
                    if (pplr_product.variants[i].id == pplrvariantid) {
                        if(pplr_product.variants[i]["featured_image"]){
                            pplrlarge_all = pplr_product.variants[i]["featured_image"]["src"].replace(queryreplacestring, pplrreplace);
                        }
                    }
                }
            }
            if(pplrlarge_all ==''){
                pplrlarge_all = checkpplr.attr("src").replace(queryreplacestring, pplrreplace);
            }
        }

        pplrlarge = '';
        clearTimeout(pplr_check_fl);

        jQuery("body").append("<div id='pplr' style='position:absolute;left:0%;top:0px;;z-index: -999;opacity:0;'></div>");

        jQuery(".pplr_preview_wrapper").removeClass('pplr_preview_wrapper').addClass('pplr_preview_final');
        jQuery(".pplr").removeClass("pplr").addClass('pplr_final');

        if(_CP[8]>2){
            var imgObj3 = new Image();
            imgObj3.crossOrigin = 'Anonymous';
            imgObj3.onload = function() {
                var canheight = imgObj3.naturalHeight;
                var canwidth = imgObj3.naturalWidth; 
                mainCanvas = document.createElement('canvas');
                mainCanvas.id = 'pplr_canvas';
                mainCanvas.width = canwidth;
                mainCanvas.height = canheight;
                mainCanvas.style.width = canwidth;
                mainCanvas.style.height = canheight;
                var ctxRef = mainCanvas.getContext('2d');
                ctxRef.drawImage(imgObj3, 0, 0, canwidth, canheight, 0, 0, imgObj3.width, imgObj3.height); 
                jQuery("#pplr").append("<div id='plq_1'><div class='pplr_preview_wrapper'></div></div>");
                jQuery("#plq_1").addClass('pplr');
                jQuery("#plq_1").addClass('pplr_print_main');
                jQuery('.pplr_preview_wrapper').html(mainCanvas);
                pplr_final_print();
            }
            imgObj3.src = 'https:'+(pplr_product.featured_image).replace(/.([^.]*)$/,"_400x400."+'$1');
            return false;
        }
        loadpplrtrns(1, pplrlarge);
        return false;
    }

}


function loadpplrtrns(k, ss) {
    pplrlarge = ss;

    if (k < parseInt(_CP[1])+1) {

        var save_image = true;

        var new_view = false;

        var view_id = _PP[_CM + k].split(',')[92];
        if(view_id){
            if(pplr_view_array.indexOf(view_id)<0){
              new_view = true;
            }
        }
        else{
            view_id = _PP[_CM + k].split(',')[18];
        }

        if(pplr_view_set[view_id][5]==0){
            save_image = false;
        }

        var pplrlarge_now = pplr_field_img(k);
        
         if (((pplrlarge_now !== pplrlarge  && pplr_tolal_image.indexOf(_PP[_CM + k].split(',')[18])<0) && pplrlarge_now.indexOf('data:image') == -1 ||  new_view) && jQuery('.pplr_no_preview[data-main=\"' + k + '"]').length<1 && _PP[_CM + k].split(',')[39] <3 && _PP[_CM + k].split(',')[13] <6 && save_image) {


            if(_PP[_CM + k].split(',')[92]){
                  pplr_view_array.push(view_id) ;
            }

            jQuery(".pplr").removeClass("pplr");
            jQuery(".pplr_preview_wrapper").removeClass("pplr_preview_wrapper");

            // pplrlarge = _PP[_CM + k].split(',')[18];

            // newly added
            pplrlarge = pplr_field_img(k);
            // newly added

            pplr_tolal_image.push(pplrlarge) ;
            var pplrlarge_img = pplr_field_img(k);

            if (_CP[0] > 0) {
                pplrlarge = pplrlarge_all;
                var pplrlarge_img = pplrlarge_all;
            } 

            if(pplrlarge.indexOf('/products/') == -1 && pplrlarge.indexOf('cdn-zeptoapps.com') == -1 && pplrlarge.indexOf('/files/') == -1 && pplrlarge.indexOf('data:image') == -1){
                pplrlarge_img =app_link_pplr+resizepplr+pplrlarge+pplr_no_day;
            }

            jQuery("#pplr").append("<div id='plq_" + k + "'><img alt src='" + pplrlarge_img + "' /></div>");
            jQuery("#plq_" + k).addClass('pplr');
            jQuery("#plq_" + k).addClass('pplr_print_main');
            var imgObj2 = new Image();
            imgObj2.onload = function() {
                clearTimeout(checktimout);
                checkpplrClass(k, jQuery("#plq_" + k), false);
            }
            imgObj2.src = pplrlarge_img;
        }
        else{
            var kkr =k+1;
            loadpplrtrns(kkr, pplrlarge);
        }

    } else {
        setTimeout(function() {
            pplr_final_print();
        },200);
    }
}


function pplr_addto_cart(e,tis,t){
var data_var = jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])');
var pplrtis = jQuery(tis);
var p_add = window.PPLR_CAlCULATE_PRICE();

var notempty = pplr_check_require(tis,e,true);
var t = jQuery(e.target);

if((_SJ2[0]>0 || p_add !== 0 || data_var[0] || (jQuery('[data-pf-type="Zepto"]')[0]  || t.hasClass('shopify-payment-button__button') && _CP[10]<3)) && (createproduct <2 || createproduct !=='2' && createproduct !=='5' && (!pplr_preview_save || _CP[8]>2))){

    if (notempty) {
          if(e){
            e.preventDefault();
            e.stopImmediatePropagation();
          }
          if(p_add !== 0 || data_var[0]){
            jQuery('.pplr_check_order').remove();
          }

          var formdata = new FormData(jQuery(tis)[0]);
          var pplrform = jQuery(".pplr_atc_form");
          addimagedata(formdata, pplrform);
          jQuery('.pplr_atc_form').append('<div class="addtocartw"></div>');

            if(typeof pplr_custom_ajaxcart_before !=='undefined'){
              var checkprice = window.PPLR_CAlCULATE_PRICE();
              pplr_custom_ajaxcart_before(checkprice,jQuery('.pplr_atc_form'),false,formdata);
              return;
            }
          
           if (p_add !== 0 || data_var[0]) {
                pplr_add_price(p_add, pplrtis,e,formdata);
              }else{

              if(_SJ2[0]>3 && !pplr_buy_now){
                saveSyncThemeImages();
                return;
              }
          
             pplr_ajax_cart(formdata,tis);  
           }
       return; 
    }
}
if (notempty) {
if(_SJ2[31]<1) {
    g_f_tract();
}
}
}

function pplr_hide_duplicate(){
  
  if(pplr_has_duplicate?.field){
    var k = '.pplr-wrapper:not(.pplr_no_preview) input[name=\"';
    var l = '"]:visible.pplr_monogram:not(.cstmfy_static):not(.pplr_hide_duplicate)';
    var m = '.pplr-wrapper:not(.pplr_no_preview) textarea[name=\"';
    var d = 'pplr_hide_duplicate';
    $PP_EL('.pplr-wrapper:not(.pplr_no_preview) .pplr_monogram:not(.cstmfy_static)').each(function() {
        
        var a = jQuery(this).attr('name');
        var f = jQuery(this).attr('data-frame');
        if (pplr_values[f][pplr_last_idx]?.hidden) {
          return;
        }
        var b = $PP_EL(k + a + l);
        var c = $PP_EL(m + a + l);
  
        if (b.length > 1) {  
          b.not(":eq(0)").prop('disabled', true).addClass(d).parents(RP).hide(0).addClass('p_h_d_p');
        }
        if (c.length > 1) {
          c.not(":eq(0)").prop('disabled', true).addClass(d).parents(RP).hide(0).addClass('p_h_d_p');
        }
        
        var b = $PP_EL(k + a + l);
        var c = $PP_EL(m + a + l);
        
        if (b.length + c.length > 1) {
          b.prop('disabled', true).addClass(d).parents(RP).hide(0).addClass('p_h_d_p');
        }
    });
  } 

  if(pplr_has_checkbox){
    $PP_EL($PP_EL('.pplr_check').get().reverse()).each(function() {  
      $PP_EL('input[name=\"' + jQuery(this).attr('name') + '"]:first').parent().after(jQuery(this).parent());
    });
  }

  // var p_c_b = ['.pplrjscolor', '.pplr_imgg', '.pplr_font'];
  var p_c_b = [];
  if(pplr_has_duplicate.pplrjscolor){
    p_c_b.push('.pplrjscolor');
  }
  if(pplr_has_duplicate.img){
    p_c_b.push('.pplr_imgg');
  }
  if(pplr_has_duplicate.font){
    p_c_b.push('.pplr_font');
  }

  for (var index = 0, len = p_c_b.length; index < len; ++index) {
    $PP_EL(p_c_b[index]).each(function() {
      var a = jQuery(this).attr('name');
      var b = jQuery(this).attr('data-frame');
      if (pplr_values[b][pplr_last_idx]?.hidden) {
        return;
      }

      if ($PP_EL('.pplr-wrapper:visible:not(.p_h_d_p):not(.cstmfy_static):not(.pplr_no_preview) input[name=\"' + a + '"]:not(.cstmfy_static)').length > 1) {
        if ($PP_EL('input[data-frame=\"' + b + '"].pplr_check').length < 1) {
          if(jQuery(this).parent().hasClass('pplr-color-select') && jQuery(this).siblings('.pplrcolorimage')[0]){
            jQuery(this).prev('.pplrlabel').hide(0);
            jQuery(this).next('.pplrgcolor,.dropdowncolor').hide(0);
            jQuery(this).parent().addClass('p_h_d_p');
            if(jQuery(this).siblings('.pplrcolorimage').children().length < 1){
              jQuery(this).parent().hide()
            }
          }
          else{
            if(!jQuery(this).parents('.pplr_tab:not(.pplr_active)')[0]){
            var y = $PP_EL('input[name=\"' + a + '"]:not([disabled]):not(.cstmfy_static):last').data('frame');
            var z = jQuery(this).data('frame');
            if(y !== z){
              jQuery(this).parent().hide(0).addClass('p_h_d_p');
              jQuery(this).prop('disabled', true);
              //jQuery('input[name=\"' + a + '"]:not([disabled]):not(.cstmfy_static):last').parent().before(jQuery(this).parent());
            }
            else{
              jQuery(this).parent().addClass('p_s_d_p');
            }
              }
              else{
                jQuery(this).parent().addClass('p_s_d_p');
              }

          }
        }

      }
    });
  }

  if(pplr_has_duplicate.jscolor){
    var p_c_c = ['.jscolor'];
    for (var index = 0, len = p_c_c.length; index < len; ++index) {
      $PP_EL(p_c_c[index]).each(function() {
        var a = jQuery(this).attr('name');
        var b = jQuery(this).attr('data-frame');

        if (pplr_values[b][pplr_last_idx]?.hidden) {
          return;
        }

        var dab = '.pplr-wrapper:visible:not(.p_h_d_p):not(.cstmfy_static):not(.pplr_no_preview) '
        if ($PP_EL(dab+'select[name=\"' + a + '"]:visible:not(.cstmfy_static)').length > 1) {
          if ($PP_EL('input[data-frame=\"' + b + '"].pplr_check').length < 1) {
            $PP_EL('select[name=\"' + a + '"]:not(.cstmfy_static)').not(":last").prop('disabled', true).addClass('pplr_hide_duplicate').parent(RP).hide(0).addClass('p_h_d_p');
          }
        }
        if ($PP_EL(dab+'input[name=\"' + a + '"]:visible:not(.cstmfy_static)').length > 1) {
          if ($PP_EL('input[data-frame=\"' + b + '"].pplr_check').length < 1) {
            $PP_EL('input[name=\"' + a + '"]:visible:not(.cstmfy_static)').not(":last").prop('disabled', true).addClass('pplr_hide_duplicate').parents(RP).hide(0).addClass('p_h_d_p');
          }
        }
      });
    }
  }
}


function pplr_add_price(pplrqty, pplrtis, e,formdata) {
var notempty = pplr_check_require(pplrtis,e,true);

if (notempty) {
if(e){
  e.preventDefault();
  e.stopImmediatePropagation();
 
}
if(price_pplr){
  return;
}
price_pplr = true;
window.no_self_running_request = false;

var dvr = jQuery('.pplr-wrapper select[data-variant]:not([data-variant=""]):not([disabled]),.pplr-wrapper input[data-variant]:not([data-variant=""]):not([disabled])');
var o_pplrqty= ((pplrqty* 100)/Shopify.currency.rate).toFixed(0);

if(!dvr[0] && _SJ2[36]=='1' && pplrqty>0){

  if(!pplr_formdata && formdata){
    var pplr_formdata = formdata;
  }
  if(!pplr_formdata){
      pplr_formdata = new FormData(pplrtis[0]);
  }

  pplr_formdata.append("properties[_pplr_addprice]", o_pplrqty);

  if(typeof pplr_custom_ajaxcart_before !=='undefined'){
      var checkprice = window.PPLR_CAlCULATE_PRICE();
      pplr_custom_ajaxcart_before(checkprice,jQuery('.pplr_atc_form'),false,pplr_formdata);
      return;
    }

    if(_SJ2[0]>3 && !pplr_buy_now){

       pplrtis.append('<input '+pplr_form_id+' class="pplr_ref_class" type="hidden" name="properties[_pplr_addprice]" value="'+o_pplrqty+'"  />');
       saveSyncThemeImages();
        return;
    }

  pplr_ajax_cart(pplr_formdata,pplrtis);
  return;
}


pplrtis.addClass('pplrform');

if(_SJ2[36]!=='1'){
pplrtis.append('<input class="pplrcustomref" type="hidden" name="properties[_pc_pricing_ref]"  /><input class="pplrcustomqtysplit" type="hidden" name="properties[_pc_pricing_qty_split]" />');
jQuery(".pplrcustomref").val(Math.floor((Math.random() * 1000000000) + 1));
var pplr_pro_each = "&" + jQuery(".pplrcustomref").attr("name") + "=" + jQuery(".pplrcustomref").val();
}



var pplrqtyref = pplrqty;


var itemqty = pplrtis.find("[name='quantity']");

var i_d = pplrtis.attr('id');

var i_d_qty = jQuery("[name='quantity'][form='"+i_d+"']");
if(i_d_qty[0]){
  itemqty = i_d_qty;
}


if (itemqty[0]) {
  var item_qtyval = itemqty.val();
  if(item_qtyval<1){
    item_qtyval =1;
  }
  var pitemqty = parseInt(item_qtyval);
} else {
  var pitemqty = 1;
}
var rate = Shopify.currency.rate;
  pplrqty = pplrqty * 100 * parseInt(pitemqty)/(parseFloat(_SJ[26]));
var varianttoadd =[];


var qtyvar = [];

dvr.each(function(i) {
    var manyvar = jQuery(this).attr('data-variant').split("||");
    var price_arr = jQuery(this).attr('data-pplr_price_v_split')?.split("||") || [];;
    for(var i = 0; i < manyvar.length; i++) {
      var vvr = manyvar[i].split(',');
      var kkr = parseInt(vvr[0]);
      var price = price_arr?.[i];
      if(!price){
        price = jQuery(this).data('pplr_price');
      }
      if(kkr in qtyvar){
        qtyvar[kkr] = [1+qtyvar[kkr][0], price*100/rate];
      }
      else{
       qtyvar[kkr] = [1, price*100/rate];
      }
    }
})


var qtysplit = [];
var varsplit = [];

var pplrcustomref = jQuery(".pplrcustomref").val();
var prop = {'_pc_pricing_ref' : pplrcustomref };

for (var y = 0; y < Object.keys(qtyvar).length; ++y) {
  var vnt  = Object.keys(qtyvar)[y];
  if(_SJ2[36]=='1'){
      varianttoadd.push({ "id": vnt , "quantity": qtyvar[vnt][0],'price': qtyvar[vnt][1] });
    }
    else{
      varianttoadd.push({ "id": vnt , "quantity": qtyvar[vnt][0] * pitemqty,'properties': prop });
    }

    varsplit.push(vnt.toString());
    qtysplit.push(qtyvar[vnt][0].toString());
}


if(pplrqty>0 && _SJ2[36] !=='1'){
      jQuery(".pplrcustomprice").val(pitemqty);
      var z =  dvr.length;
      varianttoadd.push({ "id":pricechanger, "quantity": Math.round(pplrqty),'properties':prop});
      varsplit.push(pricechanger.toString());
      qtysplit.push((Math.round(pplrqty)/pitemqty).toString());
}

  varianttoadd.reverse();


if(_SJ2[36]=='1'){
    if(!pplr_formdata && formdata){
      var pplr_formdata = formdata;
    }
    if(!pplr_formdata){
        pplr_formdata = new FormData(pplrtis[0]);
    }
    if(pplrqty>0){
        pplr_formdata.append("properties[_pplr_addprice]", o_pplrqty);
      }
      pplr_formdata.append('properties[_pplr_inv_variant]', JSON.stringify(varianttoadd));

      if(_SJ2[0]>3 && !pplr_buy_now){

        pplrtis.append('<input class="pplr_ref_class" '+pplr_form_id+'  type="hidden" name="properties[_pplr_inv_variant]" value="'+JSON.stringify(varianttoadd).replace(/"/g, '&quot;')+'"  />');
        if(pplrqty>0){
            pplrtis.append('<input class="pplr_ref_class" '+pplr_form_id+' type="hidden" name="properties[_pplr_addprice]" value="'+o_pplrqty+'"  />');
          }

        saveSyncThemeImages();
        return;

      }
      setTimeout(function() {
         pplr_ajax_cart(pplr_formdata,pplrtis);

       },window.pplr_atc_delay || 0);


      return;
  }


var datatoadd = {'items' : varianttoadd}

function pplr_recursive(pplr_formdata){

  jQuery.ajax({
        type : 'post',
        url : "/cart/add.js",
        data:  JSON.stringify(datatoadd),
        method: "POST",
        contentType : !1,
        global: !1,
        processData : !1,
        dataType : 'json',
        cache: !1,
        crossDomain: true,
        async: true,
        headers: {
                "cache-control": "no-cache",
                'Content-Type': 'application/json'
              },
        success: function(data) {

         var callFunc = () => {
            if(pplrqty>0 && _SJ2[36] !=='1'){
              jQuery(".pplrcustomprice").val(data.items[varianttoadd.length-1].original_line_price / pitemqty);
              jQuery(".pplrcustompriceorigin").val((data.items[varianttoadd.length-1].price));
            }
            jQuery(".pplrcustomqtysplit").val(varsplit.join('_')+'-'+qtysplit.join('_'));

              if(!pplr_formdata && formdata){
                var pplr_formdata = formdata;
              }
              if(!pplr_formdata){
                var pplr_formdata = new FormData(pplrtis[0]);
              }

                if(_SJ2[36]=='1' && pplrqty>0){
                  pplr_formdata.append("properties[_pplr_addprice]", o_pplrqty);
                }
                pplr_formdata.append("properties[_pc_pricing_ref]", pplrcustomref);
                jQuery(".pplrcustomref").val(pplrcustomref);
                pplr_formdata.append("properties[_pc_pricing_qty_split]", varsplit.join('_')+'-'+qtysplit.join('_'));

              if(typeof pplr_custom_ajaxcart_before !=='undefined'){
                var checkprice = window.PPLR_CAlCULATE_PRICE();
                pplr_custom_ajaxcart_before(checkprice,pplrtis,false,pplr_formdata);
                return;
              }

              if(_SJ2[0]>3 && !pplr_buy_now && _CP[10] <3 ) {
                  if(_SJ2[36]=='1' && pplrqty>0){
                      pplrtis.append('<input class="pplr_ref_class" '+pplr_form_id+' type="hidden" name="properties[_pplr_addprice]" value="'+o_pplrqty+'"  />');

                    }
                    if(_SJ2[36]=='0' && pplrqty>0){
                      pplrtis.append('<input class="pplr_ref_class" '+pplr_form_id+' type="hidden" name="properties[_pc_pricing_ref]" value="'+pplrcustomref+'"  />');

                      pplrtis.append('<input class="pplr_ref_class" '+pplr_form_id+' type="hidden" name="properties[_pc_pricing_qty_split]" value="'+varsplit.join('_')+'-'+qtysplit.join('_')+'"  />');
                    }
                  saveSyncThemeImages();
                  return;
                }

              pplr_ajax_cart(pplr_formdata,pplrtis);
          }

          if(pplrqty>0 && _SJ2[36] !=='1' && data?.items?.length < 1){
              jQuery.ajax({
                  type: "get",
                  url: "/cart.js",
                  global: !1,
                  cache: !1,
                  success: (res) => {
                      data.items = JSON.parse(res).items;
                      callFunc();
                  },
                  error: (jqXHR, textStatus, errorThrown) => {
                    callFunc();
                  }
              })
          }else {
            callFunc();
          }


      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
        console.log(varianttoadd);
        if(jqXHR['responseJSON']){
          if(jqXHR['responseJSON']['status']){
            alert('Additional Variant: '+jqXHR['responseJSON']['description']);
          }
        }
        else{
          alert('Additional Variant: '+jqXHR['statusText']);
        }

        if(pplr_formdata){
          //pplr_ajax_cart(pplr_formdata,pplrtis);
        }
        else{
          var formdata = new FormData(pplrtis[0]);
          //pplr_ajax_cart(formdata,pplrtis);  
          return; 
        }

      }
    });

}

pplr_recursive(pplr_formdata);


}
}

function pplr_makev_disabled(k,d){
    k.addClass('vrdisabled');
    if(k.hasClass('selected') || k.hasClass('active')){
      k.removeClass('selected').removeClass('active');
      var f = k.attr('data-frame');
      jQuery('.pplr_monogram[data-frame="'+f+'"]').val('').attr('data-variant','').attr('data-pplr_price','0').trigger('change');
    }
    jQuery('option[data-variant*="'+d+'"],.pplr-checkbox-item[data-variant*="'+d+'"]').prop('disabled',true);
}

var pplr_check_variants_list_by_handle = {};
var pplr_check_variants_list_timeout;
var pprl_check_variants_list_load = {};

function disablevariant(v,t,cart){
var d = v.id;
var k = jQuery('span[data-variant*="'+d+'"],option[data-variant*="'+d+'"],.pplr-checkbox-item[data-variant*="'+d+'"]');
if(k[0]){
  var variantminus = 0;

  for(var i = 0; i < cart.items.length; i ++) {
     if(cart.items[i].id == d){
        variantminus = variantminus + parseInt(cart.items[i].quantity);
     }
     if(cart.items[i]['properties'] !== null){
      var p_e = cart.items[i]['properties']['_pplr_inv_variant'];
         if(p_e){
          var addtionalitem =JSON.parse(p_e);
            for(var n = 0; n < addtionalitem.length; n ++) {
                if(addtionalitem[n]['id'] == d){
                    variantminus = variantminus + parseInt(addtionalitem[n]['quantity']);
                 }
            }

         }
       }
  }

if (parseInt(v.inventory_quantity)-variantminus < 1 && v.inventory_management=='shopify' && (v.inventory_policy =='deny' || v.inventory_policy =='DENY')) {
    pplr_makev_disabled(k,d);
  }else{

    const handle = k?.attr?.("data-variant")?.split(",")?.[2];
    let shopify_rate = parseFloat(Shopify.currency.rate);
    const call = () => {
      if(t){
        var pp = (v.price);
      }
      else{
        var pp = (v.price / 100);
      }
      k.attr('data-pplr_price',pp);
      if(k.hasClass('selected') || k.hasClass('active') || (k?.attr("selected") && k?.[0]?.tagName == "OPTION")){
        k.each(function() {
          const $this = jQuery(this);
          if($this.hasClass('selected') || $this.hasClass('active') || ($this?.attr("selected") && $this?.[0]?.tagName == "OPTION")){
            var f = $this.attr('data-frame');
            jQuery('.pplr_monogram[data-frame="'+f+'"],.pplr_select[data-frame="'+f+'"],.pplrjscolor[data-variant*="'+d+'"]').attr('data-pplr_price',pp);
            if(pp>0){
              jQuery('.pplr_monogram[data-frame="'+f+'"],.pplr_select[data-frame="'+f+'"],.pplrjscolor[data-variant*="'+d+'"]').addClass('pplraddprice');
            }
          }
        })
      }
    }

    if(handle && (shopify_rate < 1 || shopify_rate > 1)){
      const checkP = () => {
        pplr_check_variants_list_by_handle?.[handle]?.variants?.some((item) => {
          if(item?.id == v?.id){
            if(window.pplr_variant_product[v?.id]){}
            else{
              const price = parseFloat(item?.price)
              v = {...v, price: price * (t ? 1 : 100)};
            }
            return;
          }
        })
        call()
        clearTimeout(pplr_check_variants_list_timeout);
        pplr_check_variants_list_timeout = setTimeout(() => {
          window.PPLR_CAlCULATE_PRICE();
        }, 300);
      }
      if(pplr_check_variants_list_by_handle?.[handle]){
        checkP();
      }else {
        if(pprl_check_variants_list_load?.[handle]){
          pprl_check_variants_list_load[handle].callbacks.push(checkP)
        }else {
          pprl_check_variants_list_load[handle] = {loading: true, callbacks: []}
          fetch(`/products/${handle}.json`, {
          }).then((res) => {
            return res.json();
          }).then((res) => {
            pplr_check_variants_list_by_handle[handle] = res?.product;
            checkP();
            pprl_check_variants_list_load[handle]?.callbacks?.forEach((func) => {
              if(typeof func == "function"){
                func()
              }
            })
            delete pprl_check_variants_list_load?.[handle]
          });
        }
      }
    }else {
      call();
    }
  }
}
}


function convertAndRound(convertedPrice, conversionRate = 1, currency = 'USD') {

    if (conversionRate === 1) return convertedPrice;
    if(!window.rounding_enabled) return convertedPrice;
    let integerPart = Math.floor(convertedPrice);
    let fraction = convertedPrice - integerPart;
      if (fraction > 0 && fraction <= window.rounding_price) {
          fraction = window.rounding_price; 
      } else if (fraction > window.rounding_price) {
          integerPart += 1; 
          fraction = window.rounding_price; 
      }
      return integerPart + fraction;

}


function isRoundingEnabled(basePrice, conversionRate, convertedPrice) {
    if (conversionRate === 1) {
        return false;
    }
    let expectedConvertedPrice = basePrice * conversionRate;
    expectedConvertedPrice = parseFloat(expectedConvertedPrice.toFixed(2));
    convertedPrice = parseFloat(convertedPrice.toFixed(2));
    return expectedConvertedPrice !== convertedPrice;
}


function Check_pplradd_qty(){

  var shop_url = Shopify.shop;

if(shop_url !== 'b6938d-5b.myshopify.com'){
  for(var i = 0; i < window.check_variant_product.length; i ++) {
    var d = window.check_variant_product[i];
      var k = jQuery('span[data-variant*="'+d+'"],option[data-variant*="'+d+'"],.pplr-checkbox-item[data-variant*="'+d+'"]');
      k.each(function() {
        pplr_makev_disabled(jQuery(this),d);
      })
  }
}

if (typeof __st !== "undefined") {
shop_url=__st.pageurl.split('/')[0]
}
if(pricechange){
  jQuery.ajax({
    type : 'GET',
    url : "https://"+shop_url+"/products/item-personalization.js",
    dataType : 'json',
    success : function(product){
      var rate = Shopify.currency.rate;
      window.rounding_enabled = isRoundingEnabled(_SJ[26]/100, rate, product.price/100) ;
      window.rounding_price = parseFloat((product.price/100 % 1).toFixed(2));

      if(product.id == vpriceid){
        pricechanger = product.variants[0].id;
        _SJ[26] = product.price;
      }

      window.PPLR_CAlCULATE_PRICE();
  },
  error : function(jqXHR, textStatus, errorThrown){
    const convertedPrice = parseFloat(pplr_product.variants[0].price);
    if(Shopify.currency.rate !==1 && convertedPrice >0){
        fetch('/products/' + pplr_product.handle + '.json', {
            credentials: 'omit'
        })
        .then(response => response.json())
        .then(data => {
            const originalPrice = parseFloat(data.product.variants[0].price);
            window.rounding_enabled = isRoundingEnabled(
                originalPrice,
                Shopify.currency.rate,
                convertedPrice/100
            );
            window.rounding_price = parseFloat((convertedPrice/100 % 1).toFixed(2));
        });
      }
     window.PPLR_CAlCULATE_PRICE();

  }
})
}
else{window.PPLR_CAlCULATE_PRICE();}
}

function recursivevcheck(vcontrol,vdata){
if(vcontrol.length>0){
var theme_id = Shopify.theme.id;
    jQuery.ajax({
        type: "POST",
        url: app_link_pplr+"checkvariant.php?theme_id="+theme_id,
        crossDomain: true,
        data:"&shop=" + Shopify.shop+'&vdata[]='+vdata.slice(0,100).join('&vdata[]='),
        success: function(data){
          jQuery.getJSON('/cart.js', function(cart) {
          data = JSON.parse(data);
           for (var i = 0; i < data.length; i++) {
            var product = data[i];

              for (var j = 0; j < product.variants.length; j++) {
                var index = window.check_variant_product.indexOf(product.variants[j].id);
                if (index >= 0) {
                    window.check_variant_product.splice(index, 1); // Remove the element
                } 
              }

            if(product.status == 'draft' && createproduct !=='2' && createproduct !=='5'){
              var d = product.id;
              var k = jQuery('span[data-variant*="'+d+'"],option[data-variant*="'+d+'"],.pplr-checkbox-item[data-variant*="'+d+'"]');
              k.each(function() {
                pplr_makev_disabled(jQuery(this),d);
              })
            }
            else{
                for (var j = 0; j < product.variants.length; j++) {
                    disablevariant(product.variants[j],true,cart);
                }
              }
            }
            vcontrol.splice(0, 100);
            if(vcontrol.length>0){
              recursivevcheck(vcontrol,vdata.slice(100));
            }
            else{
              Check_pplradd_qty();
            }
          })
        },
        error : function(jqXHR, textStatus, errorThrown){
          Check_pplradd_qty();
        }
      });
}
else{
  Check_pplradd_qty();
}
}

function checkinventory(){
  var vcontrol = [];
  var vdata = [];
  if(window.pplr_variant_product){
    jQuery.getJSON('/cart.js', function(cart) {
       for (var j = 0; j < Object.keys(window.pplr_variant_product).length; j++) {
          disablevariant(window.pplr_variant_product[Object.keys(window.pplr_variant_product)[j]],false,cart);
        }
      })
  }

window.check_variant_product = [];
$PP_EL('.pplr-wrapper [data-variant]:not([data-variant=""])').each(function() {
  var a = jQuery(this).attr('data-variant').split(',');

  var vfshopify = false;
  if(window.pplr_variant_product){
    if(window.pplr_variant_product[a[0]]){
      vfshopify = true;
    }
  }

  if(window.pplr_inv_product){
    if(window.pplr_inv_product[a[1]]){
      vfshopify = true;
    }
  }

  if(a.length>1 && !vfshopify){
    window.check_variant_product.push(a[0]);
    if(vcontrol.indexOf(a[1])<0){
      vcontrol.push(a[1]);
      vdata.push(a[1]);
    }
  }
});

window.check_variant_product = [...new Set(window.check_variant_product)];

recursivevcheck(vcontrol,vdata);
}


function pplr_unfold(tis) {
if (_SJ[0] == 2) {
var p = jQuery(tis).parent();
var c = jQuery(tis).children('.pplr-arrow');
if (p.hasClass('pplr-collapsible')) {
  if (p.hasClass('pplr-hide')) {
    p.removeClass('pplr-hide');
    c.removeClass('pplr-arrow-right');
    c.addClass('pplr-arrow-bottom');
    pplrcomplete();

  } else {
    p.addClass('pplr-hide');
    c.removeClass('pplr-arrow-bottom');
    c.addClass('pplr-arrow-right');

  }
}
}
}

function pplrColor(tis,p){ 
if(jQuery(tis).hasClass('vrdisabled')){
return;
}
var a = jQuery(tis).attr("data-name");
var b = jQuery(tis).attr("data-color");
var c = jQuery(tis).parents('.pplr-selecter-options');
var e = jQuery(tis).data("type");
var d= jQuery(tis).parents('.pplr-color-select').find(".pplrjscolor");
var variant = jQuery(tis).attr("data-variant");
if (typeof variant !== 'undefined' && variant !== false) { 
d.attr("data-variant", variant);
}
d.attr("data-type", e);
d.attr("data-value", b);
var g_ = b;
if(e==2){
b='url(\''+app_link_pplr + 'images/' + Shopify.shop + '/'+b+pplr_no_day+'\')';
}
if(p !== null){
var dp = jQuery(tis).attr('data-pplr_price');
if (typeof dp !== 'undefined' && dp !== false) { 
p = parseFloat(dp);
}
jQuery(tis).parent().siblings('.pplraddprice:not(.pplr_imgg)').attr("data-pplr_price",p);
}
jQuery(tis).siblings().removeClass("selected");
jQuery(tis).addClass("selected");
jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');
if (_SJ[20] == 2 || _SJ[32] == 5) {
c.siblings(".pplr-selecter-selected").find('.colorminithumb').css("background", b);
c.siblings(".pplr-selecter-selected").find('.dcolorname').text(a);
if(!jQuery(tis).parents('.c_drop_list')[0]){
  c.hide();
}
}
var frame = d.data('frame');
var name = d.attr("name");


var check_frame_v = frame;
if(pplr_is_views){
  const view_id = jQuery(tis).parents('.pplr-wrapper').attr('data-pview');
  if(view_id != pplr_active_view_id){
    check_frame_v = false;
  }
}

jQuery('.pplrjscolor[name="' + name + '"]').each(function() {
var t = jQuery(this);


var this_frame = jQuery(this).attr('data-frame');
pplr_values[this_frame][6] = g_;
pplr_values[this_frame][pplr_last_idx].colortype = e;

if(!check_frame_v && pplr_values[this_frame][92] == pplr_active_view_id){
  check_frame_v = this_frame;
}

var color_el = t.parent().find('span[data-color=\"' + d.attr('data-value') + '"]');
pplr_values[this_frame][pplr_last_idx].val = color_el.attr('data-name');

if (t.attr('data-frame') !== frame) {
  t.attr("data-type", e);
  if(!t.parents('.pplr-wrapper').hasClass('cp-sel-Photos')){ 
      t.attr("data-value", g_);
      t.val(a);
      var dp = color_el.attr('data-pplr_price');
        if (typeof dp !== 'undefined' && dp !== false) { 
          p = parseFloat(dp);
          if(p>0){
               t.addClass('.pplraddprice');
           }
          t.attr("data-pplr_price",p);
        }
        color_el.addClass('selected').siblings().removeClass('selected');
          if(t.parent().find('.pplr_option_text_span').length>0){
            t.parent().find('.pplr_option_text_span.f_p_color').text(' - '+a);
          }
    }
    if (typeof variant !== 'undefined' && variant !== false) { 
      t.data("variant", variant);
    }

}
});

jQuery(`.pplr_text[data-color-el-name="${name}"]`).each(function() {
  var this_frame = jQuery(this).attr('data-frame');
  pplr_values[this_frame][6] = g_;
  pplr_values[this_frame][pplr_last_idx].colortype = e;
})

d.val(a);

  if(jQuery(tis).parents('.c_drop_list')[0]){

    if(e<2){
            jQuery(tis).parents('.c_drop_list').siblings('.color_p_main').html('<span class="colorminithumb" style="background:'+b+';"></span><span class="dcolorname">'+a+'</span>');
        }
        else{
            jQuery(tis).parents('.c_drop_list').siblings('.color_p_main').html('<span class="colorminithumb" style="background:'+b+';"></span><span class="dcolorname">'+a+'</span>');
        }
  }

  if(!check_frame_v){
    check_frame_v = frame;
  }
var _m = _PP[_CM + frame].split(',');
if(_m[39]==3){
updatecondition(check_frame_v,false,false,true);
}
else{
updatecondition(check_frame_v,check_frame_v,false,true);
}
window.PPLR_CAlCULATE_PRICE();
  jQuery(tis).parent('.c_drop_list').slideToggle(100);

}

function pplrselecterselected(tis){
jQuery(tis).next(".pplr-selecter-options,.img_thumb_dropdown").slideToggle(100).addClass('poiuy');
jQuery(".pplr-font-select:not(.pplrfontthumb) .pplr-selecter-options:not(.poiuy),.img_thumb_dropdown:not(.poiuy),.c_drop_list:not(.poiuy)").hide();
jQuery('.poiuy').removeClass('poiuy');
setTimeout(function() {
var b = jQuery(tis).next(".pplr-selecter-options");
var c = jQuery(".pplr-p-right");
if(!c[0]){
  var c = jQuery(_P_P);
}
if(b[0]){
var a = -c.offset().top - c.height()+b.offset().top+b.height();
if(a>0 && b.height()>0){
  c.animate({ scrollTop:c.scrollTop()+a});
}
}
jQuery(tis).parents('.pplr-wrapper').css('overflow','visible');

},110);

  var imgthumb = jQuery(tis).next(".img_thumb_dropdown").find('img[data-ppsrc]');

  if(imgthumb.length>0){
    imgthumb.each(function() {
      jQuery(this).attr('src',jQuery(this).attr('data-ppsrc'));
    })
  }

}

function pplrselecteritem(tis,p){
var a = jQuery(tis).parents('.pplr-selecter-options');
var b = a.siblings(".pplr_font");
a.siblings(".pplr-selecter-selected").css("font-family", jQuery(tis).css("font-family"));
var frame = jQuery(tis).parents('.pplr-wrapper').attr('data-frame');
if(_SJ2[32]<1){
var name =  jQuery('.pplr_font[data-frame="' + frame + '"]').attr('name');
   jQuery('.pplr_font[name="' + name + '"]').each(function() {
    var f  = jQuery(this).parents('.pplr-wrapper').attr('data-frame');
      jQuery('.pplr_text[data-main="' + f + '"]').css("font-family", jQuery(tis).css("font-family"));
      pplr_values[f][0] = app_link_pplr+jQuery(tis).attr('data-value');
      pplr_values[f][pplr_last_idx].fheight = jQuery(tis).attr('data-height');
    });
}

pplr_values[frame][0] = app_link_pplr+jQuery(tis).attr('data-value');
pplr_values[frame][pplr_last_idx].fheight = jQuery(tis).attr('data-height');

if (_SJ[19] == 2) {
a.siblings(".pplr-selecter-selected").css("font-family", 'inherit');
} else {
a.hide();
}
if(p !== null){
jQuery(tis).parent().siblings('.pplraddprice').attr("data-pplr_price",p);
}
jQuery(tis).addClass("selected-font").siblings().removeClass("selected-font");
b.attr("data-value", jQuery(tis).attr("data-value"));
b.attr("data-height", jQuery(tis).attr("data-height"));

b.val(jQuery(tis).attr("data-name")).trigger("input");
a.siblings(".pplr-selecter-selected").text(jQuery(tis).text());
}

function pplrcheckboxoption(tis){
if(jQuery(tis).hasClass('vrdisabled')){
return;
}
var frame = jQuery(tis).attr('data-frame');
var data_val = jQuery(tis).val();
var b = parseFloat(jQuery(tis).attr("data-pplr_price"));
var _m = _PP[_CM + frame].split(',');

if(_m[77] ==''){
_m[77] = 0 ;
}
if(_m[78] ==''){
_m[78] = 1 ;
}

if(_m[77]>_m[78]){
_m[77] = _m[78];
}

}

function pplrselecteritemoption(tis){
if(jQuery(tis).hasClass('vrdisabled')){
return;
}
var frame = jQuery(tis).attr('data-frame');
var name =  jQuery('.pplr_select[data-frame="' + frame + '"],.pplrcheckbox[data-frame="' + frame + '"]').attr('name');
var data_val = jQuery(tis).attr("data-value");
var a = jQuery(tis).siblings('.pplr_select') ;
var b = parseFloat(jQuery(tis).attr("data-pplr_price"));
var _m = _PP[_CM + frame].split(',');

if(_m[77] ==''){
_m[77] = 0 ;
}
if(_m[78] ==''){
_m[78] = 1000 ;
}

if(_m[77]>_m[78]){
_m[78] = _m[77];
}
var mselect = false;

if(_m[72]>0 && _m[78]>1){
mselect = true;
}
var hasselected = jQuery(tis).hasClass('active');

if(jQuery(tis).hasClass('active') && !jQuery('.cstmfy_c_required[data-frame="' + frame + '"]')[0] && !mselect){
jQuery(tis).removeClass('active');


b = 0;
jQuery('.pplr_select[data-frame="' + frame + '"]').val('');
data_val='';
}
else{

if(mselect && _m[78]>1){
  if(hasselected){
    jQuery(tis).removeClass('active');
  }
}else{
  jQuery(tis).removeClass('active');

}

if(mselect && jQuery(tis).parents('.pplr-wrapper').find('.active').length==_m[78]){
  return;
}

if(pplr_values[frame][13] == 8){
  if(!hasselected){ 
    jQuery(tis).addClass('active');
  }
} else if(!hasselected || jQuery('.cstmfy_c_required[data-frame="' + frame + '"]')[0] && !mselect){ 
  jQuery(tis).addClass('active');
}

if(mselect && jQuery(tis).parents('.pplr-wrapper').find('.active').length==_m[78]){
  jQuery(tis).parents('.pplr-wrapper').find('.pplr-checkbox-item:not(.active)').prop('disabled',true);
}
else{
   jQuery(tis).parents('.pplr-wrapper').find('.pplr-checkbox-item:not(.active):not(.vrdisabled)').prop('disabled',false);
}

}

if(!mselect){
jQuery(tis).siblings().removeClass('active');
if(jQuery(tis).parent('.pplr_checkbox_l')[0]){  
    jQuery(tis).parent('.pplr_checkbox_l').siblings(':not(.pplrlabel)').each(function() { 
      jQuery(this).children('.active').prop('checked', false).removeClass('active');
    });
  }
}

var allvalue = [];
var otherfieldselector = [];
jQuery(tis).parents('.pplr-wrapper').find('.active').each(function() {
var dv = jQuery(this).attr("data-value") ;
allvalue.push(dv);
otherfieldselector.push('span[data-value=\"' + dv.replace(/"/g, '\\"') + '"],option[value=\"' + dv.replace(/"/g, '\\"')+ '"],.pplr-checkbox-item[data-value=\"' + dv.replace(/"/g, '\\"')+ '"]');
});

pplr_values[frame][pplr_last_idx].val = allvalue?.length == 0 ? [""] : allvalue;
data_val = allvalue.join(', ');

jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');

jQuery('.pplr_select[name="' + name + '"],.pplrcheckbox[name="' + name + '"]').each(function() {
var t = jQuery(this);
var f = t.data('frame');

pplr_values[f][pplr_last_idx].val = allvalue?.length == 0 ? [""] : allvalue;

if(_m[82]>0){
  t.parent().find('.pplr_option_text_span').text(' - '+data_val);
}

if(allvalue.length<_m[77] && mselect){

  t.val('');
}
else{
  t.val(data_val);
}

var k = t.parents('.pplr-wrapper').find(otherfieldselector.join(', '));
if(k[0]){

    k.addClass('active');

    if(mselect && _m[78]>1){
    }else{
      k.siblings().removeClass('active');
    }

    var dvariant = [];
    var spanprice = 0;
    k.each(function() {
      var dv = jQuery(this).attr('data-variant');
      if (typeof dv  !== 'undefined' && dv  !== false) { 
        if(dv !==''){
          dvariant.push(dv);
        }
      }
      var dv = jQuery(this).attr('data-p-variant');
      if (typeof dv !== 'undefined' && dv !== false) { 
        if(dv !==''){
          dvariant.push(dv);
        }
      }

      var dp = jQuery(this).attr('data-pplr_price');
      if (typeof dp !== 'undefined' && dp !== false) { 
          spanprice = spanprice+  parseFloat(dp);
      }
    })

    var variant = dvariant.join('||');
    t.attr('data-variant',variant);

    t.addClass('pplraddprice');

    t.attr('data-pplr_price',(spanprice));
    if(_m[83]>0){
      t.parent().find('.pplr_option_price_span').text(' (+'+ spanprice+')');
    }

  }
  else{
      t.attr('data-variant','');
      t.attr('data-pplr_price',0);
      t.val('');
}

});

updatepricepplr(jQuery(tis).siblings('.pplr_select')[0]);

updatecondition(frame,false,true);

window.PPLR_CAlCULATE_PRICE();

if(_SJ2[3]>0){
  var cn = frame+'_pplr';
  setC(cn, data_val);
}

}


function pplr_preview_hide() {
    jQuery("#pplr-preview").remove();
    jQuery("#pplr-preview-bg").remove();
    jQuery(".pplr_preview_final").removeClass('pplr_preview_final').addClass('pplr_preview_wrapper');
    jQuery(".pplr_final").removeClass("pplr_final").addClass('pplr');
    if (parseInt(_CP[8]) < 2) {
        jQuery('.zoomImg').remove();
        checkpplrClass(pplrframe);
    }
}


function ptabify(t){ 
    // return;
    // var A = ".pplr_tab_wrapper";
    var A = $PP_EL(".pplr_tab_wrapper")
    // var B =".pplr_tab";
    var B = $PP_EL(".pplr_tab");
    // var C = '.pplr_tab_index:visible';s
    var D = '.pplr_tab_index';
    if(!t){
        if(pplr_tab !=='' && !A[0]){
            A = jQuery('<div class="pplr_tab_wrapper">'+pplr_tab+'</div>');
            B.first().before(A);
        }
    }
    var C = $PP_EL('.pplr_tab_index:visible');

    if(_SJ[17]==2){
      A.addClass('tab_i_h');
      B.addClass('tab_h').css('min-height',C.length*36);
    }

    if(_SJ[17]==3 && C.length>0){
        var totalWidth = 0;
        $PP_EL(D).each(function(index) {
            totalWidth += $PP_EL(this).outerWidth();
        });
        if(totalWidth>A.width()){
          A.addClass('tab_i_h');
          B.addClass('tab_h');
        }
    }
    if(C.length>0 && !t){
      C.first().addClass('pplr_active');
      B.addClass('pplr_active');
      B.first().siblings().removeClass('pplr_active');
    }
    B.css('min-height', A.height());
}

function k_j(){
    var k = jQuery('.pplr_ex_inner .pplr_close');
    k.removeClass('isboe');
    if(k[0]){if(isBOE(k[0]) && !create_pplr){k.addClass('isboe');}}
}
function c_p_b_i(){
    var b = jQuery('.pplr_ex_inner .pplr-btn');
    var vScale = screen.width / window.innerWidth;
    if(isLandscape()){
    vScale = screen.height / window.innerWidth;
    }
    if(b[0] && vScale == pplr_vScale){if(isBOE(b[0]) && !create_pplr){pplr_modal_correct();}}
}

function pplr_modal_correct(t){
if(create_pplr){
return;
}
var pmb = jQuery(".pplr-modal-box:visible");
var ppr = jQuery(".pplr-p-right:visible");
var ppl = jQuery(".pplr-p-left:visible");
pplrheight = jQuery(window).height();

if(pplrheight <1){
pplrheight = jQuery('body').height();
}

if(t){var m_height = 'height';}else{var m_height = 'max-height';}
var wh = jQuery(window).height()/jQuery(window).width();

if(jQuery(window).height()<550){
pmb.css({"min-height":pplrheight});
}
var p_h_d=jQuery(".pplr-popup .p_h_d:visible").height() || 0;
if(wh>1){
pmb.css({"padding":"0px 10px","height":pplrheight,"max-height":"inherit"});
jQuery(".pplr_crop-modal").css({"background-color":"#ffffff"});
var extra = 80;
if (jQuery('.a_p_t')[0]) {extra = 110;}
if (_CP[10] <3 ) {
  extra = 70;
  pmb.css({"padding":"0px 10px","height":pplrheight-50});
}
var p_e_b = jQuery(".pplr_ex_button").height();
if(extra<p_e_b+10){ extra = p_e_b+10;}
pmb.removeClass('pplrfullwidth');
jQuery(".pplr-p-left:visible,.pplr-p-right:visible").css('width', '100%');
jQuery(".pplr-main").css('width', '100%');
ppr.css("height", 'auto');
pmb.css("margin-top", 0);
jQuery(".pplr_crop-modal:visible").css({"height":pplrheight+extra});
jQuery(".pplr-p-left:visible .pplr_popup_image,.pplr-p-left:visible,.pplr-p-left:visible canvas").css('max-height', (pplrheight-extra-p_h_d)/2);
jQuery(".pplr-p-left:visible .pplr_popup_image").css({"margin-left":"auto"});
ppr.css(m_height, (pplrheight-extra-p_h_d)/2);
jQuery(".crop_header:visible").css('max-height',ppr.height());
jQuery(".pplr-modal-body:visible").css(m_height,(pplrheight-extra)/2-40);
jQuery(".pplr-modal-image:visible").css('max-height',ppr.height()-extra/2);
ppl.css({'width':jQuery(".pplr-p-left:visible .pplr_popup_image").width(),'float':'left'});
ppr.css({'width':jQuery(".pplr-main:visible").width(),'float':'left'});
ppl.css({"margin-left":(jQuery(".pplr-main:visible").width()-ppl.width())/2});
jQuery(".pplr-popup:visible").css("height", window.innerHeight);
ppr.css("min-height", 'auto');
k_j();
setInterval(function(){k_j();},5000);
}
else{
pmb.css({"padding":"0px 10px","max-height":pplrheight});
var extra = 80;
if (_CP[10] <3 ) {
  extra = 0;
}
var ex2 = 50;
if(_SJ[30]>1)
{
  pmb.css({"padding":"0px 10px","height":pplrheight});
  jQuery(".pplr_crop-modal").css({"height":pplrheight});
  extra = 0;
  pmb.addClass('pplrfullwidth');
}
ppl.css('width', '47%');
ppr.css({'width':'50%','float':'right'});
var wert = jQuery(".pplr_ex_button").height() || jQuery(".pplr_ex_inner").height() ;
jQuery(".pplr-p-left .pplr_popup_image,.pplr-p-left,.pplr-p-left canvas").css('max-height', (pmb.height()-wert-p_h_d-30));
jQuery(".pplr-main").css("height", ppl.height()+jQuery(".pplr_ex_button").height());
if(_SJ[30]>1)
{
  jQuery(".pplrfullwidth").css("height", jQuery(window).height());
  ppr.css("min-height", jQuery(window).height()-240);
}
ppr.css("height", ppl.height());

if (_CP[10] <3 ) {
  ppr.css("min-height", ppr.width());
}
var whpmb = pplrheight-pmb.height();
ppl.css({"margin-left":'0px'});
if(pmb.height()>0){
  if(whpmb>10){
    pmb.css("margin-top", whpmb/2-10);
  }
  else{
    pmb.css("margin-top", 0);
  }
}

if (_CP[10] >2  ) {
  ppr.css("height", pmb.height()-wert-p_h_d-30);
}

if(jQuery(".pplr-p-left .pplr_popup_image").width()>0){
 var imgObj2 = new Image();
imgObj2.onload = function() {
  jQuery(".pplr-p-left .pplr_popup_image").css({"margin-left":(ppl.width()-jQuery(".pplr-p-left .pplr_popup_image").width())/2});
  if(jQuery('.pplr-p-left').height()<100){
    jQuery('.pplr-p-left').height((pplrheight-extra)/2);
  }
}
imgObj2.src = jQuery(".pplr-p-left .pplr_popup_image").attr('src');
}

}
if(ppr[0]){
    var ptw  = jQuery('.pplr_tab_wrapper').outerHeight(true) || 0;
    var pht  = jQuery('.pplr_h_title').outerHeight(true) || 0;
 // jQuery('.pplr_tab').css({"max-height":(pplrheight-extra-p_h_d)/2-ptw-40-pht,'overflow-y': 'auto'});
}
}
function pplr_variant_title(id){
var title = '';
  for (var i = 0; i < pplr_product.variants.length; i++) {
    if(pplr_product.variants[i].id==id){
      title = pplr_product.variants[i].title;
    }
  }
  return title;
}

function pplr_variant_id(pplrform){

if (pplrform.find("input[name='id']:checked").length !== 0) {
var pplrnameid = pplrform.find("input[name='id']:checked");
var pplrvariantid = pplrform.find("input[name='id']:checked").val();
}

if(!pplrvariantid){
if (pplrform.find("input[name='id']:not([disabled])").length !== 0) {
var pplrnameid = pplrform.find("input[name='id']:not([disabled])");
var pplrvariantid = pplrform.find("input[name='id']:not([disabled])").val();
}
}  

if(!pplrvariantid){
var pplrvariantid = pplrform.find("select[name='id']").val();
var pplrnameid = pplrform.find("select[name='id']");


}

if(!pplrvariantid){
  var p_a_f = jQuery('.pplr_atc_form');
  if(p_a_f[0]){
      var id = p_a_f.attr('id');
        if (jQuery("[name='id'][form='"+id+"']:not([disabled])").length !== 0) {
            var pplrvariantid = jQuery("[name='id'][form='"+id+"']:not([disabled])").val();
        }
    }
}


if(!pplrvariantid){
var pageURL = jQuery(location).attr("href");
if(pageURL.indexOf("?variant=")>-1 || pageURL.indexOf("&variant=")>-1){
  var urlParams = new URLSearchParams(window.location.search);
  var pplrvariantid = urlParams.get("variant");
}
}


if(!pplrvariantid && !pplrform[0]){
  var pplrvariant = jQuery('form[action*="/cart/add"][id] [name="id"]:not([disabled])');
  pplrvariant.each(function(){
    if(!pplrvariantid){
        var pplrvariant_id = jQuery(this).val();
        for(let i = 0; i < pplr_product?.variants?.length; i++){
          if(pplr_product?.variants[i]?.id == pplrvariant_id) {
            pplrvariantid = pplrvariant_id;
            break;
          }
        }
      }
    })
}

if(!pplrvariantid){

var pplrvariantid = pplr_product['variants'][0]['id'];
var pplr = first_prod_img();
if(pplr.attr('src')){
  var arrImage = pplr.attr('src').split('?')[0].split('.');
  var strExtention = arrImage.pop();
  var strRemaining = arrImage.pop()?.replace(/_[a-zA-Z0-9@]+$/,'');

  var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;

  for (var i = 0; i < pplr_product.variants.length; i++) {
    if(pplr_product.variants[i]["featured_image"]){

      if(pplr_product.variants[i]["featured_image"]["src"].split('?')[0].replace(/http(s)?:/,'')==strNewImage){

        var pplrvariantid = pplr_product.variants[i].id;
        break;
      }
    }

  }
}

}

var pplrvariantid = pplr_product?.variants?.filter((obj) => obj.id == pplrvariantid)?.[0]?.id;

if(!pplrvariantid){
var pplrvariantid = pplr_product['variants'][0]['id'];
}

return pplrvariantid;

}

function pplr_w_h(){
resizepplr ='';
pplr_html = jQuery('#pplr_html').html();
clearTimeout(checktimout);
jQuery('body').focus();
jQuery(".pplr_crop-modal,.pplr-modal-overlay").fadeOut();
setTimeout(function() {
jQuery(".pplr_crop-modal,.pplr-modal-overlay").remove();jQuery("body").removeClass("pplr-modal-open pplr_fixed");
},500)
window.pplr_on_boostly = true;
}

function check_remember(){
if(_SJ2[3]>0){
$PP_EL('.pplr_text,.pplr_select').each(function() {
    const frame = jQuery(this).attr('data-frame');
    var cn = frame+'_pplr';
    var cv = pplrgetC(cn);
    if(cv){
        jQuery(this).val(cv);
        pplr_values[frame][pplr_last_idx].text_val = cv;
        if(jQuery(this).find(":selected")[0]){
          jQuery(this).attr('data-pplr_price',jQuery(this).find(":selected").attr('data-pplr_price'));
          var dv = jQuery(this).find(":selected").attr('data-variant');
          if (typeof dv !== 'undefined' && dv !== false) { 
            jQuery(this).attr('data-variant',dv);
          }
        }
        if(jQuery(this).siblings('.pplr-drop-item[data-value="'+cv+'"]')[0]){
          jQuery(this).attr('data-pplr_price',jQuery(this).siblings('.pplr-drop-item[data-value="'+cv+'"]').attr('data-pplr_price'));
          jQuery(this).siblings('.pplr-drop-item[data-value="'+cv+'"]').addClass('active').siblings().removeClass('active');
        }
    }
  });
}
}

function cstmfy_personalize_text(tis,e) {
e.preventDefault();

const set_selected_val = (pth) => {
  for(const key of Object.keys(pplr_values)){
    let meta_item = pplr_values[key];
    let meta_field_item = pth.find(`.pplr-wrapper[data-main="${key}"]`)
    if(meta_item[13] < 3 && meta_item?.[pplr_last_idx]?.hasOwnProperty('text_val')){
      meta_field_item.find(`.pplr_text`).val(meta_item?.[pplr_last_idx]?.text_val)
    }
    if(meta_item?.[pplr_last_idx]?.hasOwnProperty('val')){
    if(meta_item[13] == 8){
        if(Array.isArray(meta_item?.[pplr_last_idx]?.val)){
          meta_item?.[pplr_last_idx]?.val?.map(val => {
            meta_field_item.find(`input[type="checkbox"].pplr-checkbox-item[data-value="${val}"]`).prop("checked", true)
          })
        }else {
          meta_field_item.find(`input[type="checkbox"].pplrcheckbox`).prop("checked", meta_item?.[pplr_last_idx]?.val)
        }
      }else if(meta_item[13] < 3){
        // meta_field_item.find(`.pplr_text`).val(meta_item?.[pplr_last_idx]?.text_val)
        if(meta_item?.[pplr_last_idx]?.val){
          pth.find(`.pplr-wrapper[data-frame="${key}"]`).find(`input.pplrjscolor`).val(meta_item?.[pplr_last_idx]?.val)
        }else{
          pth.find(`.pplr-wrapper[data-frame="${key}"]`).find(`input.jscolor`).val(meta_item?.[6])
        }
      }
      else if(meta_item[13] == 4 ){
        if(meta_item?.[pplr_last_idx]?.val){
          meta_field_item.find(`input.pplrjscolor`).val(meta_item?.[pplr_last_idx]?.val)
        }
      }
      else if(meta_item[13] == 7){
        meta_field_item.find(`.pplr_select`).val(meta_item?.[pplr_last_idx]?.val);
      }
    }
  }

    Object.keys(pplr_files_values).forEach(key => {
    if(pplr_files_values[key]?.length > 0){
      let meta_field_item = pth.find(`.pplr-wrapper[data-main="${key}"]`);
      let dataTransfer = new DataTransfer();
      const files = pplr_files_values[key];
      for (let i = 0; i < files.length; i++) {
        dataTransfer.items.add(files[i]);
      }
      const input = meta_field_item.find(`input.fileupload`)[0];
      if(input){
        input.files = dataTransfer.files;
      }
    }
  })
}

const check_tab = () => {
  setTimeout(() => {
    const $html = jQuery("#pplr_html");
    const last = $html.find(".pplr_tab_index.pplr_active");
    jQuery(last[last.length - 1]).siblings(".pplr_active").removeClass("pplr_active");
    var active_tab_index = $html.find(".pplr_tab_index.pplr_active").attr("data-tab");
    if(active_tab_index){
      $html.find(`.pplr_tab[data-tab="${active_tab_index}"]`).addClass("pplr_active").siblings().removeClass("pplr_active");
    }
  }, 100);
}

if (_CP[10] <3 ) {
  if(jQuery('.cstmfy_personalize_text').html()==''){

      var personalize_text_html = jQuery(`<div>${pplr_html}</div>`);

      jQuery('.cstmfy_personalize_text').first().html(personalize_text_html);
      set_selected_val(personalize_text_html);

        if(!pplr_preview_save ){
          jQuery('.cstmfy_personalize_text').first().append(pplr_preview_no_code);
        }
  
      var p_a_f = jQuery('.pplr_atc_form[id]');
      if(p_a_f[0]){
          var id = p_a_f.attr('id');
          if(!jQuery(_P_P).closest('form')[0]){
            jQuery('.product-personalizer input,.product-personalizer textarea,.product-personalizer select,.pplr_check_order').attr('form',id); 
          }
        }
        if(typeof pplr_custom_form_add !=='undefined'){
          console.log('pplr_custom_form_add');
          pplr_custom_form_add();
        }
   }
     pplrframe = 1;
            
  jQuery('.cstmfy_personalize_text').slideToggle("fast","swing", function(){
    if(jQuery('.cstmfy_personalize_text').css('display')=='none'){
      jQuery(tis).html(_CP[14]);
      jQuery(tis).removeClass('pplr_remove');
      jQuery('.cstmfy_c_required').prop('required',false);
      jQuery('.cstmfy_c_required,.pplrcheckbox,.pplr_imgg,.pplr_select,.pplr_text').prop('disabled',true);
      jQuery(tis).children('.pplr-arrow').removeClass('pplr-arrow-bottom');
      jQuery(tis).children('.pplr-arrow').addClass('pplr-arrow-right');
      jQuery('.pplrabs,.pplr_ref_class,.pplr_file_upload').remove();
      jQuery('.pplr-preview-btn').addClass('p_d_t_p');
      pplrabsloaded = true;
      p_p_w_r();
      window.PPLR_CAlCULATE_PRICE();
      p_d_o = true;
  if(_SJ2[33]!==''){jQuery('.p_a_t_c,.' + _SJ[9]+',#' + _SJ[9]).addClass(_SJ2[33]).attr(_SJ2[33],'');}
      pplr_html = jQuery('.cstmfy_personalize_text').first().html();
      jQuery('.cstmfy_personalize_text').first().empty();
      window.pplr_on_boostly = true;
    
    }
    else{
      p_d_o = false;
      window.pplr_on_boostly = false;
      pplr_prev_left();
      jQuery(tis).html(_SJ[21]);
      jQuery(tis).addClass('pplr_remove');
      jQuery('.cstmfy_c_required').prop('required',true);
      jQuery('.pplr-wrapper:not(.pplr_no_preview) .cstmfy_c_required,.pplr-wrapper:not(.pplr_no_preview) .pplrcheckbox,.pplr-wrapper:not(.pplr_no_preview) .pplr_imgg,.pplr-wrapper:not(.pplr_no_preview) .pplr_select,.pplr-wrapper:not(.pplr_no_preview) .pplr_text').prop('disabled',false);
      jQuery('.pplr_option .pplr_imgg').prop('disabled',true);
      jQuery('.pplr_preview_wrapper').show();
      jQuery(tis).children('.pplr-arrow').removeClass('pplr-arrow-right');
      jQuery(tis).children('.pplr-arrow').addClass('pplr-arrow-bottom');
      jQuery('.pplr-preview-btn').removeClass('p_d_t_p');
      ptabify();
      jQuery(_P_P).append("<style>" + fontface3 + "</style>");
      jQuery(_P_P).append("<style>" + fontface + "</style>");
      check_remember();
      checkinventory();
      dominicolors();
      pplrCustomeEvent("pplrAppBuild");
      updatecondition(pplrframe,false,false,true,true);
      if (hasfont) {
          WebFontConfig_pplr();
      }
      if(_SJ2[33]!==''){jQuery('.p_a_t_c,.' + _SJ[9]+',#' + _SJ[9]).removeClass(_SJ2[33]).removeAttr(_SJ2[33]);}
      jQuery('input.pplr_check:checked').trigger('click');
  
    }
  })
  spn = 0;
  check_tab();
  return;
}
if(jQuery('.pplr_crop-modal .pplr-p-left')[0]){
  check_tab();
return false;
}

var pplr_imgp = pplr_field_img(pplrframe);


if(pplr_imgp.indexOf('/products/') == -1 && pplr_imgp.indexOf('/files/') == -1 && pplr_imgp.indexOf('data:image') == -1){pplr_imgp =app_link_pplr+resizepplr+pplr_imgp+pplr_no_day;}
var pplrform = jQuery('.pplr_atc_form');
var pplrvariantid = pplr_variant_id(pplrform);
var pplravail = '';


var pplr_price = pplr_product.price;
var nfind =true;
for (var i = 0; i < pplr_product.variants.length; i++) {
if (pplr_product.variants[i].id == pplrvariantid) {
  if (_CP[0] > 0) {
  if(pplr_product.variants[i]["featured_image"]){
    var pplr_imgp = pplr_product.variants[i]["featured_image"]["src"];
  }
  }
if(pplr_product.variants[i]["available"]==false)
{
  pplravail = 'disabled';
  if(jQuery('.p_a_t_c')[0]){
    atcb = jQuery('.p_a_t_c').html();
  }
  if(jQuery('.p_a_t_c2')[0]){
    atcb = jQuery('.p_a_t_c2').html();
  }
}
else{
   atcb = _SJ[27];
}


var pplr_price = pplr_product.variants[i].price;
nfind =false;
}
}

if(nfind){
pplrvariantid = pplr_product.variants[0].id;
pplr_price = pplr_product.variants[0].price;
}

jQuery(_P_P).append("<style>" + fontface3 + "</style>");

jQuery("body").addClass("pplr_fixed");
p_p_w_r();

var b = "";
var pplr_title_text = "";
var a_p_t ="";
var q_f = '';
if (pricechange &&  typeof pplr_money_formate !== 'undefined') {
if(pplr_money_formate.indexOf('{{amount')> -1 || pplr_money_formate.indexOf('{{ amount')> -1){
  var a = pplr_money_formate.replace(/<\/?[^>]+(>|$)/g, "");
  a = a.replace("{{amount}}",',').replace("{{ amount }}",',').replace("{{amount_with_comma_separator}}",',').replace("{{amount_no_decimals}}",',').split(',');
  var b = "<span class='pplrcur pplr_cur money' >"+a?.[0]+ pplr_price/ 100+a?.[1]+"</span>";
  var pplr_title_text = "<label class='pplr_h_title'>"+pplr_product.title+"<i class='_ps'> - </i>"+b+"</label>";
}
if(_SJ2[6]>0){
  a_p_t ="<span class='a_p_t'></span>";
  b='';
}

}
var selling_plan = '';
var sp = pplrform.find('[name="selling_plan"]');
if(sp[0] && createproduct !=='2' && createproduct !=='5'){
selling_plan = '<input type="hidden" name="selling_plan" value="'+ sp.val()+'">';
}
if(_SJ2[9]>0){
var _n = 1;
var _xx = pplrform.find('[name="quantity"]');

var i_d = pplrform.attr('id');
var i_d_qty = jQuery("[name='quantity'][form='"+i_d+"']");
if(i_d_qty[0]){
  _xx = i_d_qty
}

if(_xx[0]){
    var _min = _xx.attr('min');
    var _max = _xx.attr('max');
    if(_min>_n){_n = _min}
      _n = _xx.val();
}
q_f ="<span class='q_f'><label>"+_SJ2[10]+" </label><input class='q_fi' required onchange='pplrqty(true,this,"+_n+")' value='"+_n+"' min='"+_min+"' max='"+_max+"' name='quantity' type='number' /></span>";
}
var no_c_p =  '';

if(!pplr_preview_save ){
      no_c_p= pplr_preview_no_code;
    }

jQuery('.pplr_atc_form').removeClass('pplr_atc_form').addClass('pplr_popup_form');

var inputvariant= '<input type="hidden" name="id" value="'+pplrvariantid+'" />'+no_c_p;
jQuery("body").append('<div class="pplr-modal-overlay"></div><div  class="pplr_crop-modal"  style="overflow-y:auto;"><div class="pplr-popup pplr-modal-box" ><header class="p_h_d"><p class="pplrhleft"></p><a  onclick=\'pplr_w_h();\' class="js-modal-close pplr_close p_r_c"><i class="pfa fa-close"></i></a></header><div class="pplr-main" ><form action="/cart/add" method="post" enctype="multipart/form-data" class="pplr_form pplr_atc_form"><div class="pplr-p-left"><img class="pplr_popup_image" alt src="' + pplr_imgp + '" /></div><div class="pplr-p-right" ><div class="pplr-modal-body pplrloading" >'+pplr_title_text+ '<div id="pplr_html">' + pplr_html + '</div>' +inputvariant+selling_plan+'</div></div><div class="pplr_ex_button"><div class="pplr_ex_inner">'+a_p_t+ q_f+b+'<button '+bcolor+' type="submit" '+pplravail+' name="add" class="p_a_t_c btn pplr-btn  button  Button--secondary '+_SJ[28]+'">'+atcb+'</button><a  onclick=\'pplr_w_h();\' class="js-modal-close pplr_close c_h_m p_r_c"><i class="pfa fa-close"></i></a></div></div></form></div></div></div>');
jQuery('.cstmfy_personalize_text').remove();
//jQuery("body").addClass("pplr-modal-open");
jQuery("body").find(".pplr_crop-modal").show();
var personalize_text_html = jQuery("#pplr_html");
set_selected_val(personalize_text_html);

if(!jQuery(".pplrloadfont")[0]){
jQuery(_P_P).append(loadfont);
}

// pplr_el = jQuery(".pplr-modal-body")[0];
pplr_el = jQuery(".pplr-modal-body");

var imgObj2 = new Image();
imgObj2.crossOrigin = 'Anonymous';
imgObj2.onload = function() {
jQuery(".pplr-preview-btn").remove();

check_remember();

if(typeof pplr_custom_form_add !=='undefined'){
  console.log('pplr_custom_form_add');
  pplr_custom_form_add();
}
pplrCustomeEvent("pplrAppBuild");
pplr_modal_correct();
ptabify();
checkinventory();
var qr = false;


updatecondition(pplrframe,false,false,true,true,false,qr);

if (hasfont && jQuery('.pplr-wrapper:not(.pplr_no_preview) .pplr_text:visible').length>0) {
  qr = true;
}

if (hasfont && qr) {
  WebFontConfig_pplr();
}
else{
  LoadPplrWithFont(pplrframe); 
}
setTimeout(function() {
  pplr_modal_correct();
},600);
 n_ad_cart(add_to_cart);
setInterval(function(){c_p_b_i();},500);
window.pplr_on_boostly = false;

jQuery('input.pplr_check:checked').trigger('click');

jQuery('.pplr_tag').each(function() {
  var k = jQuery(this).siblings('.selected,.active');
  if(k[0]){
    var d = k.data('tag');
    selectthistag(jQuery(this).find('.pplr-selecter-item[data-val="'+d+'"]'));
  }else{
    selectthistag(jQuery(this).find('.pplr-selecter-item').first());
  }
})

jQuery(".pplr_form").off('submit').on("submit", function(e) {
    if(createproduct >1 && _CP[8]<3 && pplr_preview_save){
      if(jQuery(".pplr-wrapper:visible")[0] && jQuery('.p_a_t_c')[0]){   
          e.preventDefault();
        }
    }

}); 

check_tab()

}
imgObj2.src = pplr_imgp;
imgObj2.onerror = function() {
alert("Background Image removed or deleted.Please rectify configuration with valid background image " + imgObj2.src);
};

dominicolors();

}


var pplr_tops = 0;
var pplr_scroll_now = 0;
function pplr_prev_left(stp){

if(p_d_o){
    p_p_w_r();
    var kkr = jQuery(".pplrabs");
    if(kkr[0]){
      kkr.remove();
    }
    return;
}

if(jQuery('#pplr-preview')[0]){
return;
}

var pp = jQuery(_P_P);

if(jQuery('.cstmfy_personalize_text')[0]){
  pp =jQuery('.cstmfy_personalize_text');
}

var p_p_w = jQuery(".pplr_preview_wrapper canvas");
if(_CP[10] < 3  && p_p_w[0] && _SJ[25] > 1){

if(!jQuery('.p_p_old')[0]){
  var pplr = first_prod_img();
  pplr.addClass('p_p_old');
}
var divod = jQuery(".p_p_old");
  var s = jQuery(window);
  var d  = jQuery('body,html'); 

  var WIH = window.innerHeight;
  var WIW = window.innerWidth

  var fromtop = 0;
  var p_right = false;
  if(p_p_w.height()>WIH/2 && pp.offset().left<p_p_w.offset().left && pp.offset().left+pp.width()/2 > p_p_w.offset().left){
    p_right = true;
  }
  if(WIH > WIW || p_right){
    fromtop = divod.height()-WIH/3;
  }

  if(s.scrollTop()>divod.offset().top+fromtop){
   
    var kkb1 = pp.offset().top+pp.height()-divod.offset().top ;

    if(!jQuery(".pplrabs")[0] && kkb1 > WIH){

    jQuery('body').append('<div class="pplrabs"><div class="pplr-prev-left" style="float: left;width: 100%;"><img alt src="' + image_crop(p_p_w[0],800,800,false,false).toDataURL('image/png', 1.0)+ '" /></div></div>');
    pplrabsloaded = true;
    var pplrabs = jQuery(".pplrabs");
    if(WIH > WIW){
      var maxh = WIH/3;
      var left = 0;
      var wd ='100%';
    }
    else{
      var maxh = p_p_w.height();
      var left = divod.offset().left;
      var wd = divod.width();
      if(p_right){
        wd=WIW;
        left = 0;
        maxh=WIH/3;
      }
    }
    pplrabs.css({"left":left,"height":maxh,"width":wd});
     jQuery(".pplrabs img").css({"max-height":maxh});
    jQuery(".pplr-prev-left").css({"height":pplrabs.height()});

}
}

var  pplrabs_w = jQuery(".pplrabs");

if(pplrabs_w[0]){
  var el = pplrabs_w[0];
  if ("getBoundingClientRect" in el) {
    var rect = el.getBoundingClientRect();
      var left = rect.left+divod.width()/2; 
      var tquery = 300;
      if(divod.offset().top<tquery){
        tquery = parseInt(divod.offset().top);
      }
      var findsticky = false;
      for(var i = 0; i <tquery; i++) {
        var top = i;
        var checkrect = document.elementFromPoint(left, top);
        if(checkrect){
            if(!jQuery(checkrect).parents('.pplrabs,.product-personalizer')[0]){
                var fixedp = jQuery(checkrect).parentsUntil('body').filter(
                  function() {
                    return jQuery(this).css('position') == 'fixed' || jQuery(this).css('position') == 'sticky';
                  }
                );
                if(fixedp[0]){
                  findsticky = true;
                   checkrect = fixedp[0];
                    if(checkrect.clientHeight<300){
                      var adcb = checkrect.clientHeight+checkrect.getBoundingClientRect().top-2;
                      if(pplr_tops<adcb && adcb<300 && pplr_scroll_now<s.scrollTop()){
                        pplr_tops = adcb;
                      }
                    }
                }
             }
        }
      }
      if(!findsticky){
        if(!iOS && !pisSafari() || stp){
          pplr_tops = 0;
        }
      }
    }

  }

if(pplr_scroll_now<s.scrollTop()){
  pplr_scroll_now = s.scrollTop();
}

if(pplrabs_w[0]){
    var vv = pp.offset().top+pp.height()-s.scrollTop()-jQuery(".pplr-prev-left").height();
    if(pp.offset().top+pp.height()<s.scrollTop()+jQuery(".pplr-prev-left").height() && vv<0)
    {
      pplrabs_w.css({"top":vv});
    }
    else{
      pplrabs_w.css({"top":0+pplr_tops});

    }
  }


if(pplrabs_w[0]){
  popup_wrapper_left = divod.offset().top+fromtop;
  if(s.scrollTop()<popup_wrapper_left){
    var pplrabs = jQuery(".pplrabs");
    pplrabs.remove();
    pplr_tops = 0;
    pplr_scroll_now =0;
  }
}

}


if(!jQuery(".p_p_old")[0] && jQuery(".pplrabs")[0]){
  jQuery(".pplrabs").remove();
  pplr_tops = 0;
  pplr_scroll_now =0;
}
}


function pplr_delete(tis, k, f,g,l) {
var control = jQuery('.pplr_monogram[data-frame="' + tis + '"]');
var name = control.attr("name");


var data_name = control.attr("data_name");

if(pplr_files_values[tis]){
  delete pplr_files_values[tis];
}

control = jQuery('.pplr_monogram[data_name="' + data_name + '"]');
control.each(function() {
  const $oldInput = jQuery(this);
  const $newInput = jQuery('<input type="file">');
  jQuery.each($oldInput.prop("attributes"), function () {
    if (this.name !== 'value') {
      $newInput.attr(this.name, this.value);
    }
  });
  $newInput.prop('disabled', false);
  $oldInput.replaceWith($newInput);
})
jQuery('.pplr_img_w[data-name="' + data_name + '"]').remove();
var a = jQuery('.pplr-wrapper[data-main="' + tis + '"]');

if (k) {
jQuery('.img_url[data_name="' + data_name + '"]').attr("data-psrc", app_link_pplr+'images/blank.png'+'?v=123').attr("data-newr", 1);
jQuery('.crop_img_url[data_name="' + data_name + '"]').attr("src", app_link_pplr+'images/blank.png'+'?v=123').attr("data-newr", 1);
jQuery('.pplr_crop-modal[data-name="' + data_name + '"]').remove();

if (!l) {
  jQuery('.pplr-crop[data-frame="' + tis + '"]').trigger('change');
}

} else {
  var m_ = _PP[_CM + tis].split(','); // default values
  jQuery('.img_url[data-frame="' + tis + '"]').attr("data-psrc", app_link_pplr + m_[15]+pplr_no_day);
  var crop_val = m_[22].split("-").join("_");
  pplr_values[tis][22] = crop_val;
  jQuery('.pplr-crop[data-frame="' + tis + '"]').val(crop_val).trigger('change');
}
jQuery('.pplr-crop[data-frame="' + tis + '"]').prop('disabled', true);
jQuery('.pplrimage[data-frame="' + tis + '"]').removeClass("selected");
jQuery('.img_url[data_name="' + data_name + '"]').parents('.pplr-wrapper').removeClass('p_h_m').removeClass('p_h_i');

if(preSavedItems[name]){
  preSavedItems[name] = false;
}
if(cropped_image_save_queue[name]){
  cropped_image_save_queue[name] = false;
}
if(cropped_image_save_queue["properties[_"+data_name+"_crop]"]){
  cropped_image_save_queue["properties[_"+data_name+"_crop]"] = false;
}

if (_CP[10] >2 ) {
control.each(function() {
    var  fr = jQuery(this).attr('data-frame');
    a = jQuery('.pplr-wrapper[data-main="' + fr + '"]');
    a.find('.crop_header').remove();
})
return;
}
else
{
jQuery("body").removeClass("pplr-modal-open");
}

if (!f) {
a.find('.crop_header').remove();
jQuery(".pplr_crop-modal").hide();
jQuery("body").removeClass("pplr-modal-open");
}
if(g){
a.find('.crop_header').remove();
}
}

function pplr_option_check(data_frame){
var tfd = '[data-frame="' + data_frame + '"]';
var tfm = '[data-main="' + data_frame + '"]';
var pm = '.pplr_monogram';
var am = ',.pplr_select';
var a = jQuery(".pplr-swatch-element"+tfd);

a.parent().removeClass('pplr_option');

if(jQuery(pm+tfd).hasClass('fileupload')){
jQuery(pm+tfd).prop('disabled', false).removeClass('pplr_option');
jQuery('.pplr-crop'+tfd).prop('disabled', false).trigger('change');
jQuery('.pplr_ins'+tfd+',.crop_header'+tfd).removeClass('pplr_option');
}
else{
jQuery(pm+tfd+am+tfd).prop('disabled', false).trigger('change').removeClass('pplr_option');
jQuery('.textBiggerSmaller'+tfd+',.pplr-character-count'+tfd+',.pplr_ins'+tfd+',.key_layout_sub'+tfd+',.pplr-btn-group'+tfd).removeClass('pplr_option');
} 
jQuery(".pplr_aux"+tfd).parents(RP).removeClass('pplr_option');

if (jQuery(pm+tfm).val()!=='' && jQuery(pm+tfm).hasClass('pplr_text')) {
jQuery(".pplr_aux"+tfd).prop('disabled', false);
}
else{
jQuery(".pplr_aux"+tfd).prop('disabled', true);
}
}

function pplr_option(tis) {
  var data_frame = jQuery(tis).attr('data-frame');
  var data_name = jQuery(tis).attr('name');
  var tfd2 = '[data-frame="' + data_frame + '"]';
  var pm = '.pplr_monogram';
  var am = ',.pplr_select';
  jQuery('input[name="' + data_name + '"]').each(function() {
  var this_frame = jQuery(this).attr('data-frame');
  var tfd = '[data-frame="' + this_frame + '"]';
  if (this_frame !== data_frame) {
    if(!jQuery(pm+tfd+am+tfd).hasClass('pplr_option')){
  
      jQuery(pm+tfd+am+tfd).prop('disabled', true).addClass('pplr_option');
      jQuery('.textBiggerSmaller'+tfd+',.pplr-character-count'+tfd+',.pplr_ins'+tfd+',.key_layout_sub'+tfd+',.crop_header'+tfd+',.pplr-btn-group'+tfd).addClass('pplr_option');
  
      jQuery('.pplr_aux'+tfd).prop('disabled', true);
      if(!jQuery('.pplr_aux'+tfd).hasClass('pplr-crop')){
         jQuery('.pplr_aux'+tfd).parents(RP).addClass('pplr_option');
      }
      jQuery(".pplr-swatch-element"+tfd).parent().addClass('pplr_option');
      if(jQuery(pm+tfd2).hasClass('fileupload')){
        jQuery(pm+tfd2).siblings('.pplr-crop').trigger('change');
      }
      else{
        jQuery(pm+tfd2+am+tfd2).trigger('input');
      }
    }
  
  }
  });
  pplr_option_check(data_frame);

}


function pplr_preview(e, pop_up) {
  if(jQuery('.pplr_no_preview[data-main]').length ==parseInt(_CP[1])|| !document_f_loaded){
      return;
  }

  if(!pop_up){
    e.preventDefault();
    e.stopImmediatePropagation();
        
    jQuery(".pplr_preview_wrapper").removeClass('pplr_preview_wrapper').addClass('pplr_preview_final');
    jQuery(".pplr").removeClass("pplr").addClass('pplr_final');
    jQuery("#pplr-preview").remove();
  }
  clearTimeout(pplr_check_fl);
  clearTimeout(checktimout);

  // var frame_data = pplr_field_img(pplrframe);

  var pplrlarge = _PP[_CM + pplrframe].split(',')[18];

  if(pplr_is_views){
        var view_id = _PP[_CM + pplrframe].split(",")[92];
        if(view_id){
          pplrlarge = pplr_views[view_id][1];

          if(pplr_views[view_id][0] == 3){
              var pplrvariantid = pplr_variant_id(jQuery('.pplrform'));
              if(pplrvariantid){
                  for (var i = 0; i < pplr_product.variants.length; i++) {
                      if (pplr_product.variants[i].id == pplrvariantid) {
                          if(pplr_product.variants[i]["featured_image"]){
                              pplrlarge = pplr_product.variants[i]["featured_image"]["src"].replace(queryreplacestring, pplrreplace);
                          }
                      }
                  }
              }
          }
        }
      }
    
  if(pplrlarge.indexOf('/products/') == -1 && pplrlarge.indexOf(app_link_pplr) == -1 && pplrlarge.indexOf('/files/') == -1 && pplrlarge.indexOf('data:image') == -1){
      pplrlarge =app_link_pplr+resizepplr+pplrlarge+pplr_no_day;
  }

  if(!pop_up){
    jQuery("body").append("<div id='pplr-preview\'></div><div id='pplr-preview-bg\' onclick='pplr_preview_hide();\'></div>");
    jQuery("#pplr-preview").append("<a  onclick='pplr_preview_hide();\' class='js-modal-close pplr_close p_r_c\' ><i class='pfa fa-close'></i></a><div id='pplr-preview-wrapper\' ><img alt style='max-width:100%;max-height:100%;display:block;\' src='" + pplrlarge + "\' /></div>");  
  }else {
    jQuery("#pplr-preview-wrapper").html(`<img alt style='max-width:100%;max-height:100%;display:block;\' src="${pplrlarge}" />`)
  }

  var a = jQuery("#pplr-preview-wrapper");
  var b = jQuery("#pplr-preview img") ;
  a.append("<div class='pplr_loader'>Loading...</div>");
  jQuery("#pplr-preview").height(pplrheight - 80);
  jQuery('#pplr-preview-bg').height(jQuery(document).height());
  b.on("load", function() {
      b.css({
          "max-width" : jQuery(window).width()-40
      });  
      a.css({
          "width": b.width(),
          "height": b.height()
      });

      jQuery("#pplr-preview").width(b.width());
      jQuery("#pplr-preview").height(b.height());
      var margin = (pplrheight - jQuery("#pplr-preview").height()) / 2 - 20;

      jQuery("#pplr-preview").css({
          "top": margin,
          "bottom": margin,
          "max-width" : jQuery(window).width()
      });
      p_p_w_r();

      a.addClass("pplr");
      if (_CP[0] > 0) {
          pplrlarge = false;
      }
      checkpplrClass(pplrframe,a);
  });
}




function pplronload(pplr,pplr_form) {
  if (parseInt(_CP[8]) < 2) {
    var pplr_p = pplr.parent();
    pplr_p.append("<div class='pplr_loader' style='display: none;''>Loading...</div>");
    pplr_p.find('.pplr_loader').addClass("blurr").fadeIn(3000,"swing");
    pplr_form.append('<div class="pplrloadingimage"></div>');
  }
}


function chooseimage(tis,k,r) {

if(jQuery(tis).hasClass('vrdisabled')){
return;
}
var name = jQuery(tis).attr("name");
var frame = jQuery(tis).data("frame");
var _m = _PP[_CM + frame].split(',');
var tag = jQuery(tis).data("tag");
var a = jQuery('.pplr_monogram[name="' + name + '"]');
var lock_color = jQuery(tis).attr("data-color");
var data_val = jQuery(tis).attr("data-val");
var pvalue = data_val;

if(_m[77] ==''){
_m[77] = 0 ;
}
if(_m[78] ==''){
_m[78] = 1000 ;
}

if(_m[77]>_m[78]){
_m[78] = _m[77];
}

var mselect = false;
if(_m[72]>0 && _m[78]>1){
mselect = true;
}

var hasselected = jQuery(tis).hasClass('selected');

if(hasselected && _SJ[22]<3 && !mselect){
return;
}



if(hasselected && !jQuery('.cstmfy_c_required[data-frame="' + frame + '"]')[0] && _SJ[22] >2 && !jQuery(tis).hasClass('activeswatch') && !mselect){

jQuery(tis).removeClass('selected');
jQuery('.img_url[data-frame="' + frame + '"]').attr("data-psrc", app_link_pplr+'images/blank.png'+pplr_no_day);
data_val='';
r = true;
a.val(data_val);
}
else{
if(mselect){
  if(hasselected){
    jQuery(tis).removeClass('selected');
    pvalue = '';
  }
}else{
  jQuery(tis).parent().find('.pplrimage[name="' + name + '"]').removeClass("selected");
}

if(mselect && jQuery(tis).parent().find('.selected').length==_m[78]){
  return;
}

if(!hasselected || jQuery('.cstmfy_c_required[data-frame="' + frame + '"]')[0] && !mselect){
  jQuery(tis).addClass("selected");
}
}

var data_m_src = [];
var allvalue = [];
var otherfieldselector = [];
jQuery(tis).parent().find('.selected').each(function() {
   data_m_src.push(jQuery(this).attr("data-image"));
var dv = jQuery(this).attr("data-val") ;
allvalue.push(dv);
otherfieldselector.push('span[data-val="' + dv.replace(/"/g, '\\"')+ '"]:not([data-group]):not(.vrdisabled)')
});
data_val = allvalue.join(', ');

jQuery('.img_url[data-frame="' + frame + '"]').attr("data-psrc", data_m_src.join('|'));

jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');

var check_frame_v = frame;
if(pplr_is_views){
  const view_id = jQuery(tis).parents('.pplr-wrapper').attr('data-pview');
  if(view_id != pplr_active_view_id){
    check_frame_v = false;
  }
}

jQuery('.pplr_imgg[name="' + name + '"]').each(function() {
  var t = jQuery(this);

  var k = t.parent().find(otherfieldselector.join(', '));

  var this_frame = t.attr('data-frame');
  if(pplr_values[this_frame][13] != 4){
    pplr_values[this_frame][pplr_last_idx].val = allvalue.length > 0 ? allvalue : [""];
  }

  if(!check_frame_v && pplr_values[this_frame][92] == pplr_active_view_id){
    check_frame_v = this_frame;
  }

  if(k[0] || r){ 

    var sk = t.parent().find('span[data-val="' + pvalue.replace(/"/g, '\\"')+ '"]:not([data-group])');

    var s = t.parent().find('img[data-name=\"' + name+ '"]');

    s.attr('data-psrc',sk.attr('data-image'));

    if(mselect && _m[78]>1){
      s.attr('data-psrc',data_m_src.join('|'));
    }

    if(pvalue=='' || data_val==''){
      sk.removeClass('selected');
      if(!mselect){
        var linkq = app_link_pplr+'images/blank.png'+pplr_no_day;
        s.attr('data-psrc',linkq); 
      }

    }
    else{
      sk.addClass('selected');
    }

    if(_m[82]>0){
      t.parent().find('.pplr_option_text_span.f_p_img').text(' - '+data_val);
    }

    if(allvalue.length<_m[77] && mselect){

      t.val('');
    }
    else{
      t.val(data_val);
    }


    k.addClass('selected');

    if(mselect && _m[78]>1){

    }else{
      k.siblings().removeClass('selected');

    }
    var tt = t.parent().find('[data-tag=\"' + tag+ '"]');
    if(tt && tag){
      t.parent().find('.pplr-swatch-element:not(.pplr_deselect):not(.pplrColor)').hide();
      tt.show();
     t.parent().find('.pplr_tag [data-val=\"' + tag+ '"]').addClass('active').siblings().removeClass('active');
    }

    t.parent().find('.dropdowncolor:not(.color_p_main)').html(jQuery(tis).find('.img_dropdown').html());

    var f = t.data('frame');
    var _m_n = _PP[_CM + f].split(',');

    var priceadd = parseFloat(_m_n[27]);

    var dvariant = [];
    var spanprice = 0;
    var spanprice_arr = [];
    k.each(function() {
      var dp = jQuery(this).attr('data-pplr_price');
      if (typeof dp !== 'undefined' && dp !== false) { 
          spanprice = spanprice + parseFloat(dp);
      }
      if(jQuery(this).data('variant') !==''){
        dvariant.push(jQuery(this).data('variant'));
        spanprice_arr.push(parseFloat(dp));
      }
    })

    var variant = dvariant.join('||');

    if(_m_n[26]<2 || isNaN(priceadd) || variant !==''){
      priceadd = 0;
    }

    t.attr('data-variant',variant);

    t.addClass('pplraddprice');
    t.attr('data-pplr_price_v_split',(spanprice_arr?.join("||")));
    t.attr('data-pplr_price',(spanprice+priceadd));

    if(_m[83]>0){
      t.parent().find('.pplr_option_price_span').text(' (+'+ spanprice+priceadd+')');
    }

  if(r){
      t.attr('disabled',true);
  }
  else{
    if(!t.parents('.pplr_no_preview')[0]){
      t.attr('disabled',false);
    }
  }
}
else{
    var s = t.parent().find('img[name=\"' + name+ '"],img[data-name=\"' + name+ '"]');
    if(pvalue=='' || data_val==''){
      var linkq = app_link_pplr+'images/blank.png'+pplr_no_day;
      s.attr('data-psrc',linkq); 
      t.attr('data-variant','');
      t.attr('data-pplr_price',0);
      t.val('');
      t.parent().find('.pplr_option_text_span,.pplr_option_price_span').text('');
    }
}

});

if(!check_frame_v){
    check_frame_v = frame;
  }

var _m = _PP[_CM + frame].split(',');
if(_m[39]==3 && _CP[8] != 0){
updatecondition(check_frame_v,false,false,true);
}
else{
updatecondition(check_frame_v,check_frame_v,false,true);
}
if(lock_color!==''){jQuery('[c-color="single"]').attr('data-color',lock_color).trigger('change');} 

window.PPLR_CAlCULATE_PRICE();

jQuery(tis).parent('.img_thumb_dropdown').slideToggle(100);

jQuery(tis).parent('.img_thumb_dropdown').prev('.pplr-selecter-selected:not(.color_p_main)').html(jQuery(tis).find('.img_dropdown').html());

};



function queryimgmatch(t) {
var gmatch = false;
var pplrRefImage = t.attr("src").split("?")[0].replace(queryreplacestring, ".").split("/").pop().split(".")[0];
for (var j = 0; j < pplr_product["images"].length; j++) {
var searchUrl = pplr_product["images"][j];
searchUrl = searchUrl.split("?")[0].replace(queryreplacestring, ".").split("/").pop().split(".")[0];
if (pplrRefImage.indexOf(searchUrl) > -1) {
  gmatch = true;
}
}
if (gmatch) {
return true;
} else {
return false;
}
}
function checkopacity(t) {
    if (parseFloat(t.css("opacity")) <= 0.2) {
        return false;
    }
    let parents = t.parents();
    for (let i = 0; i < parents.length; i++) {
        let parent = jQuery(parents[i]);
        if (parseFloat(parent.css("opacity")) <= 0.2 || parent.css("visibility") === "hidden") {
            return false;
        }
    }
    return true;
}

function isBOE(e) {
var boundingRect = e.getBoundingClientRect();
var left = boundingRect.left + 1;
var right = boundingRect.right - 1;
var top = boundingRect.top + 1;
var bottom = boundingRect.bottom - 1;
if(document.elementFromPoint(left, top) !== e) return true;
if(document.elementFromPoint(right, top) !== e) return true;
if(document.elementFromPoint(left, bottom) !== e) return true;
if(document.elementFromPoint(right, bottom) !== e) return true;
return false;
}

function isElementVisible(el) {
var convertPoint = window.webkitConvertPointFromNodeToPage;
if ("getBoundingClientRect" in el) {
var rect = el.getBoundingClientRect(),
    vWidth = window.innerWidth || document.documentElement.clientWidth,
    vHeight = window.innerHeight || document.documentElement.clientHeight,
    efp = function(x, y) {
      return document.elementFromPoint(x, y)
    };
if (rect.left + rect.width / 4 < 1) {
  return false;
} else {
  return true;
}
} else if (convertPoint) {
return true;

}
}

function if_exist_in_s_file(pplrimg){
var pplrRefImage = pplrimg.attr('src').replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/").pop().split(".").slice(0, -1).join(".");
var pplrRefImage2 = pplrimg.attr('src').replace('_crop_center.', ".").split("/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");
var image_ar = [pplrRefImage,pplrRefImage2]
return image_ar;
}

function isElementOnTopWithChildCheck(element) {
    const rect = element[0].getBoundingClientRect(); 
    const x = rect.left + rect.width / 3; 
    const y = rect.top + rect.height / 3; 
    const isElementInViewport = !(rect.top > window.innerHeight || 
                                  rect.bottom < 0 || 
                                  rect.left > window.innerWidth || 
                                  rect.right < 0);


    const topElement = document.elementFromPoint(x, y);
    if(!topElement){
      return false;
    }
    if (element[0] === topElement || element[0].contains(topElement)) {
        return true; // Element is on top
    }
    let parent = element[0].parentElement;
    if (topElement && topElement.tagName === 'CANVAS') {
        if (parent === topElement.parentElement || parent === topElement.parentElement.parentElement) {
            return true;
        }
    }
    if (parent === topElement || parent === topElement.parentElement) {
        return true; 
    }
    return false;
}




function first_prod_img() {

var pplrnotfound = true;

if(pplr_image_upload || _CP[10] >2 ){
      var pplrcustomimg = jQuery(".pplr-p-left:visible .pplr_popup_image");

      for (var i = 0; i < pplrcustomimg.length; i++) {
      if (pplrcustomimg.eq(i).parents().hasClass("pplr-p-left") && !pplrcustomimg.eq(i).parents().hasClass('pplr-p-right') ) {
        var pplrnotfound = false;
        return pplrcustomimg.eq(i);
      }
      }
      if (pplrnotfound) {
      for (var i = 0; i < pplrcustomimg.length; i++) {
        // if(!pplrcustomimg.eq(i).hasClass('crop_img_url') && !pplrcustomimg.eq(i).hasClass('img_url') && !pplrcustomimg.eq(i).parents('.pplr-wrapper,.pplr_image_loader')[0] && !pplrcustomimg.eq(i).parents('.pplr-p-right')[0]){
        if(!pplrcustomimg.eq(i).hasClass('crop_img_url') && !pplrcustomimg.eq(i).hasClass('img_url') && !pplrcustomimg.eq(i).parents('.pplr-p-right')[0]){
          var pplrnotfound = false;
          return pplrcustomimg.eq(i);
        }

      }

      }
  }

if(!pplrnotfound){
return;
}

if(pplr_img_name_array.length==0){
for (var i = 0; i < pplr_product.images.length; i++) {
  pplr_img_name_array.push(pplr_product.images[i].split("/").pop().split(".").slice(0, -1).join("."));
}
}

var all_img = jQuery("body img:visible");

if(_CP[10] < 3){

var pplrsrcset = all_img.filter(function () {
    var $this = jQuery(this);
    var srcset = $this.attr("srcset") || $this.attr("data-srcset");
    return srcset && (srcset.includes("/products/") || srcset.includes("/files/")) && !$this.hasClass("pplrcsrset");
});



    var check_p_img = pplr_product.images[0];

    for (var i = 0; i < pplrsrcset.length; i++) {

      var srcset = pplrsrcset.eq(i).attr('src');

      if (typeof srcset !== typeof undefined && srcset !== false && (srcset.indexOf("shopify.com")>-1 || srcset.indexOf("shopifypreview.com")>-1)) {
      }
      else{

        var findsrc = true;
        var attr = pplrsrcset.eq(i).attr('srcset');
        if (typeof attr !== typeof undefined && attr !== false) {
          if(attr.indexOf("/products/")<0 && attr.indexOf("/files/")<0){
            findsrc = false;
          }
        }else{
          findsrc = false;
        }
        if(!findsrc){
          var attr = pplrsrcset.eq(i).attr('data-srcset');
        }

      if (typeof attr !== typeof undefined && attr !== false) {
         if(attr.split(',').length>1){
                for (var k = 0; k < attr.split(',').length; k++) {
                  var srcsetwidth = parseInt(attr.split(',')[k].split(' ').pop());
                  if( srcsetwidth > 300 && srcsetwidth < 1000){
                    pplrsrcset.eq(i).attr('src',jQuery.trim(attr).replace(/(\r\n|\n|\r)/gm, "").split(',')[k].split(' ').filter(n => n)[0]).addClass('pplrcsrset');
                  }
                }
            }
            else{
              pplrsrcset.eq(i).attr('src',attr).addClass('pplrcsrset');
            }
      }
      }
    }
}

var pplrimg = all_img.filter(function () {
    var src = jQuery(this).attr("src");
    return src && (src.includes("/products/") || src.includes("/files/"));
});


var pplrwidths = pplrimg.map(function() {
if (queryimgmatch(jQuery(this))) {
  return jQuery(this).width();
} else {
  return 0;
}
}).get();
var pplrmaxwidth = Math.max.apply(null, pplrwidths);

if (pplrnotfound && _CP[10] > 2) {
  for (var i = 0; i < pplrimg.length; i++) {
    if (pplrimg.eq(i).parents().hasClass("pplr-p-left")) {
      if (pplrnotfound) {
        var first_prod_img = pplrimg.eq(i);
        var pplrnotfound = false;
        return first_prod_img;
      }
    }
  }
}

if (pplrnotfound && _SJ[10] !=='') {
  for (var i = 0; i < pplrimg.length; i++) {
    if (pplrimg.eq(i).parents('.'+_SJ[10])[0]) {
      if (pplrnotfound && pplrimg.eq(i).offset().left >= -150) {
        var first_prod_img = pplrimg.eq(i);
        var pplrnotfound = false;
        return first_prod_img;
      }
    }
  }
}

var vnt = '.so-product-images-featured-wrap .so_slick-active,.product-detail .slick-active,.module[data-effect="zoom"],.product-single__photos .slick-active,.product__main-photos .slick-active,.product-main-image .slick-active,.product-photo-container .slick-active,.product-image-container .is-selected,.product-gallery .is-selected,.product_gallery .is-selected,.'+_SJ[10]+',.pplr-p-left,.product-single__photo-wrapper,.product-single__image,.product-single__photo,.flex-active-slide,.product__slideshow .slick-active,.product-gallery--viewer [data-gallery-selected="true"],.product__media-item .product__media';

if(pplr_user_id>19000){
  vnt = '.product__media-item .product__media';
}

if (pplrnotfound && pplr_user_id < 19001 && !pplr_test_mode) {
  for (var i = 0; i < pplrimg.length; i++) {
    if (queryimgmatch(pplrimg.eq(i))) {
      if (pplrimg.eq(i).parents(vnt)[0]) {
        if (pplrnotfound && pplrimg.eq(i).offset().left >= -100) {
            var first_prod_img = pplrimg.eq(i);
            var pplrnotfound = false;
            return first_prod_img;
        }
      }
    }
  }
}

if (pplrnotfound && pplr_user_id < 19001 && !pplr_test_mode) {
for (var i = 0; i < pplrimg.length; i++) {
  if (pplrimg.eq(i).parents(vnt)[0]) {
    if (pplrnotfound && pplrimg.eq(i).offset().left >= -100) {
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
    }
  }
}
}

if (pplrnotfound && pplr_user_id < 19001 && !pplr_test_mode) {
for (var i = 0; i < pplrimg.length; i++) {
  if (pplrimg.eq(i).parents('.slick-active,.is-selected')[0]) {
    if (pplrnotfound  && pplrimg.eq(i).width() > (pplrmaxwidth - 100)) {
      if(pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
        var first_prod_img = pplrimg.eq(i);
        var pplrnotfound = false;
        return first_prod_img;
     }
    }
  }
}
}

if (pplrnotfound) {
if (_CP[0] > 0 && window.pplr_no_carousel) {
  var variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
  var pplr_image_now = check_variant_image(variant_now).split("/").pop().split(".").slice(0, -1).join(".").split();
    for (var i = 0; i < pplrimg.length; i++) {
      if (pplrnotfound && pplrimg.eq(i).offset().left >= -5) {
            if(pplr_image_now.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_image_now.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
                var first_prod_img = pplrimg.eq(i);
                pplrnotfound = false;
                break;
            }
      }
    }

}
}

if (pplrnotfound && (pplr_user_id>19000 || pplr_test_mode)) {
for (var i = 0; i < pplrimg.length; i++) {
  if (queryimgmatch(pplrimg.eq(i))) {
    if (checkopacity(pplrimg.eq(i)) && pplrimg.eq(i).width() > (pplrmaxwidth - 100)  && pplrimg.eq(i).offset().left >= -5) {
        if(pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
            if(isElementOnTopWithChildCheck(pplrimg.eq(i))){
                var first_prod_img = pplrimg.eq(i);
                pplrnotfound = false;
                break;
            }

        }
    }
  }
}
}

if (pplrnotfound) {
for (var i = 0; i < pplrimg.length; i++) {
  if (queryimgmatch(pplrimg.eq(i))) {
    var pplrimgnew = pplrimg.eq(i);
    var visible = isElementVisible(pplrimgnew.parent()[0]);
    if (checkopacity(pplrimg.eq(i)) && pplrimg.eq(i).width() > (pplrmaxwidth - 100) && visible && pplrnotfound  && pplrimg.eq(i).offset().left >= -5) {
        if(pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
            var first_prod_img = pplrimg.eq(i);
            pplrnotfound = false;
            break;
        }
    }
  }
}
}


if (pplrnotfound) {
for (var i = 0; i < pplrimg.length; i++) {
  if (queryimgmatch(pplrimg.eq(i))) {
    if (checkopacity(pplrimg.eq(i)) && pplrimg.eq(i).width() > (pplrmaxwidth - 100) && pplrnotfound && pplrimg.eq(i).offset().left >= -5) {
        if(pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
            var first_prod_img = pplrimg.eq(i);
            pplrnotfound = false;
            break;
        }
    }
  }
}
}


if (pplrnotfound) {
for (var i = 0; i < pplrimg.length; i++) {
  if (pplrnotfound && pplrimg.eq(i).offset().left >= -5) {
        if(pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
            var first_prod_img = pplrimg.eq(i);
            pplrnotfound = false;
            break;
        }
  }
}
}


if (pplrnotfound) {
for (var i = 0; i < pplrimg.length; i++) {
        if(pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[0]) || pplr_img_name_array.includes(if_exist_in_s_file(pplrimg.eq(i))[1])){
          var first_prod_img = pplrimg.eq(i);
          var pplrnotfound = false;
          return first_prod_img;
      }
    }
}



if (pplrnotfound) {
  var first_prod_img = pplrimg.eq(0);
}

return first_prod_img;
}
function WebFontConfig_pplr(){
  WebFontConfig = {
  custom: {
  families: fNamearray
  },
  loading: function() {},
  active: function() {
  font_loaded = true;
  LoadPplrWithFont(pplrframe);
  
  console.log('font loaded');
  },
  inactive: function() {
  console.log('font error');
  LoadPplrWithFont(pplrframe);
  font_loaded = false;
  },
  timeout: 3000
};
loadScript_pplr('//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', function() {
})
}

function dowebfontconfig(pplr,pplr_form) {
pplr.parent().addClass('pplr');
var imgObj3 = new Image();
imgObj3.onload = function() {
      pplronload(pplr,pplr_form);
  if(fNamearray.length>0){
    WebFontConfig_pplr();
  }
  else{
    font_loaded = true;
    LoadPplrWithFont(pplrframe);
  }
}
imgObj3.onerror = function() {
 console.error('Canvas Reference Image SRC Not Found');
};
imgObj3.src = pplr.attr('src');
}


function LoadPplrWithFont(frame, t, tis, k) {

    if(pplr_event_attached){
      jQuery(tis).parents(RP).removeClass('pplr_red_wrapper');
    }
    // var _m = _PP[_CM + frame].split(',');
    var _m = pplr_values[frame];
    var pplr_load = parseInt(_CP[8]);

    clearTimeout(checktimout);
    pplrframe = frame;
    if(typeof pplr_custom_LoadPplrWithFont !=='undefined'){
        console.log('pplr_custom_LoadPplrWithFont');
        pplr_custom_LoadPplrWithFont(pplrframe);
    }

    var speed = 300;

    if (tis) {

    if (jQuery(tis).hasClass('pplr_text')) {
      pplr_values[frame][pplr_last_idx].text_val = jQuery(tis).val();
    var speed = 300;
    if(window.innerHeight > window.innerWidth && jQuery(".pplr img")[0]){
        if(jQuery(".pplr img").get(0).naturalWidth>1000 || jQuery(".pplr img").get(0).naturalHeight>1000){
        speed = 500;
        }
    }
    var a = jQuery(".jscolor[data-frame='" + frame + "'],.pplr_font[data-frame='" + frame + "'],.pplrjscolor[data-frame='" + frame + "'],.pplr-size-select[data-frame='" + frame + "'],.pplr-align-select[data-frame='" + frame + "']");

    if (jQuery.trim(jQuery(tis).val()) !== '') {
        if (jQuery(".pplr-wrapper[data-main='" + frame + "']").css('display') !== 'none') {
        a.each(function() {
            var hd = jQuery(this);
            var name = hd.attr('name');
            var krb = jQuery('.pplr-wrapper:not(.p_h_d_p):not(.pplr_no_preview) .pplr_aux[name="'+name+'"]');
                krb.prop('disabled', false);
        });
        }
    } else {
        a.each(function() {
        var hd = jQuery(this);
        var name = hd.attr('name');
        var krb = jQuery('.pplr_aux[name="'+name+'"]');
            var empty = true;
                krb.each(function() {
                var frame = jQuery(this).attr('data-frame');
                var text = jQuery('.pplr_text[data-frame=\"' + frame + '"]');
                text.each(function() {
                    if(jQuery.trim(jQuery(this).val()) !== '') {
                    empty = false;
                    }

                })

                })
            if(empty){
                krb.prop('disabled', true);
            }
        })

    }
    }
    }


    if (tis) {
        if (jQuery(tis).hasClass('pplr_text')){
        checktimout = setTimeout(function() {
            var text = jQuery(tis).val();
            text = text.replace(/(<([^>]+)>)/ig, "");
            var b = jQuery(tis);
            var english = /^[A-Za-z0-9]*$/;
            if (english.test(text) && !IsAndroidp){
                b.val(text);
            }
            if (b.hasClass('tocapitalize')) {
            b.val(capitalize(text));
            }
            if (b.hasClass('tocapitalizeFirstLetter')) {
            b.val(capitalizeFirstLetter(text));
            }
        },200)
        }
    }

    if(Shopify.shop == 'christ'+'followerlife-1'+'com.myshopify.com'){
        speed = 15000;
    }



    checktimout = setTimeout(function() {
        if (tis) {
            if (jQuery(tis).hasClass('pplr_text')){
                var _n = jQuery(tis).siblings('.pplr-character-count');
                var pplrline = jQuery(tis).attr('maxline');

                if (typeof pplrline == typeof undefined || pplrline == false || parseInt(pplrline) < 1) {
                    pplrline = 1;
                }
                var maxchar = jQuery(tis).attr('data-maxlength');
                if (typeof maxchar == typeof undefined || maxchar == false) {
                    maxchar = _m[17];
                }
                else{maxchar = maxchar / pplrline}
                limitTextarea(tis, pplrline, maxchar,_m[38],_m[13],_n);
                var t_frame = jQuery(tis).attr('data-frame')
                pplr_values[t_frame][pplr_last_idx].text_val = jQuery(tis).val();

            }
        }

        if (t) {
            var p_c_a = ['.pplr_monogram', '.jscolor'];
            for (var index = 0, len = p_c_a.length; index < len; ++index) {
                jQuery(p_c_a[index]).each(function() {
                    var t = jQuery(this);
                    var thisframe = jQuery(p_c_a[index] + "[data-frame='" + frame + "']");

                    if(t.attr('data-frame') == frame && index == 1){
                      if(thisframe.hasClass("minicolors-input")){
                        jQuery(`.minicolors-input[name="${thisframe.attr('name')}"]`).each(function() {
                          pplr_values[jQuery(this).attr('data-frame')][6] = thisframe.val();
                        })
                      }
                    }

                    if (t.attr('data-frame') !== frame) {
                    if (t.attr('name') == thisframe.attr('name') && !thisframe.parents('.pplr-wrapper').hasClass('cp-sel-Photos') && !t.hasClass('pplr_imgg')) {
                    if (t.val() !== thisframe.val()) {
                          t.val(thisframe.val());
                          if(t.hasClass('pplr_text') && !t.hasClass('jscolor')){

                            var _n = t.siblings('.pplr-character-count');
                            var pplrline = t.attr('maxline');

                            if (typeof pplrline == typeof undefined || pplrline == false || parseInt(pplrline) < 1) {
                                pplrline = 1;
                            }
                            var maxchar = t.attr('data-maxlength');
                            if (typeof maxchar == typeof undefined || maxchar == false) {
                                maxchar = _m[17];
                            }
                            else{maxchar = maxchar / pplrline}
                            limitTextarea(t[0], pplrline, maxchar,_m[38],_m[13],_n);
                            var t_frame = t.attr('data-frame')
                            pplr_values[t_frame][pplr_last_idx].text_val = t.val();

                          }
                      }
                      
                      var t_frame = t.attr('data-frame');

                      if(!t.hasClass('jscolor')){
                        pplr_values[t_frame][pplr_last_idx].text_val = t.val();
                      }
                      else{
                        if(!t.hasClass("minicolors-input")){
                          pplr_values[t_frame][6] = thisframe.attr('data-value');
                        }
                      }

                    }
                    }
                });
            }

            var p_c_c = ['.pplr_font', '.pplrjscolor'];
            for (var index = 0, len = p_c_c.length; index < len; ++index) {
                jQuery(p_c_c[index]).each(function() {
                    var t = jQuery(this);

                    var thisframe = jQuery(p_c_c[index] + "[data-frame='" + frame + "']");
                    var current_frame = t.attr('data-frame');
                    // if(index === 0 && thisframe.attr('data-value')){
                    //   pplr_values[current_frame][0] = thisframe.attr('data-value');
                    //   pplr_values[current_frame][pplr_last_idx].fheight = thisframe.attr('data-height');
                    // }



                    if (current_frame !== frame) {
                        if (t.attr('name') == thisframe.attr('name') && !thisframe.parents('.pplr-wrapper').hasClass('cp-sel-Photos')) {
                        if (t.val() !== thisframe.val()) {
                        t.val(thisframe.val());
                        t.attr('data-value', thisframe.attr('data-value'));
                        t.attr('data-height', thisframe.attr('data-height'));
                        if(index === 1){
                           pplr_values[current_frame][6] = thisframe.attr('data-value');
                        }
                        if(index == 0){
                            pplr_values[current_frame][0] = app_link_pplr+thisframe.attr('data-value');
                        }
                        t.parent().find('span[data-color=\"' + thisframe.attr('data-value') + '"]').addClass('selected').siblings().removeClass('selected');
                        t.parent().find('span[data-value=\"' + thisframe.attr('data-value') + '"]').addClass('selected-font').siblings().removeClass('selected-font');
                        t.parent().find('.pplr-selecter-selected:not(.dropdowncolor)').text(thisframe.val()).css('font-family',thisframe.attr('data-value').replace(".ttf", ""));
                        var priceval = t.parent().find('.selected-font,.pplrgcolor .pplr-swatch-element.selected');
                        if(priceval[0]){
                            var ntv = priceval.attr('data-pplr_price');
                            t.attr('data-pplr_price', ntv);
                            if(ntv>0){t.addClass('pplraddprice');}
                            }
                        t.parent().find('.pplr-selecter-selected .colorminithumb').css("background", thisframe.attr('data-value'));
                        t.parent().find('.dcolorname').text(thisframe.val());
                        }
                        }
                    }

                });
            }


            jQuery('.img_url').each(function() {
            var t = jQuery(this);
            var thisframe = jQuery(".img_url[data-frame='" + frame + "']");
            var pplr_crop = jQuery(".pplr-crop[data-frame='" + t.attr('data-frame') + "']");
            var frame_pplr_crop = jQuery(".pplr-crop[data-frame='" + frame + "']");
            if (t.attr('data-frame') !== frame && !t.siblings('.pplr_monogram').hasClass('pplr_imgg') && !thisframe.siblings('.pplrjscolor')[0]) {
            var tab1 = 1;
            var tab2 =1;
            if(t.parents('.pplr_tab')[0]){
            tab1 = t.parents('.pplr_tab').data('tab');
            }
            if(thisframe.parents('.pplr_tab')[0]){
            tab2 = thisframe.parents('.pplr_tab').data('tab');
            }
            if (t.attr('data_name') == thisframe.attr('data_name') && tab1 == tab2){
            if (t.attr('data-psrc') !== thisframe.attr('data-psrc')) {

                t.attr('data-psrc',thisframe.attr('data-psrc'));
                t.attr('data-newr',thisframe.attr('data-newr'));
                t.attr('copy','1');
            }
            if (pplr_crop.val() !== frame_pplr_crop.val()) {
                pplr_crop.val(frame_pplr_crop.val());
                pplr_values[t.attr('data-frame')][22] = frame_pplr_crop.val(); // set crop val
            }

            }



            }

            });

          if (t) {
              window.PPLR_CAlCULATE_PRICE();
            }
  
        }


        var check_frame_v = frame;
        if(pplr_is_views && jQuery(tis).parents('.pplr-wrapper')){
          const view_id = jQuery(tis).parents('.pplr-wrapper').attr('data-pview');
          if(view_id != pplr_active_view_id){
            const name = jQuery(tis).attr('name');
            jQuery(`.pplr-wrapper [name="${name}"]`).each(function(){
              if(jQuery(this).closest(".pplr-wrapper").attr('data-pview') == pplr_active_view_id){
                check_frame_v = jQuery(this).attr('data-frame');
              }
            })
          }
        }


        var _kk = true;
        if (pplr_load < 2 || _CP[10] >2) {
            checkpplrClass(check_frame_v, false, false);
            _kk = false;
        }else{
            pplrcomplete();
        }

        if (k && pplr_load < 2 && _kk) {
            checkpplrClass(check_frame_v, false, false);
        }else{
            pplrcomplete();
        }

    },speed) ;

}


function pplrnewload() {
var pplr = first_prod_img();
p_p_w_r();
jQuery('.pplr_loader').remove();
jQuery('.blurr').removeClass('blurr');
pplr.parent().addClass('pplr');
//LoadPplrWithFont(pplrframe);
}

function check_current_frame(pplr){
if (_CP[0] > 0) {
return true;
}


var pplrRefImage = pplr.attr('src').split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/").pop().split(".").slice(0, -1).join(".");
var pplrRefImage2 = pplr.attr('src').split("?")[0].replace('_crop_center.', ".").split("/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");

for (var ii = 1; ii < parseInt(_CP[1])+1; ii++) {
    var searchUrl = _PP[_CM + ii].split(",")[18];

    if(pplr_is_views){
        var view_id = _PP[_CM + ii].split(",")[92];
        if(view_id){
          searchUrl = pplr_views[view_id][1];
        }
      }

    if(searchUrl.indexOf('/products/') == -1 && searchUrl.indexOf('/files/') == -1){searchUrl =app_link_pplr+resizepplr+searchUrl;
                                                  }
    searchUrl = searchUrl.split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/").pop().split(".").slice(0, -1).join(".");
    if (pplrRefImage === searchUrl && pplrRefImage !=='' || pplrRefImage2 === searchUrl && pplrRefImage2 !=='') {
      pplrframe = ii;
      return true;
    }

}
return false;
}

function recursivelycheck(recursivetime) {

    if(recurstop){
        return;
    }
    var pplr = first_prod_img();

    if (jQuery('.pplr')[0] && check_current_frame(pplr)) {
        if (jQuery('.pplr img:visible:first').attr('src')  !== pplr.attr('src') || pplrcurrentimage !== pplr[0].currentSrc || jQuery(".pplr").offset().left < -10 || jQuery(".pplr").offset().left > jQuery(window).width()-jQuery(".pplr").width()+1) {
            console.log('Image Changed'); 
            check_current_frame(pplr);
            checkpplrClass(pplrframe, false, true);                

        }
    } else {
        check_current_frame(pplr);
        checkpplrClass(pplrframe, false, true);
    }
    recursivetime1 = recursivetime + 100;
    if (recursivetime1 < 3000) {
        checktimout = setTimeout(function() {
            recursivelycheck(recursivetime1);
        }, 100);
    }
}

function if_change_image(tis){

    if (_CP[0] > 0) {
        var pplr_img_now = p_img_now(pplrframe,tis);
    }

    if (!jQuery(tis).parent().hasClass('pplr') && !create_pplr && !jQuery(tis).hasClass('pplr')) {
        if(p_d_o){
            p_p_w_r();
            return;
        }
        if (_CP[8] > 0 || jQuery('.pplr')[0]) {
            clearTimeout(checktimout);
                var s = 100;
            if(window.innerHeight > window.innerWidth){
                s = 500;
            }
            checktimout = setTimeout(function() {
                recurstop = false;
                var recursivetime1=0;
                recursivelycheck(100); 
                window.PPLR_CAlCULATE_PRICE();
            }, s);
        } else {
            p_p_w_r();
        }
    }
}




function checkpplrClass(pplrframe, d, t) {
    var total_hidden = 0;
    for(let i = 1; i <= parseInt(_CP[1]); i++){
      if(pplr_values[i][pplr_last_idx]?.hidden){
        total_hidden++;
      }
    }
    // if($PP_EL('.pplr_no_preview[data-main]').length ==parseInt(_CP[1]) && _CP[10] <3){
    if(total_hidden == parseInt(_CP[1]) && _CP[10] <3){
        p_p_w_r();
        jQuery('.pplrabs,.pplr_loader').remove(); 
        jQuery(".pplrloadingimage").remove();
         if(!pplr_event_attached){
            pplr_event_attached = true;
              setTimeout(function() {
                pplr_manage_event();
              },100)
            setTimeout(function() {
              checkinventory();
            }, 200);
          }
        return;
    }

    if (d) {
        var checkpplr = d.find("img");
        main_pplr_el = d;
        p_p_w_r();
        checkpplr.parent().addClass("pplr");
        CheckpplrImage(pplrframe, false);
    } else {

        if(_CP[10] > 2){
            var p_left = jQuery(".pplr-p-left .pplr_popup_image[src*='product-personalizer/images']:visible");
            if(p_left[0]){
              var checkpplr = p_left;
            }
            else{
              var checkpplr = first_prod_img();
            }
        } else{
          if(pplr_event_attached){
            var checkpplr = first_prod_img();
          }else{
            var pplr_f = jQuery(".pplr");
            if(pplr_f[0]){
              var checkpplr = pplr_f.find("img:visible:first");
            }
            else{
              var checkpplr = first_prod_img();
            }
          }
        }


        var currentSrc = false;
        if(checkpplr[0]){
            if(checkpplr[0].currentSrc){
                if(pplrcurrentimage !== checkpplr[0].currentSrc && pplr_event_attached){
                    currentSrc = true;
                }
            }
        }


        // newly added
        if(!main_pplr_el || main_pplr_el?.length < 1){
          main_pplr_el = checkpplr.parent();
        }

        if(_CP[10] == 2){
          main_pplr_el = jQuery(".pplr");
        }

        if (main_pplr_el[0]) {
          if(_SJ[10] !==''){
            if(!main_pplr_el.parents('.'+_SJ[10])[0] && checkpplr.parents('.'+_SJ[10])[0] &&  !main_pplr_el.is(jQuery('.'+_SJ[10]))){
              currentSrc = true;
            }
          }

        if (!main_pplr_el.hasClass('pplr') || main_pplr_el.find("img:visible:first").attr("src") !== checkpplr.attr("src") || main_pplr_el.offset().left < 0 || main_pplr_el.offset().left > jQuery(window).width()-main_pplr_el.width() || currentSrc) {
                p_p_w_r();
                main_pplr_el = checkpplr.parent();
                main_pplr_el.addClass("pplr");
            }
        } else {
          main_pplr_el = checkpplr.parent();
          main_pplr_el.addClass("pplr");
        }

        var p_par = main_pplr_el.parent();

        if(parseInt(p_par.css('padding-top'))>200 && main_pplr_el.css('position') !=='absolute'){
          var ptop = p_par.css('padding-top');
            p_par.addClass('pplr_parent');
            p_par.css('min-height',ptop);
        }

        if (t) {
            CheckpplrImage(pplrframe, true);
        } else {
            CheckpplrImage(pplrframe,false,main_pplr_el);
        }
        // newly added

        // if (jQuery(".pplr")[0]) {
        //     if(_SJ[10] !==''){
        //       if(!jQuery(".pplr").parents('.'+_SJ[10])[0] && checkpplr.parents('.'+_SJ[10])[0]){
        //         currentSrc = true;
        //       }
        //     }

        // if (jQuery(".pplr img:visible:first").attr("src") !== checkpplr.attr("src") || jQuery(".pplr").offset().left < 0 || jQuery(".pplr").offset().left > jQuery(window).width()-jQuery(".pplr").width() || currentSrc) {
        //         p_p_w_r();
        //         checkpplr.parent().addClass("pplr");
        //     }
        // } else {
        //     checkpplr.parent().addClass("pplr");
        // }

        // var p_par = jQuery('.pplr').parent();

        // if(parseInt(p_par.css('padding-top'))>200 && jQuery('.pplr').css('position') !=='absolute'){
        //     p_par.addClass('pplr_parent');
        // }

        // if (t) {
        //     CheckpplrImage(pplrframe, true);
        // } else {
        //     CheckpplrImage(pplrframe);
        // }
    }
}

  function p_p_w(pplr){
    if(pplr_event_attached){
      pplr = jQuery(".pplr img[src*='/\']:visible:first,.pplr_print_main.pplr img"); 
      var a = jQuery('.pplr_preview_wrapper');
    }
    else{
      pplr = main_pplr_el.find("img[src*='/\']:visible:first") || jQuery(".pplr img[src*='/\']:visible:first"); 
      var a = [];
    }
      
      if(!a[0]){
        var pplr_p = pplr.parent();
          pplr_p.append('<span class="pplr_preview_wrapper" style="position:absolute;"></span>');
          a = pplr_p.find('.pplr_preview_wrapper');
      }
  
      if(pplr){
          if(pplr.height()==0){
              var cc = pplr;
              var w = cc.get(0).naturalWidth;
              var h = cc.get(0).naturalHeight;
              var pw = pplr.width();
              var newh = pw*h/w;
              if(newh>0){
                  pplr.parent().height(newh);
              }
          }
          if(pplr.height()>0 && pplr.width()>0){
              a.width(pplr.width());
              a.height(pplr.height());
          }
          else{ 
              setTimeout(function() {
                  p_p_w();
              },250)
          }
      }
      else{
          setTimeout(function() {
              p_p_w();
          },250)
      }
  
  }

function p_p_w_r(){
    jQuery('.pplr_preview_wrapper').remove();
    jQuery(".pplr").removeClass("pplr");
    if(!create_pplr){
        jQuery(".pplr_parent").removeClass("pplr_parent");
        jQuery('.pplr_final').removeClass('pplr_final');
    }
    jQuery('.p_p_old').removeClass('p_p_old');

}

var pplr_is_image_change = false;

function pplrsingleimage(pplr, frame, pplrRefImage, pplrRefImage2, t){

    // var searchUrl = _PP[_CM + frame].split(",")[18];
    var searchUrl = pplr_values[frame][18];
    if(pplr_is_views){
        var view_id = pplr_values[frame][92];
        if(view_id){
          searchUrl = pplr_views[view_id][1];
        }
      }

    var pplrRefImage3 = pplrcurrentimage.split("?")[0].replace('_crop_center.', ".").split("/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");

    // if views exist then the field image will be based on views

    if(pplr_is_views && !create_pplr){
          pplr_pre_type_active_sync(view_id, false);
    }

    pplr_is_image_change = true;


    if(searchUrl.indexOf('/products/') == -1 && searchUrl.indexOf('/files/') == -1){
        searchUrl =app_link_pplr+resizepplr+searchUrl;
    }


    var searchUrlFirst = searchUrl;
    searchUrl = searchUrl.split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/").pop().split(".").slice(0, -1).join(".");


    if (t) {

        if (pplrRefImage === searchUrl || pplrRefImage2 === searchUrl && pplrRefImage2 !=='') {
            pplr_image = pplr.attr("src");
            var attr = pplr.attr('srcset');
            if (typeof attr !== typeof undefined && attr !== false) {
                if(pplr.attr("srcset").split(',').length>1){
                for (var k = 0; k < pplr.attr("srcset").split(',').length; k++) {
                    var abcd = pplr.attr("srcset").split(',')[k].trim().split(' ')[0];
                    if(abcd.indexOf('/products/') > -1 || abcd.indexOf('/files/') > -1){
                    pplr_image = abcd;
                    }
                    var srcsetwidth = parseInt(pplr.attr("srcset").split(',')[k].split(' ').pop());
                    if(srcsetwidth>jQuery(".pplr").width() && srcsetwidth > 500){
                    break;
                    }
                }
                }
            }
            p_p_w(pplr);

            update_pplr_wrapper();
            ChangeCanvas(frame);
        } else {
            if(pplrRefImage3 !== pplrRefImage2 || searchUrl.indexOf('/products/') == -1 && searchUrl.indexOf('/files/') == -1){

                if(!pplr[0]){
                    pplr = first_prod_img();
                }
                if(pplrcurrentimage !== pplr[0].currentSrc){
                    p_p_w_r();
                    console.log('Not Matched');
                    jQuery('.pplrabs').remove();
                }
                else{
                if(!jQuery('.pplr .pplr_preview_wrapper')[0]){
                    p_p_w_r();
                }
                }
            }

        }

    } else {
        pplr_image = searchUrlFirst+pplr_no_day;
        p_p_w(pplr);
        update_pplr_wrapper();
        ChangeCanvas(frame);
    }


}

function check_variant_image(vid){
    for (var j = 0; j < pplr_product["variants"].length; j++) {
        if(pplr_product["variants"][j]['id'] == vid){
        return pplr_product["variants"][j]["featured_image"]["src"];
        }
    }
}


function CheckpplrImage(frame, t , main_pplr_el) {


    if(pplr_event_attached || !main_pplr_el){
        var pplr = jQuery(".pplr img[src*='/\']:visible:first,.pplr_print_main.pplr img"); 
      }
      else{
        var pplr = main_pplr_el.find("img[src*='/\']:visible:first"); 
      }
    if(!pplr[0]){
        setTimeout(function() {
            CheckpplrImage(frame, t);
        },1000);
        return;
    }

    var pplrRefImage = pplr.attr("src").split("?")[0].replace('_crop_center.', ".").replace(queryreplacestring, ".").split("/").pop().split(".").slice(0, -1).join(".");

    var pplrRefImage2 = pplr.attr("src").split("?")[0].replace('_crop_center.', ".").split("/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");
   
    if(pplr.attr("src").indexOf('/products/') == -1 && pplr.attr("src").indexOf('/files/') == -1){
        pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2,t);
        return; 
    }

    var attr = pplr.attr('srcset');
    if (typeof attr !== typeof undefined && attr !== false) {
        if(pplr.attr("srcset").split(',').length>1){
            var pplrRefImage = pplr.attr("srcset").split(',')[0].replace('_crop_center.', ".").split("?")[0].replace(queryreplacestring, ".").split("/").pop().split(".").slice(0, -1).join(".");
            var pplrRefImage2 = pplr.attr("srcset").split(',')[0].replace('_crop_center.', ".").split("?")[0].split("/").pop().split(".").slice(0, -1).join(".").split("_").slice(0, -1).join("_");
        }
    }


    if (_CP[0] > 0) {
        var pplr_search_image = true;
        var variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
        if (pplr_product["variants"][0]["featured_image"]) {
            var searchUrlFirst = pplr_product["variants"][0]["featured_image"]["src"];
            for (var j = 0; j < pplr_product["variants"].length; j++) {
                if (pplr_product["variants"][j]["featured_image"]) {
                    var searchUrl = pplr_product["variants"][j]["featured_image"]["src"];
                    var searchUrl2 = pplr_product["variants"][j]["featured_image"]["src"];
                    searchUrl = searchUrl.split("?")[0].replace('_crop_center.', ".").split("/").pop().split(".").slice(0, -1).join(".");
                    if (pplrRefImage === searchUrl || pplrRefImage2 === searchUrl) {
                        pplr_image = pplr.attr("src");
                        var attr = pplr.attr('srcset');
                        if (typeof attr !== typeof undefined && attr !== false) {
                            if(pplr.attr("srcset").split(',').length>1){
                                for (var k = 0; k < pplr.attr("srcset").split(',').length; k++) {
                                    var abcd = pplr.attr("srcset").split(',')[k].trim().split(' ')[0];
                                    if(abcd.indexOf('/products/') > -1 || abcd.indexOf('/files/') > -1){
                                        pplr_image = abcd;
                                    }
                                    var srcsetwidth = parseInt(pplr.attr("srcset").split(',')[k].split(' ').pop());
                                    if(srcsetwidth>jQuery(".pplr").width() && srcsetwidth > 500){
                                        break;
                                    }
                                }
                            }
                        }

                        if(variant_now != pplr_product["variants"][j]['id']){
                        console.log('variant mismatch');
                        if(t){
                            //update for https://mylittlecandlefr.myshopify.com/products/2-zepto
                        // jQuery(_P_P).parents('form').find("input[name='id']").val(pplr_product["variants"][j]['id']);
                        // variant_now = pplr_product["variants"][j]['id'];

                        }else{
                            pplr_image = check_variant_image(variant_now);
                        }
                        }
                        p_p_w(pplr);
                        update_pplr_wrapper();
                        ChangeCanvas(frame);
                        pplr_search_image = false;
                        console.log('found');
                        break;
                    } else {}
                }
            }
            if (pplr_search_image) {
                if (t) { 
                      if(variant_now != pplr_variant_now){
                          pplr_image = check_variant_image(variant_now);
                          p_p_w(pplr);
                          update_pplr_wrapper();
                          ChangeCanvas(frame);
                          pplr_variant_now = variant_now;
                      }else{
                        p_p_w_r();
                        console.log('Not Matched');
                        jQuery('.pplrabs').remove();
                      }
                } else {

                     pplr_image = check_variant_image(variant_now);
                    p_p_w(pplr);
                    update_pplr_wrapper();
                    ChangeCanvas(frame);
                }
            }
        } else {
            pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2);
        }
    } else {
        pplrsingleimage(pplr,frame,pplrRefImage,pplrRefImage2,t);
    }
}

function update_pplr_wrapper(){
    if(create_pplr){
        return;
    }

    var a = main_pplr_el.find('.pplr_preview_wrapper');
    var b = main_pplr_el.find('img:visible:first');
    var c = main_pplr_el;

    if(c.height()<1){
      c.css('min-height', b.css('height'));
    }
    var pw = c.width()/2-50;

    if(a[0] && b[0]){
        a.css('left', b.css('padding-left'));
        if(b.width()>50 && parseInt(b.css('margin-left')) < pw){
            a.css('margin-left', b.css('margin-left'));
            var offset_left = b.offset().left-  a.offset().left;
            if(offset_left>0 && offset_left<pw){
            a.css('left', offset_left);
            }
        }
        a.css('margin-top', b.css('margin-top'));
        var c = b.offset().top;
        var d = a.offset().top;
        if(c-d>5 || c-d<-5){
            a.css('top', c-d);
        }
        if(a.height()==b.height()){
            a.css('top', 0);
        }
    }
}

var eqn = 1;
var mainCanvas;
var pplr_svg;
function ChangeCanvas(frame, k) {

    pplrloading = true;
    var custom_back = false;

      // setTimeout(() => {
      if(pplrloading && window.PPLR_SHOW_CANVAS_LOADING){
        jQuery(".pplr-main-canvas-loader").remove();
        const loadingDIv = `<div class="crop-image-saving pplr-main-canvas-loader" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;display: flex;align-items: center;justify-content: center;background: #00000012;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style="shape-rendering: auto;display: block;width: 50px;height: 50px;animation: p_loading-spinner .6s linear infinite"><g data-idx="1"><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="6" stroke="#fff" fill="none" cy="50" cx="50" data-idx="2" transform="matrix(0.6845426019583707,-0.7289728569048807,0.7289728569048807,0.6845426019583707,-20.67577294316257,52.2215127473255)">
        </circle><g data-idx="4"></g></g></svg></div>`;
        jQuery(".pplr_preview_wrapper").append(loadingDIv);
      }
    // }, 0);

    // var view_id = _PP[_CM + frame].split(',')[92];
    var view_id = pplr_values[frame][92];
    if(view_id){
      if(pplr_view_set[view_id][0]==0){
        var n_canvas = document.createElement("canvas");
        n_canvas.width = pplr_view_set[view_id][2];
        n_canvas.height = pplr_view_set[view_id][3];
        var n_context = n_canvas.getContext("2d");
        pplr_image = n_canvas.toDataURL();
        custom_back = true;
      }

    }
    else{
        // view_id = _PP[_CM + frame].split(',')[18];
        view_id = pplr_values[frame][18];
    }

    // imgObj3.crossOrigin = 'Anonymous';
    // imgObj3.onload = function() {
    var cur_src = pplr_image;
    if (!create_pplr && pplr_image.indexOf('/products/') >-1 && iOS && _CP[10] >2) {
      cur_src = pplr_image.replace(/.([^.]*)$/,"_900x900."+'$1');
    }else{
        if (pplr_image.indexOf('?v=123') < 0 && pplr_image.indexOf('/products/') < 0 ) {
          if(!custom_back){
            pplr_image = pplr_image +pplr_no_day;
          }
        }
        cur_src = pplr_image;
    }

    p_loadImage(cur_src).then(imgObj3 => {

        var canheight = imgObj3.naturalHeight;
        var canwidth = imgObj3.naturalWidth;
        var ioslimit = 1 ; 
        var wh = canheight * canwidth;

        if(iOS && pisSafari() && wh>16777210 || iOS && pisFacebookOrInstagram() && wh>16777210){
            if(canwidth>4096 && canwidth>canheight){
                ioslimit = 4096/canwidth;
            }else{
                ioslimit = 4096/canheight;
            }
            if(pplr_view_set[view_id][8] > 2 && create_pplr && window.pplr_svg2pdf){
              ioslimit = 1;
            }

              canheight= parseInt(canheight*ioslimit);
              canwidth= parseInt(canwidth*ioslimit);


        }

        if(canwidth>3000 || canheight>3000){
            if(!create_pplr){
            //resizepplr ='resizepplr.php?width=1200&height=1200&file=';
            }
        }

        if(canwidth>2600 && !create_pplr && window.innerHeight > window.innerWidth){
        //resizepplr ='resizepplr.php?width=1000&height=1000&file=';
        }

        if(canheight<1){
            canheight = canwidth*canratio;    
        }else{
            canratio = canheight/canwidth;
        }

        if(canheight<1 && canwidth<1){
            setTimeout(function() {
                console.log('Initial canheight && width = 0');
                ChangeCanvas(frame, k);
            },100)
        } 

        
        mainCanvas = document.createElement('canvas');
        mainCanvas.id = 'pplr_canvas';
        mainCanvas.width = canwidth;
        mainCanvas.height = canheight;
        mainCanvas.style.width = canwidth;
        mainCanvas.style.height = canheight;

        create_svg = false;

        if(pplr_view_set[view_id][8]>2 && create_pplr){
            create_svg = true;
        }

        if(create_svg){
            pplr_svg = new C2S(canwidth,canheight);
        }

        eqn = 1;
        recursivecanvasbottom(pplr_svg,mainCanvas,frame,eqn,imgObj3);
    }).catch(err => {
      console.log(err);
      alert("Background Image removed or deleted ASDF .Please rectify configuration with valid background image " + cur_src)
    })
    // }

    // imgObj3.onerror = function() {
    //     alert("Background Image removed or deleted ASDF .Please rectify configuration with valid background image " + imgObj3.src);
    // };

    // if (!create_pplr && pplr_image.indexOf('/products/') >-1 && iOS && _CP[10] >2) {
    //     imgObj3.src = pplr_image.replace(/.([^.]*)$/,"_900x900."+'$1');
    // }else{
    //     if (pplr_image.indexOf('?v=123') < 0 && pplr_image.indexOf('/products/') < 0 ) {
    //       if(!custom_back){
    //         pplr_image = pplr_image +pplr_no_day
    //       }
    //     }
    //     imgObj3.src = pplr_image;
    // }
}


function canvasbottomcommon(pplr_svg,mainCanvas,frame,eqn,imgObj3){
    if(eqn==_CP[1]){
        eqn = 1;
        recursivecanvasmiddle(pplr_svg,mainCanvas,frame,eqn,imgObj3);
    } else{
        eqn = eqn + 1;
        recursivecanvasbottom(pplr_svg,mainCanvas,frame,eqn,imgObj3);
    }
}

function p_l_i(){
    if(jQuery(window).width()>760){
        if(!jQuery(".pplrloadingimage")[0]){
            jQuery(_P_P).append('<div class="pplrloadingimage"></div>');
        }
        if(!jQuery(".pplrloadingimage")[0]){jQuery(".pplr-p-right").append('<div class="pplrloadingimage"></div>');}
        jQuery('.pplrloadingimage').hide();
        setTimeout(function(){ 
            jQuery('.pplrloadingimage').show(); 
        }, 1000);
    }
}

function recursivecanvasbottom(pplr_svg,mainCanvas,frame,eqn,imgObj3){
    var m_ = pplr_values[eqn]; 
    
    if (m_[13]>6 || m_[16]<2 || m_[39]==3 || pplr_values[eqn][pplr_last_idx]?.hidden) {
        canvasbottomcommon(pplr_svg,mainCanvas,frame,eqn,imgObj3);
    }
    else{

        var frame_data = pplr_values[frame];
        var varifycanvas = frame_data[18];
        var tisvcanvas = m_[18];

        // newly added
        if(pplr_is_views && m_[92]){
            varifycanvas = frame_data[92];
            tisvcanvas = m_[92];
        }
        
        if (m_[13] == 3 || m_[13] == 3.5 || m_[13] == 4) { // newly added

            p_l_i();
            if (tisvcanvas === varifycanvas) {
                // var imginfo = $PP_EL('.pplr-crop[data-frame="' + eqn + '"]').val()?.split('_');
                var imginfo = m_[22]?.split("_");
                if (imginfo.length < 5) {
                    var angle = 0;
                } else {
                    var angle = imginfo[4];
                }

                // var dname = $PP_EL('.pplr_monogram[data-frame=\"' + eqn + '"]').attr('data_name');
                var dname = m_[pplr_last_idx]?.data_name;
                var imageUrls;
                if (!create_pplr && is_pplr_canvas_img_append && jQuery('.pplr-modal-img[data-name=\"' + dname + '"]')[0]) {
                  imageUrls = jQuery('.pplr-modal-img[data-name=\"' + dname + '"]').attr('src').split('|');
                }else{
                    if(pplr_first_load && _CP[8] == 1){
                      imageUrls = [app_link_pplr+m_[15]+pplr_no_day];
                    }else {
                      imageUrls = $PP_EL('.img_url[data-frame=\"' + eqn + '"]').attr('data-psrc').split('|');
                    }
                }
                
                var canvas = document.createElement("canvas");

                var init = 0;
                var colortype = m_[pplr_last_idx]?.colortype ?? 1;

                let isImgPattern = m_[13] == 3 && m_[59] == 1;
                if(m_[15]?.includes("blank.png")){
                  isImgPattern = false;
                }
                
                function  load_img_url(imageUrls,canvas){
                  var cur_src = isImgPattern ? app_link_pplr+m_[15] : imageUrls[0];
                  p_loadImage(cur_src).then(img => {
                      if(init == 0){
                        canvas.width = img.width;
                        canvas.height = img.height;
                      }

                      init = init+1;
                      var ctx = canvas.getContext("2d");
                      ctx.drawImage(img, 0, 0);
                      
                      const imgSrcCheck = imageUrls[0]
                      imageUrls.shift();

                      if(imageUrls.length>0){
                        load_img_url(imageUrls,canvas);
                        return;
                      }
                        imgObj = canvas;
                        if(colortype > 1 || (isImgPattern && imgSrcCheck && app_link_pplr+m_[15] !== imgSrcCheck?.split("?")[0])){
                          var color = m_[6]
                          if(color ==''){
                              color = app_link_pplr+'images/blank.png'+'?v=123'
                          }else{
                              color = app_link_pplr +'images/' + Shopify.shop + '/'+color+pplr_no_day;
                          }
                          p_loadImage(isImgPattern ? imgSrcCheck : color).then(imgObj9 => {
                            if (m_[16] == 2) {
                              if(isImgPattern){
                                imginfo = _PP[_CM+eqn]?.split(",")[22]?.split("_");
                              }
                              pplr_getText(pplr_svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj,imgObj9);
                            }
                            canvasbottomcommon(pplr_svg,mainCanvas,frame,eqn,imgObj3);
                          })
                      }
                      else{
                          if (m_[16] == 2) {
                              pplr_getText(pplr_svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj);
                          }
                          canvasbottomcommon(pplr_svg,mainCanvas,frame,eqn,imgObj3);
                      }
                  }).catch(err => {
                    console.log("Image Not Found in image Set " +eqn+" " + imageUrls[0]);
                    alert("Image Not Found in image Set" +eqn+" " + imageUrls[0]);
                  })
                }

                load_img_url(imageUrls,canvas);

            }
            else{
                canvasbottomcommon(pplr_svg,mainCanvas,frame,eqn,imgObj3);
            }

        } else {    
            canvasbottomcommon(pplr_svg,mainCanvas,frame,eqn,imgObj3);  
        };
    }
}


function recursivecanvasmiddle(pplr_svg,mainCanvas,frame,eqn,imgObj3){
    var canheight = mainCanvas.height;
    var canwidth = mainCanvas.width;
    var ctxRef = mainCanvas.getContext('2d');
    if(create_svg){
        ctxRef = pplr_svg;
    }

    
    var view_id = pplr_values[frame][92]
    if(view_id){}
    else{
        view_id = pplr_values[frame][18]
    }


    if(create_pplr && (createproduct>3 || pplr_view_set[view_id][6]==1)){
        recursivecanvastop(pplr_svg,mainCanvas,frame,eqn);
    }
    else{


        if(create_svg && !window.pplr_svg2pdf){
            var canvas = document.createElement("canvas");
            canvas.width = canwidth;
            canvas.height = canheight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(imgObj3, 0, 0, imgObj3.width, imgObj3.height, 0, 0, canwidth, canheight); 
            imgObj3 = canvas;
        }
        ctxRef.drawImage(imgObj3, 0, 0, imgObj3.width, imgObj3.height, 0, 0, canwidth, canheight); 
        eqn = 1;
        recursivecanvastop(pplr_svg,mainCanvas,frame,eqn);
    }
}


function canvastopcommon(pplr_svg,mainCanvas,frame,eqn){
    if(eqn==_CP[1]){
        if(window.pplr_canvas_rendered){
            window.pplr_canvas_rendered(mainCanvas,function(){window.pplr_canvas_render_final(pplr_svg,mainCanvas,frame,eqn)});
        }
        else{
            window.pplr_canvas_render_final(pplr_svg,mainCanvas,frame,eqn);
        }
    }else{
        eqn = eqn + 1;
        recursivecanvastop(pplr_svg,mainCanvas,frame,eqn);
    }
} 

function recursivecanvastop(pplr_svg,mainCanvas,frame,eqn){

  
    var m_ = pplr_values[eqn]
    if (m_[13]>6 || m_[39]==3 || pplr_values[eqn][pplr_last_idx]?.hidden) {
        canvastopcommon(pplr_svg,mainCanvas,frame,eqn,0);
    }
    else{
      
        var split_pp_value = pplr_values[frame];
        var varifycanvas = split_pp_value[18];
        var left_check = m_[18]

        // newly added
        if(pplr_is_views && m_[92]){
            varifycanvas = split_pp_value[92];
            left_check = m_[92];
        }

        var colortype = m_[pplr_last_idx]?.colortype ?? 1;
        var color = m_[6]
        if(color ==''){
            color = app_link_pplr+'images/blank.png'+'?v=123'
        }else{
            color = app_link_pplr +'images/' + Shopify.shop + '/'+color+pplr_no_day;
        }

        // if (m_[13] == 3 || m_[13] == 4) { prev code
        if (m_[13] == 3 || m_[13] == 3.5 || m_[13] == 4) { // newly added
            p_l_i();
            if (left_check === varifycanvas) {
                var imginfo = m_[22]?.split("_");
                // var imginfo = $PP_EL('.pplr-crop[data-frame="' + eqn + '"]').val().split('_');

                if (imginfo.length < 5) {
                    var angle = 0;
                } else {
                    var angle = imginfo[4];
                }


                // var dname = jQuery('.pplr_monogram[data-frame=\"' + eqn + '"]').attr('data_name');
                var dname = m_[pplr_last_idx]?.data_name;
                var imageUrls;
                if (!create_pplr && is_pplr_canvas_img_append && jQuery('.pplr-modal-img[data-name=\"' + dname + '"]')[0]) {
                  imageUrls = jQuery('.pplr-modal-img[data-name=\"' + dname + '"]').attr('src').split('|');
                }else{
                    if(pplr_first_load && _CP[8] == 1){
                      imageUrls = [app_link_pplr+m_[15]+pplr_no_day];
                    }else {
                      imageUrls = $PP_EL('.img_url[data-frame=\"' + eqn + '"]').attr('data-psrc').split('|');
                    }
                }
                
                var canvas = document.createElement("canvas");

                var init = 0;
                

                const isImgPattern = m_[13] == 3 && m_[59] == 1 && m_[16]==1;

                function  load_img_url(imageUrls,canvas){
                  var cur_src = isImgPattern ? app_link_pplr+m_[15] : imageUrls[0];
                  p_loadImage(cur_src).then(img => {

                    try{
                      if(init == 0){
                        canvas.width = img.width;
                        canvas.height = img.height;
                      }

                    init = init+1;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);

                    const imgSrcCheck = imageUrls[0]
                    imageUrls.shift();

                    if(imageUrls.length>0){
                      load_img_url(imageUrls,canvas);
                      return;
                    }

                    if(!window.pplr_svg2pdf){
                        imgObj = canvas;
                      }
                      else{
                        imgObj = img;
                      }

                      if(colortype > 1 || (isImgPattern && imgSrcCheck && app_link_pplr+m_[15] !== imgSrcCheck?.split("?")[0])){
                          p_loadImage(isImgPattern ? imgSrcCheck : color).then(imgObj9 => {
                            if (m_[16] == 1) {
                                if(isImgPattern){
                                  imginfo = _PP[_CM+eqn]?.split(",")[22]?.split("_");
                                }
                                pplr_getText(pplr_svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj,imgObj9);
                            }
                            canvastopcommon(pplr_svg,mainCanvas,frame,eqn);
                          })
                      }
                      else{
                          if (m_[16] == 1) {
                              pplr_getText(pplr_svg,mainCanvas, eqn, imginfo[0], imginfo[1], imginfo[2], imginfo[3], angle,imgObj);
                          }
                          canvastopcommon(pplr_svg,mainCanvas,frame,eqn);
                      }
                    }
                    catch(err){
                    console.error(err);
                    }

                  }).catch(err => {
                    console.log("Image Not Found in image Set " +eqn+" " + cur_src);
                    alert("Image Not Found in image Set" +eqn+" " + cur_src);
                  })
                }

                load_img_url(imageUrls,canvas);

            }
            else{
                canvastopcommon(pplr_svg,mainCanvas,frame,eqn);
            }

        } else {
            if(colortype>1){
                p_loadImage(color).then(imgObj => {
                  if (left_check === varifycanvas) {
                    pplr_getText(pplr_svg,mainCanvas, eqn,0,0,0,0,0,imgObj);
                  }
                  canvastopcommon(pplr_svg,mainCanvas,frame,eqn);
                })
            }
            else{
                if (left_check === varifycanvas) {
                    pplr_getText(pplr_svg,mainCanvas, eqn);
                }
                canvastopcommon(pplr_svg,mainCanvas,frame,eqn);
            }

        };
    }
}


window.pplr_canvas_render_final = function(pplr_svg,mainCanvas,frame,eqn){

    var pplr_preview_wrapper_el = main_pplr_el.find('.pplr_preview_wrapper').first();

    if(create_pplr){
      pplr_preview_wrapper_el = jQuery('.pplr_preview_wrapper').first();
    }


    var pplr_canvas_el = pplr_preview_wrapper_el.find("#pplr_canvas");
  
    if(create_svg){
        var getsvg = pplr_svg.getSvg();
        // jQuery('.pplr_preview_wrapper').html(getsvg);

        // newly added
        if(pplr_canvas_el.length > 0){
          pplr_canvas_el.replaceWith(getsvg);
        }else {
          pplr_preview_wrapper_el.html(getsvg);
        }
    }
    else{

        // newly added
        if(pplr_canvas_el.length > 0){
          pplr_canvas_el.replaceWith(mainCanvas);
        }else {
          pplr_preview_wrapper_el.html(mainCanvas);
        }

        if(pplr_event_attached){
          pplr_prev_left();
        }


      if(!pplr_first_load){
            if(!create_pplr && jQuery('.pplrabs img')[0]){
                jQuery('.pplrabs img').attr('src',mainCanvas.toDataURL('image/png', 1.0));
            }
          }
    }

    pplr_load_finish(pplr_preview_wrapper_el);

    if(create_pplr){
        if (pplrloadfinish == parseInt(_CP[1]) || _CP[0] > 0) {
            setTimeout(function() {
            pplr_final_print();
            },500);
        }
      else{
          pplrloadfinish=pplrloadfinish+1;
          loadpplrtrns(pplrloadfinish, pplrlarge);
      }
    }
    else{

        pplr_generate_preview(frame);

    }


    if(!pplr_first_load){
      jQuery(".pplr_prev_type_wrapper").remove();
      jQuery(".pplr_arrows").remove();
    }
    // newly added
    // generate pplr dots and arrows

  // if(jQuery(".pplr_prev_type_wrapper").length > 0){
  // }else {
      if(pplr_is_views){
        var pplr_view_preview_type = pplr_views[first_view_id][13]
          if(pplr_total_views > 1){

              var index = 0
                if(pplr_current_view){
                    var pplr_views_keys = Object.keys(pplr_views);
                    index = pplr_views_keys.indexOf(pplr_current_view);
                }

                if(!pplr_first_load && jQuery(".pplr_arrows").length > 0){
                }else {
                    if(pplr_views[first_view_id][14] == 1){
                        const arrows = `
                            <div class="pplr_arrow pplr_arrow_left" data-pv-to="${index}" onclick="pplr_view_to_arrow(this)"><i class="fa fa-chevron-left"></i></div>
                            <div class="pplr_arrow pplr_arrow_right" data-pv-to="${index+1}" onclick="pplr_view_to_arrow(this)"><i class="fa fa-chevron-right"></i></div>
                        `;
                        if(jQuery('#pplr-preview-wrapper').length > 0){
                          setTimeout(() => {
                            jQuery(`<div class="pplr_arrows">${arrows}</div>`).insertAfter("#pplr-preview-wrapper #pplr_canvas");
                          }, 100);
                        }else {
                          jQuery("#pplr_canvas").each(function() {
                            if(jQuery(this).closest(".pplr_crop-modal").length < 1){
                              jQuery(`<div class="pplr_arrows">${arrows}</div>`).insertAfter(this);
                            }
                          })
                        }
                    }
                }

              let preview_type = jQuery(`<div class="pplr_prev_type_wrapper"></div>`);
              if(pplr_view_preview_type == 2){
                  for(var i = 0; i < pplr_total_views; i++){
                      const v_id = Object.keys(pplr_views)[i];
                      preview_type.append(`<div class="pplr-dot pplr-preview-item ${pplr_current_view ? pplr_current_view == v_id ? "active" : "" : i == 0 ? "active" : ""}" data-pview="${v_id}" onclick="pplr_view_to('${v_id}', this)"><span></span></div>`);
                  }
              }else if(pplr_view_preview_type == 3){
                  for(var i = 0; i < pplr_total_views; i++){
                      const v_id = Object.keys(pplr_views)[i];
                      preview_type.append(`<div class="pplr-image-thumbnail pplr-preview-item ${pplr_current_view ? pplr_current_view == v_id ? "active" : "" : i == 0 ? "active" : ""}" data-pview="${v_id}" onclick="pplr_view_to('${v_id}', this)">
                          <img src="${app_link_pplr+pplr_views[v_id][15]}" />
                      </div>`);
                  }
              }else if(pplr_view_preview_type == 4){
                  for(var i = 0; i < pplr_total_views; i++){
                      const v_id = Object.keys(pplr_views)[i];
                      preview_type.append(`<div class="pplr-text-thumbnail pplr-preview-item ${pplr_current_view ? pplr_current_view == v_id ? "active" : "" : i == 0 ? "active" : ""}" data-pview="${v_id}" onclick="pplr_view_to('${v_id}', this)">
                          <span>${pplr_views[v_id][4]}</span>
                      </div>`);
                  }
              }
              if(jQuery('#pplr-preview-wrapper').length > 0){
                setTimeout(() => {
                  jQuery(preview_type.clone(true)).insertAfter("#pplr-preview-wrapper #pplr_canvas");
                }, 100);
              }else {
                jQuery("#pplr_canvas").each(function() {
                  if(jQuery(this).closest(".pplr_crop-modal").length < 1){
                    jQuery(preview_type).insertAfter(this);
                  }
                })
              }

            pplr_preview_wrapper_el.attr("data-pview", 0);
          }
      }
      
      pplr_first_load = false;
  // }
    // newly added

}



// newly added
function pplr_view_to_arrow(tis){
    const data_to = parseInt(jQuery(tis).attr("data-pv-to"));

    const left = jQuery(tis).hasClass("pplr_arrow_left") ? true : false

    if(left && data_to == 0){
        return;
    }else if(!left && data_to == pplr_total_views){
        return;
    }else {

        var current_index = data_to - 1;
        if(!left) {
            current_index = data_to;
        }

        const v_id = Object.keys(pplr_views)[current_index];
        if(v_id){
            pplr_view_to(v_id, tis);
        }

    }
}

function pplr_view_animate(v_index){

    if(jQuery(".pplr_preview_wrapper canvas").length == 0){
        return
    }

    jQuery("#pplr_canvas_old").remove()

    var cur_idx = jQuery(".pplr_preview_wrapper").attr("data-pview")

    const canvas = jQuery(".pplr_preview_wrapper canvas")[0]
    const computedStyle = window.getComputedStyle(canvas);
    const width = parseInt(computedStyle.getPropertyValue('width'), 10);
    const height = parseInt(computedStyle.getPropertyValue('height'), 10);

    var translate = cur_idx > v_index ? 100 : -100

    var new_can = jQuery("<canvas id='pplr_canvas' width='1000' height='1000'></canvas>")
    var css = {opacity: 0}
    // new_can.css({...css, left: -translate+"%", backgroundColor: "#fff"})
    new_can.css(css)

    jQuery("#pplr_canvas").attr("id", "pplr_canvas_old").css(css)
    new_can.insertAfter("#pplr_canvas_old")

    jQuery("#pplr_canvas_old").animate({opacity: 0}, 100, function() {
        jQuery(this).remove()
    })
    jQuery("#pplr_canvas").animate({opacity: 1}, 100, function() {
      jQuery(this).remove()
  })

    // $("#pplr_canvas").animate({left: width/2}, 400)
    jQuery(".pplr_preview_wrapper").attr("data-pview", v_index)
}

var pplr_active_view_id = false;

 function pplr_pre_type_active_sync(v_id, up = true){
  if(pplr_active_view_id == v_id){
      return;
  }
  pplr_active_view_id = v_id;
  pplr_current_view = v_id;

  var pplr_views_keys = Object.keys(pplr_views);
  var index = pplr_views_keys.indexOf(v_id);
  jQuery(".pplr_arrows .pplr_arrow_left").attr("data-pv-to", index);
  jQuery(".pplr_arrows .pplr_arrow_right").attr("data-pv-to", index+1);

  jQuery(".pplr_prev_type_wrapper").children("div").removeClass("active");
  jQuery(".pplr_prev_type_wrapper").children(`[data-pview="${v_id}"]`).addClass("active");


  jQuery(".pplr_tab_index[data-pview]").removeClass("pplr_active");
  jQuery(`.pplr_tab_index[data-pview="${v_id}"]`).first().addClass("pplr_active");
  jQuery(`.pplr_tab[data-pview]`).removeClass("pplr_active");
  jQuery(`.pplr_tab[data-pview="${v_id}"]`).first().addClass("pplr_active");

  if(up){
      pplr_view_animate(index);
  }

}

function pplr_view_to(v_id, tis){
    var viewFirstEl = jQuery(`.pplr-wrapper[data-pview="${v_id}"]`).first();
    if(!viewFirstEl[0]){
      viewFirstEl = jQuery(`.pplr_tab[data-pview="${v_id}"] .pplr-wrapper`).first();
    }
    var frame = viewFirstEl.attr("data-main");
    pplr_is_image_change = false;
    pplr_pre_type_active_sync(v_id);
    setTimeout(() => {
      LoadPplrWithFont(frame);
      setTimeout(() => {
        pplr_preview({
          preventDefault: () => {},
          stopImmediatePropagation: () => {}
        }, true)  
      }, 310);
    }, 0);
}
// newly added


function pplr_generate_preview(frame){
    if(jQuery('.pplr_preview_wrapper canvas')[0]){

        // var view_id = _PP[_CM + frame].split(',')[92];
        var view_id = pplr_values[frame][92];
        if(view_id){}
        else{
            // view_id = _PP[_CM + frame].split(',')[18];
            view_id = pplr_values[frame][18];
        }

        if(_CP[8] < 2 && (createproduct > 3  || pplr_view_set[view_id][6]==1  || pplr_view_set[view_id][8]>2)){

            var abc = pplr_image.split('?v=')[0].replace('https://','').replace('//','').replace('.progressive',''); 
            if (abc.indexOf('/products/') >-1 || abc.indexOf('/files/') >-1) {
            var arrImage = abc.split('.');
            var strExtention = arrImage.pop();
            var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
            abc = arrImage.join('.')+"."+strRemaining+"."+strExtention;
            abc= abc.split('/').pop();
            }
            abc = abc.replace('resizepplr.php?width=1200&height=1200&file=','');
            abc = abc.replace('resizepplr.php?width=1000&height=1000&file=','');

            pplr_design_p[view_id] = image_crop(jQuery('.pplr_preview_wrapper canvas')[0],600,600).toDataURL('image/png', 1.0);
        }
        jQuery(".pplr-p-left canvas").css('max-height', jQuery(".pplr_preview_wrapper").height());
    }
    else{
        setTimeout(function() {
            pplr_generate_preview(frame);
        },300);
    }
}


var pplr_preloaded = {};
function pplr_preload_image(){
    // jQuery(".pplr_image_loader img[src='']").each(function() {
    //     var f = jQuery(this).data("frame");
    //     // if(!jQuery('.pplr-wrapper[data-main="' + f+ '"]').hasClass('pplr_no_preview') && jQuery('.pplr-wrapper[data-main="' + f+ '"]:visible')[0]){
    //     if(!pplr_values[f][pplr_last_idx]?.hidden && jQuery('.pplr-wrapper[data-main="' + f+ '"]:visible')[0]){
    //         jQuery(this).attr("src",jQuery(this).attr("data-psrc"));
    //     }
    // })
    if(Object.keys(pplr_preloaded)?.length == pplr_image_loader_array.length){
      return;
    }
    pplr_image_loader_array.map(item => {
      const f = item?.idx;  
      if(!pplr_preloaded[f] && !pplr_values[f][pplr_last_idx]?.hidden){
        pplr_preloaded[f] = true;
        p_loadImage(item?.src);
      }
    })
}

function setChildDimensionsToParent(element) {
    let current = jQuery(element);
    let targetWidth = 0;
    let targetHeight = 0;
    let parents = null;

    // Traverse up the DOM to find the first parent with width and height > 0
    while (current.length && (current.width() === 0 || current.height() === 0)) {
        current = current.parent(); // Move to the parent
    }

    // If a valid parent with non-zero dimensions is found
    if (current.length && (current.width() > 0 && current.height() > 0)) {
        targetWidth = current.width();
        targetHeight = current.height();
        parents = current;
    }

    // Apply width and height to all children of the valid parent
    if (parents) {
        parents.children().each(function () {
            jQuery(this).css({
                width: targetWidth,
                height: targetHeight,
            });
        });
    }
}




function pplr_load_finish(pplr_preview_wrapper_el){
    pplrloading = false;
    if(window.PPLR_SHOW_CANVAS_LOADING){
      jQuery(".pplr-main-canvas-loader").remove()
    }

    var cr = main_pplr_el.find('img:visible:first');

    if(cr[0]){
        pplrcurrentimage = cr[0].currentSrc;
    }
    cr.css('border', 0);

    if(!pplr_load_finish && jQuery('.pplrabs')[0]){
        jQuery('.p_p_old').removeClass('p_p_old');
    }
    var b = pplr_preview_wrapper_el;

    b.animate({"opacity": 1});


    if(pplr_event_attached || _CP[8]>1 ){
      jQuery("#pplr-preview").animate({"opacity": 1});
    }
    if(pplr_image_upload || _CP[10] >2 ){
      jQuery(".pplr-modal-box").animate({'opacity': 1});
      jQuery('.pplrloading').removeClass('pplrloading');
    }

    jQuery(".pplrloadingimage").remove();

    main_pplr_el.find('.pplr_loader').remove();

    jQuery('.pplr_thumb_image').removeClass('no_load_first');

    // if(!jQuery(".pplr_image_loaded")[0]){
    if(!pplr_el.hasClass("pplr_image_loaded")){
        // jQuery(".pplr_image_loader").addClass('pplr_image_loaded');
        pplr_el.addClass('pplr_image_loaded');
        jQuery(_P_P).append("<style>" + fontface + "</style>");
        setTimeout(function() {update_pplr_wrapper();},300);
    }

    setTimeout(function() {
      pplrcomplete();
    },30);


    if(!pplr_event_attached){

      pplr_event_attached = true;
        setTimeout(function() {
          pplr_manage_event();
        },100)

        setTimeout(function() {
          checkinventory();
        }, 200);
    }

    var a = b.find('canvas');
    if(a[0]){
        if(a.width()<1 || a.height()<1){
            var w = a.get(0).naturalWidth;
            var h = a.get(0).naturalHeight;
            var pw = b.width();
            var newh = pw*h/w;
            if(pw==0){
              setChildDimensionsToParent(b[0]);
            a.css({'width':'auto','height':'100%','position':'absolute'});
            }else{
            a.css({'width':w,'height':h,'position':'absolute'});
            }
            setTimeout(function() {update_pplr_wrapper();},200);
        }
    }
}

function capitalizeFirstLetter(string) {
    var lines = string.split('. ');
    for (var ii = 0; ii < lines.length; ii++) {
        lines[ii]= lines[ii].charAt(0).toUpperCase() + lines[ii].slice(1);
    }
    return lines.join('. ');
}

function pplrCHex2(hex, opacity) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = [r,g,b];
    return result;
}


function pplrCHex(hex, opacity) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(function (char) {
            return char + char; 
        }).join('');
    }
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
    return result;
}

function capitalize(text) {
    return text.replace(/\b\w/g, function(tStr) {
        return tStr.toUpperCase();
    }).replace(/\B\w*/g, function(tStr) {
        return tStr.toLowerCase();
    });
  }


if (typeof limitTextarea === 'undefined') {
  var limitTextarea = function (textarea, maxLines, maxChar, k, u, _n) {
    let v = textarea.value;

    // Clean input
    if (k == 2) v = v.replace(/[^\w\s]/g, '').replace(/_/g, '');
    if (k == 3) v = v.replace(/[^\w\s]/g, '').replace(/[0-9]/g, '').replace(/_/g, '');
    if (k == 4) v = v.replace(/[^0-9\s]/g, "");
    textarea.value = v;

    const rawLines = v.split('\n');
    const outLines = [];
    let lineCount = 0;

    outer: for (let para of rawLines) {
      if (lineCount >= maxLines) break;

      // Keep space-only lines
      if (/^\s*$/.test(para)) {
        outLines.push(para.slice(0, maxChar));
        lineCount++;
        continue;
      }

      const tokens = para.match(/(\s+|\S+)/g) || [''];
      let line = '';

      for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        let spaceLeft = maxChar - line.length;

        if (token.length <= spaceLeft) {
          line += token;
        } else {
          // flush line if it has content
          if (line.length > 0) {
            outLines.push(line);
            lineCount++;
            if (lineCount >= maxLines) break outer;
            line = '';
            i--; // retry token on new line
          } else {
            // word is too big and line is empty
            while (token.length > 0 && lineCount < maxLines) {
              const chunk = token.slice(0, maxChar);
              outLines.push(chunk);
              token = token.slice(maxChar);
              lineCount++;
              if (lineCount >= maxLines) break;
            }
            break outer;
          }
        }
      }

      // push last line if needed
      if (line && lineCount < maxLines) {
        outLines.push(line.slice(0, maxChar));
        lineCount++;
      }
    }

    // extra safety: slice last line if needed
    if (outLines.length > 0) {
      const lastIndex = outLines.length - 1;
      if (outLines[lastIndex].length > maxChar) {
        outLines[lastIndex] = outLines[lastIndex].slice(0, maxChar);
      }
    }

    textarea.value = outLines.join('\n');

    if (_n && _n.length) {
      const maxLen = parseInt(jQuery(textarea).attr('data-maxlength')) || 0;
      _n.find('.ct').text(maxLen - textarea.value.replace(/\n/g, '').length);
    }

    return textarea.value;
  };
}



if (typeof pplr_wrapText == 'undefined') {
    var pplr_wrapText = function (context, text, x, y, maxWidth, font, areafSize, align, valign, maxlinenumber, line_height, h, fheight,m_,mainCanvas,pss,color,eqn,type,startAngle2,angle,inwardFacing,diameter,textHeight2,textMaxHeight,clockwise,fonts,new_ctxRef,colortype) {
    var linebreaks = text.split('\n');
    var maxsize = areafSize ;
    var rsize = areafSize ;
    var textWidth = get_tex_width(words, maxsize + 'pt ' + font);
    var textHeight = (getTextHeight(font, maxsize).height) * line_height * linebreaks.length;
    var fSize = maxsize;

    if(_SJ2[25]<1)
    {
        for (var ii = 0; ii < linebreaks.length; ii++) {
        var words = linebreaks[ii];
        var i, fSize;
        for (i = maxsize; i > 1; i--) {
            textWidth = get_tex_width(words, i + 'pt ' + font);
            textHeight = (getTextHeight(font, i).height) * line_height * linebreaks.length;
            if (textWidth < maxWidth && textHeight < h) {
            areafSize = i;
            fSize = i;
            maxsize = i;
            break;
            }
            if(textWidth/maxWidth>1.2){ i= parseInt(i*(maxWidth/textWidth)*1.2); }
        }
        }
    }

    if(m_[40] < 1){
          var aff = jQuery('.pplr-size-select[data-frame="' + eqn + '"]');
           aff.val((aff.attr('data-size')*fSize/rsize).toFixed(2));
    }

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var conversion = 1;
    if(pisSafari()){
    conversion = 0.95454;
    }
    if(isFirefox || IsAndroidp){
    conversion = 0.96;
    }

    var lineHeightprime = (getTextHeight(font, fSize).height)* line_height*conversion;

    var lineHeight = (getTextHeight(font, fSize * fheight).height) * line_height*conversion;

    if (valign == '2') {
    y += (h - lineHeightprime * linebreaks.length) / 2 - lineHeight / 2 + areafSize / 2;
    }
    if (valign == '3') {
    y += (h - lineHeightprime * linebreaks.length);
    }
    var linenumber = 1;

    if(type>2){
    var dy = y;
    var v = dy* Math.sin(angle * Math.PI / 180);
    var x = -dy* Math.cos(angle * Math.PI / 180);
    context.translate(v, -x);
    textHeight=textHeight2;
    }

    for (var ii = 0; ii < linebreaks.length; ii++) {
    var words = linebreaks[ii];
    context.font = (fSize * fheight  + 'pt') + ' ' + font;
    var testWidth = context.measureText(words).width;
    if (align == 'left') {
        var fixalign = maxWidth / 2;
    }
    if (align == 'right') {
        var fixalign = -maxWidth / 2 + testWidth;
    }
    if (align == 'center') {
        var fixalign = testWidth / 2;
    }
    y += lineHeight;


    if(type<3){
        if(m_[49]<0 && m_[71]==3){
          if(colortype>1){

            new_ctxRef.font = (fSize * fheight  + 'pt') + ' ' + font;
            new_ctxRef.strokeText(words,x - fixalign,y);
          }
          else{
            context.strokeText(words,x - fixalign,y);
          }
        }
        if(m_[71]==4){
        context.shadowOffsetX = -m_[49];
        context.shadowOffsetY = -m_[49];
        context.shadowColor = "rgba(0,0,0,1)"; 
        }

        if(m_[71]==2 || m_[71]==5){
            window.pplr_n_glow(context,words,color,x - fixalign, y,m_[71]);
        }
        else{
            context.fillText(words, x - fixalign, y);
        }


        if(m_[49]>0 && m_[71]==3){

          if(colortype>1){
            new_ctxRef.font = (fSize * fheight  + 'pt') + ' ' + font;
            new_ctxRef.strokeText(words,x - fixalign,y);
          }
          else{
            context.strokeText(words,x - fixalign,y);
          }
        }
        if(m_[71]==4){       
        context.shadowOffsetX = m_[49];
        context.shadowOffsetY = m_[49];
        context.shadowColor = "rgba(255,255,255,1)";  
        context.fillText(words, x - fixalign, y);
        }
    }
    else{

        if(isRTL(words[0])){words = words.split('').reverse().join('')}
    
        if (((['left', 'center'].indexOf(align) > -1) && inwardFacing) || (align == 'right' && !inwardFacing)) words = words.split('').reverse().join('');

        var startAngle = startAngle2;
        startAngle += ((Math.PI) * !inwardFacing);
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        if (align == 'center') {
            for (var j = 0; j < words.length; j++) {
                var charWid = context.measureText(words[j]).width;
                    if (inwardFacing) {
                        var kerning = 0;
                    } else {
                        var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight ))* getTextHeight(font, parseInt(fSize), words[j]).height;
                    }
                startAngle += ((charWid + (j == words.length - 1 ? 0 : kerning )) / (diameter / 2 - textHeight / 2 + rsize / 2)) / 2 * -clockwise;
            }
        }
        context.rotate(startAngle-(angle * Math.PI / 180));
        var ddd = 0 ;
        for (var j = 0; j < words.length; j++) {
            var charWid = context.measureText(words[j]).width;
            if (inwardFacing) {
                var kerning = 0;
            } else {
                var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight))* getTextHeight(font, parseInt(fSize), words[j]).height;
            }

            ddd+= (charWid / 2) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise;

            context.rotate((charWid / 2) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise);  


            if (inwardFacing) {
            var yy = (0 - diameter / 2+textMaxHeight/2 - textHeight/2);
            } else {
            var yy = -1 * (0 - diameter / 2 + textHeight) + fonts / 2 +textMaxHeight/2 - textHeight/2;
            }


        if(m_[49]<0 && m_[71]==3){

          if(colortype>1){
            new_ctxRef.strokeText(words[j], 0, yy);
          }
          else{
            context.strokeText(words[j], 0, yy);
          }
        }  

        if(m_[71]==2 || m_[71]==5){
            window.pplr_n_glow(context,words[j],color,0,yy,m_[71]);
        }
        else{
            context.fillText(words[j], 0, yy);
        }


        if(m_[49]>0 && m_[71]==3){
          if(colortype>1){
            new_ctxRef.strokeText(words[j], 0, yy);
          }
          else{
            context.strokeText(words[j], 0, yy);
          }
        }
        if(m_[71]==4){
        context.shadowOffsetX = m_[49];
        context.shadowOffsetY = m_[49];
        context.shadowColor = "rgba(255,255,255,1)";  
        context.fillText(words[j], 0, yy);
        }
            context.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise); // rotate half letter
            ddd+= (charWid / 2 + kerning) / (diameter / 2 - textHeight / 2 + rsize / 2) * clockwise;
        }
        context.rotate(-startAngle+(angle * Math.PI / 180)-ddd);

        var dy = lineHeight;
        var v = dy* Math.sin(angle * Math.PI / 180);
        var x = -dy* Math.cos(angle * Math.PI / 180);
        context.translate(v, -x);

    }

    linenumber = linenumber + 1;

    }
    }
}



function getTextHeight(font, areaFsize, dtxt) { 
    if (dtxt) {
        var Hg = dtxt;
    } else {
        var Hg = 'Hgf';
    }
    var text = jQuery('<span style="line-height:1 !important;vertical-align: middle;padding:0px !important;margin:0px !important;position:absolute;top:0px;z-index:999">' + Hg + '</span>').css({
    fontFamily: font,
    'font-size': areaFsize + 'pt'
    });


    var block = jQuery('<span style="display: inline-block; width: 1px; height: 0px;"></span>');
    var div = jQuery('<span></span>');
    div.append(text, block);

    var body = jQuery('body');
    body.append(div);
    try {

        var result = {};
        block.css({
            verticalAlign: 'baseline'
        });
        result.ascent = block.offset().top - text.offset().top;

        block.css({
            verticalAlign: 'bottom'
        });
        //result.height = block.offset().top - text.offset().top;
        result.height = text[0].offsetHeight;
        result.width = text.width();

        result.descent = result.height - result.ascent;

    } finally {
        div.remove();
    }
    return result;
};

function get_tex_width(txt, font) {
    this.element = document.createElement('canvas');
    this.context = this.element.getContext("2d");
    this.context.font = font;
    return this.context.measureText(txt).width;
}

if(!window.pplr_n_glow){
    window.pplr_n_glow = function(ctx,text,color,x,y,effect){

    if(effect == 2){
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.fillText(text, x,y);
    }
    else{
        ctx.fillStyle = 'white';
        ctx.shadowColor = '#fff';

        ctx.shadowBlur = 15;
        ctx.fillText(text, x,y);

        ctx.shadowBlur = 20;
        ctx.fillText(text, x,y);

        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.fillText(text, x,y);

        ctx.shadowBlur = 20;
        ctx.fillText(text, x,y);

        ctx.shadowBlur = 30;
        ctx.fillText(text, x,y);

        ctx.shadowBlur = 1000;
        ctx.fillText(text, x,y);

    }
    }
}


  function text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight){
      var pattern = ctxRef.createPattern(imgObj, "repeat");
      ctxRef.fillStyle = pattern;
      ctxRef.globalCompositeOperation = "source-in";
      ctxRef.fillRect(0, 0, canwidth, canheight);
    new_ctxRef.drawImage(canvas_text, 0, 0, canwidth, canheight);
}


function pplr_getText(pplr_svg,mainCanvas, eqn, uileft, uitop, perwidth, perheight, a,imgObj,imgObj9) {


    var canwidth = mainCanvas.width;
    var canheight= mainCanvas.height  ;
    var ctxRef = mainCanvas.getContext('2d');

    if(create_svg){
        ctxRef = pplr_svg;
    }

    // var m_ = _PP[_CM + eqn].split(',');
    var m_ = [...pplr_values[eqn]];
    var om_ = _PP[_CM + eqn].split(',');

    var inputtype = m_[13];
    // if (inputtype >5 || m_[39]==3 || jQuery('.pplr_no_preview[data-main=\"' + eqn + '"]').length>0 || jQuery('.pplr_option[data-frame=\"' + eqn + '"]').length>0) {
    if (inputtype >5 || m_[39]==3 || pplr_values[eqn][pplr_last_idx]?.hidden || (optionwithclass_v && $PP_EL('.pplr_option[data-frame=\"' + eqn + '"]').length>0)) {
        return;
    }
    if(create_pplr && m_[39]==4){
        return; 
    }

    var ratio = 1;
    var type = m_[10];

    var angle = m_[11];
    var diameter = ratio * parseInt(m_[5]) * canheight / 500;
    var xpos = ratio * m_[2] * canwidth / 100;
    var ypos = ratio * m_[3] * canheight / 100;
    var width = ratio * m_[4] * canwidth / 100;
    var height = ratio * m_[14] * canheight / 100;
    var mainwidth = width;
    var mainheight = height;


    if(m_[56]==1 && create_pplr === false){
        ctxRef.lineWidth = 2;
        ctxRef.beginPath();
        ctxRef.setLineDash([5]);
        ctxRef.rect(xpos-width/2,ypos,width,height);
        ctxRef.stroke();
    }

    ctxRef.shadowOffsetX = 0;
    ctxRef.shadowOffsetY = 0;

    var align = m_[20];
    var valign = m_[30];
    var color = m_[6];
    var colortype = m_[pplr_last_idx]?.colortype ?? 1;
    var pss = m_[1];

    
    var expname = m_[0].split('/').pop(-1).replace('.ttf', '');
    var fName = expname.replace('_', '');
    var fheight = m_[pplr_last_idx]?.fheight ?? 1;

    if(create_svg && inputtype<3){
        font_face_export.push(expname);
    }

    var opacity = 1 - m_[12] / 127;
    var line_height = m_[28];
    var fSize = ratio * pss * .75 * (canheight / 500);
    var areafSize = fSize;
    var dfSize =  ratio * om_[1] * .75 * (canheight / 500);
    var adjust = diameter;

    if (diameter < 0) {
        var inwardFacing = true;
        var textInside = true;
        var startAngle = 0;
        diameter = -diameter;
    } else {
        var inwardFacing = false;
        var startAngle = 180;
        var textInside = false;
    }
    align = align.toLowerCase();

    var clockwise = align == 'right' ? 1 : -1;
    startAngle = startAngle * (Math.PI / 180);

    // if (inputtype == 3 || inputtype == 4) { prev code
    if (inputtype == 3 || inputtype == 3.5 || inputtype == 4) { // newly added


      const isImgPattern = inputtype == 3 && m_[59] == 1;

        if (!uileft) uileft = 0;
        if (!uitop) uitop = 0;
        if (!perwidth) perwidth = width;
        if (!perheight) perheight = height;
        var awr = 1;

        if (create_pplr && !isImgPattern || inputtype == 4 ) {
            var awr = $PP_EL('.img_url[data-frame="' + eqn + '"]').attr('data-newr');
        }
        
        uileft=uileft*awr;
        uitop= uitop*awr;
        perwidth=perwidth*awr;
        perheight=perheight*awr;

        var ay = height;
        var extraY = ay - ay * Math.cos(angle * Math.PI / 180);
        var extraX = height * Math.sin(angle * Math.PI / 180);
        var c = 0;
        var d = 0;
        var rto = perwidth / perheight;
        var slm = height;
        var rto2 = width / height;

        if (a == -90 || a == 270) {
            c = ay;
            d = (parseInt(width) - parseInt(height)) / 2;
            height = width;
            width = slm;
            var rto2 = width / height;
        }
        if (a == 90 || a == -270) {
            c = 0;
            d = (-parseInt(width) - parseInt(height)) / 2;
            height = width;
            width = slm;
            var rto2 = width / height;
        }

        if (a == 180) {
            c = parseInt(height);
            d = -parseInt(width);
            uileft= imgObj.width - uileft - perwidth;
            uitop = imgObj.height - uitop - perheight;
        }

        angle = parseInt(angle) - a;
        var type2left = false;




        if((create_pplr && $PP_EL('.crop_img_url[data-frame="' + eqn + '"]')[0] && !isImgPattern)){

            var canvas_crop = document.createElement( 'canvas' );
            var ctx_crop = canvas_crop.getContext( "2d" );
            var t = uitop;
            var l = uileft;
            var w = perwidth;
            var h = perheight;
            if(t<0){
                t=0;h=h-t;
            }
            if(l<0){
                l=0;w=w-l;
            }
            if(w>imgObj.width-l){
            // w = imgObj.width-l;
            }
            if(h>imgObj.height-t){
            // h = imgObj.height-t;
            }
            canvas_crop.width = w;
            canvas_crop.height = h;
            ctx_crop.clearRect(0,0,w,h);
            ctx_crop.drawImage(imgObj,l,t,canvas_crop.width,canvas_crop.height, 0, 0, canvas_crop.width, canvas_crop.height);
    
            var canvas_r = document.createElement( 'canvas' );
            var ctx_r = canvas_r.getContext( "2d" );
    
            if(a == 180 || a == -180 || a == 0){
                canvas_r.width = w;
                canvas_r.height = h;
            }
            else{
                canvas_r.width = h;
                canvas_r.height = w;    
            }
    
            ctx_r.save();
            ctx_r.translate(canvas_r.width/2,canvas_r.height/2);
    
            ctx_r.rotate(a*Math.PI/180);
    
            if(canvas_crop.width>0 && canvas_crop.height>0){
                ctx_r.drawImage(canvas_crop,-canvas_crop.width/2,-canvas_crop.height/2);
            }
    
            ctx_r.restore();
    
            if(type > 2){
            imgObj = canvas_r;
            type2left = true;
            }
            var cc = $PP_EL('.img_url[data-frame="' + eqn + '"]');

            if(create_pplr && $PP_EL('.crop_img_url[data-frame="' + eqn + '"]')[0] && _SJ2[26] !== 1){
              if(cc.attr("data-psrc").indexOf("data:image")!== -1){
                var dtype = $PP_EL('.crop_img_url[data-frame="' + eqn + '"]').data('type');
                if(m_[42]=='2' && inputtype < 4){ 
                    var imageData = ctx_r.getImageData(0, 0, canvas_r.width, canvas_r.height);
                    var data = imageData.data;
                    for(var i = 0; i < data.length; i += 4) {
                    var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
                    data[i] = brightness;
                    data[i + 1] = brightness;
                    data[i + 2] = brightness;
                    }
                    ctx_r.putImageData(imageData, 0, 0);
                }
                var croppedImageDataURL = canvas_r.toDataURL(dtype, 1.0);

                $PP_EL('.crop_img_url[data-frame="' + eqn + '"]').attr("src", croppedImageDataURL);
              }
            }
        }

        if(create_svg && $PP_EL('.img_url[data-frame="' + eqn + '"]').attr("data-psrc").indexOf("data:image") <0 && !window.pplr_svg2pdf){
          var canvas = document.createElement("canvas");
          canvas.width = imgObj.width;
          canvas.height = imgObj.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(imgObj, 0, 0, imgObj.width, imgObj.height);
          imgObj = canvas;
        }

        if(m_[42]=='2' && inputtype < 4){
        var canvas = document.createElement("canvas");
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(imgObj,0,0);   
        var imageData = ctx.getImageData(0, 0, imgObj.width, imgObj.height);
        var data = imageData.data;
        for(var i = 0; i < data.length; i += 4) {
            var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            data[i] = brightness;
            data[i + 1] = brightness;
            data[i + 2] = brightness;
        }
        ctx.putImageData(imageData, 0, 0);
        imgObj = canvas;
        }

        if (align == 'left') {
            var e = 0;
        }

        if (rto2 > rto || rto2 == rto) {
        var w = parseInt(height * rto);
        var h = parseInt(height);
        if (align == 'right') {
        var e = parseInt(width - w);
        }
        if (align == 'center') {
        var e = parseInt((width - w) / 2);
        }
        var x = e,y=0;

        } else {
        var w = parseInt(width);
        var h = parseInt(width/rto);
        var e = 0;
        if (valign == '3') {
        var e = parseInt(height - h);
        }
        if (valign == '2') {
        var e = parseInt((height - h) / 2);
        }
        var x = 0,y=e;
        }

        if (m_[31] == 2 && m_[39] > 1) {
            x = 0;y=0;
        }

        if(uileft<0){var v = uileft*w/perwidth; var x=x-v/2; perwidth = parseInt(perwidth)+parseInt(uileft);w=w+v;uileft=0;}
        if(uitop<0){var m = uitop*h/perheight; var y=y-m/2; perheight = parseInt(perheight)+parseInt(uitop);h=h+m;uitop=0;}

        if(imgObj.width<parseInt(uileft)+parseInt(perwidth)&& uileft>-1){
            var v = (parseInt(uileft)+parseInt(perwidth)-imgObj.width)*w/perwidth;var x=x+v/2;
            w=w-v;
            perwidth = imgObj.width - parseInt(uileft);
        }

        if(imgObj.height<parseInt(uitop)+parseInt(perheight)&& uitop>-1){
            var m = (parseInt(uitop)+parseInt(perheight)-imgObj.height)*h/perheight;
            var y=y+m/2;
            h=h-m;
            perheight = imgObj.height - parseInt(uitop);
        }

        var nn = (imgObj.width -parseInt(uileft) - parseInt(perwidth))*w/perwidth;
        var qq = (imgObj.height -parseInt(uitop) - parseInt(perheight))*h/perheight;
        if(nn<0){
            var x=x-nn/2;
        }
        if(qq<0){
            var y=y-qq/2;
        }


        if (inputtype == 4) {
            var attr = jQuery('.img_url[data-frame="' + eqn + '"]').attr('copy');
        if (typeof attr !== typeof undefined && attr !== false) {
        } else{x = 0;y=0;}

        }

        if (type > 2 && inputtype == 3) {
            ctxRef.save();
            var ay =height;
            var v=parseInt(uileft);
            var pw = perwidth;
            var ph = perheight;
            if(type2left){
                pw = imgObj.width;
                v=0;
                uitop = 0 ;
                ph = imgObj.height;
                h = height;
            }
            var extraY=ay-ay*Math.cos(angle*Math.PI/180);
            var extraX=height*Math.sin(angle*Math.PI/180);
            ctxRef.translate(xpos-width/2-extraX, ypos+extraY);
            
            ctxRef.rotate(-angle*Math.PI/180);
            var radius = diameter / 2;

            var arc = width / radius;
            if (!inwardFacing) {
                var angle = arc / 2 + Math.PI / 2;
            } else {
                var angle = 3 * Math.PI / 2 - arc / 2;
            }

            for (var sx = 0; sx < width; sx++){
            var v= v+pw/width;
            if(!inwardFacing){
            var yy= radius-radius*Math.sin(angle);
            }
            else{
            yy= 0-radius-radius*Math.sin(angle);
            }
            ctxRef.drawImage(imgObj,v,uitop,1,ph,sx,yy,5,h);
            if(!inwardFacing){
            angle= angle- arc/width;
            }
            else{
            angle= angle+ arc/width;
            }
            }
            ctxRef.restore();
            return;
        }

        ctxRef.save();
        ctxRef.translate(xpos - width / 2 - extraX - d, ypos + extraY + c);
        ctxRef.rotate(-angle * Math.PI / 180);


        if (inputtype == 4) {
            var canvas = document.createElement("canvas");
            canvas.width = imgObj.width;
            canvas.height = imgObj.height;
            var ctx = canvas.getContext("2d");
            if (!isIE() || colortype>1){
                ctx.globalCompositeOperation = 'multiply';
            }
            ctx.drawImage(imgObj,0,0);  
            if (!isIE() || colortype>1){ 
                ctx.globalCompositeOperation = 'source-atop';
            }

            if(colortype>1){
                if(create_svg){
                    ctx.fillStyle = "#ffffff";
                }else{
                    var pattern = ctx.createPattern(imgObj9, "repeat");
                    ctx.fillStyle = pattern;
                }
            }else{
                ctx.fillStyle = color;
            }
            if (!isIE() || colortype>1 && !create_svg){ 
                ctx.fillRect(0,0,imgObj.width, imgObj.height);
            }


            if (isIE() && colortype<2){
                var rgb = pplrCHex2(color, 1);
                var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var data = imgData.data;
                for (var i = 0; i < data.length; i += 4) {
                    data[i] = rgb[0] * data[i] / 255;
                    data[i + 1] = rgb[1] * data[i + 1] / 255;
                    data[i + 2] = rgb[2]* data[i + 2] / 255;
                }
                ctx.putImageData(imgData, 0, 0);
                imgObj = canvas;
            }
        }



            if(isImgPattern && imgObj9){

                var patternCanvas = document.createElement("canvas");
                  patternCanvas.width = parseInt(perwidth);
                  patternCanvas.height = parseInt(perheight);
                  var pCtx = patternCanvas.getContext("2d");

                  if(window.PPLR_PATTERN_IMAGE_BG){
                    pCtx.fillStyle = window.PPLR_PATTERN_IMAGE_BG;
                    pCtx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
                  }
                  // Use patternImgInfo values for cropping imgObj9
                  // const patterImgInfo = $PP_EL(`.pplr-wrapper[data-main=${eqn}]`).find(".pplr-crop").val()?.split("_");
                  const patterImgInfo = m_[22]?.split("_");

                  var awr = 1;

                  if (create_pplr) {
                      var awr = $PP_EL('.img_url[data-frame="' + eqn + '"]').attr('data-newr');
                  }

                  var cropX = patterImgInfo[0]*awr; 
                  var cropY = patterImgInfo[1]*awr; 
                  var cropWidth = patterImgInfo[2]*awr; 
                  var cropHeight = patterImgInfo[3]*awr; 

                  pCtx.drawImage(imgObj9, cropX, cropY, cropWidth, cropHeight, 0, 0, parseInt(perwidth), parseInt(perheight));

                  if(create_pplr && $PP_EL('.crop_img_url[data-frame="' + eqn + '"]')[0] && _SJ2[26] !== 1 ){
                        var dtype = $PP_EL('.crop_img_url[data-frame="' + eqn + '"]').data('type');
                          var croppedImageDataURL = patternCanvas.toDataURL(dtype, 1.0);
                          $PP_EL('.crop_img_url[data-frame="' + eqn + '"]').attr("src", croppedImageDataURL);
                    }

                  var canvasImgObj = document.createElement("canvas");
                  canvasImgObj.width = parseInt(perwidth);
                  canvasImgObj.height = parseInt(perheight);
                  var ctx = canvasImgObj.getContext("2d");
                  ctx.globalCompositeOperation = 'source-over';
                  ctx.drawImage(imgObj, parseInt(uileft),parseInt(uitop), parseInt(perwidth), parseInt(perheight),0,0,parseInt(perwidth),parseInt(perheight));
                  ctx.globalCompositeOperation = 'source-atop';

                  var pattern = ctx.createPattern(patternCanvas, "no-repeat");

                  ctx.fillStyle = pattern;

                  ctx.fillRect(0, 0, canvasImgObj.width, canvasImgObj.height);

                  if(m_[42]=='2'){
                    var canvasNew = document.createElement("canvas");
                    canvasNew.width = canvasImgObj.width;
                    canvasNew.height = canvasImgObj.height;
                    var ctxNew = canvasNew.getContext("2d");
                    ctxNew.drawImage(canvasImgObj,0,0);   
                    var imageData = ctxNew.getImageData(0, 0, canvasImgObj.width, canvasImgObj.height);
                    var data = imageData.data;
                    for(var i = 0; i < data.length; i += 4) {
                        var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
                        data[i] = brightness;
                        data[i + 1] = brightness;
                        data[i + 2] = brightness;
                    }
                    ctxNew.putImageData(imageData, 0, 0);
                    canvasImgObj = canvasNew;
                  }

                  ctxRef.drawImage(canvasImgObj, 0, 0, parseInt(perwidth), parseInt(perheight), x, y, w, h);


            }else {
                ctxRef.drawImage(imgObj, parseInt(uileft), parseInt(uitop), parseInt(perwidth), parseInt(perheight), x, y, w, h);
            }

        if (inputtype == 4) {
            if(!isIE() || colortype>1){
                ctxRef.globalCompositeOperation=blendc[m_[54]];
            ctxRef.drawImage(canvas, parseInt(uileft), parseInt(uitop), parseInt(perwidth), parseInt(perheight), x, y, w, h);
                ctxRef.globalCompositeOperation='source-over';
            }
        }

        ctxRef.restore();
        return;

    }

    var xnc = null;

    var pplrstr = decodeHtml(pplr_values[eqn][pplr_last_idx].text_val);

    if(optionwithclass_v){
        var xnc = $PP_EL('.pplr_monogram[data-main="' + eqn + '"]');
        pplrstr = xnc.val();

    }

    if (m_[23] == 1 && !xnc?.parent().hasClass('optionwithclass')) {
        if (pplrstr == '') {
            var pplrstr = decodeHtml(m_[9]);
        }
    } 

    var text = pplrstr;

    if(m_[38]=='5' && text !=='')
    {
        var _d = text.split('-')
        text =_d[1]+'/'+_d[2]+'/'+_d[0];
    }

    if(typeof pplr_modify_text !=='undefined'){
        console.log('pplr_modify_text');
        text = pplr_modify_text(text,eqn);
    }

    var fcase = m_[19];

    if(fcase==2){
        text = text.toUpperCase(); 
    }
    if(fcase==3){
        text = text.toLowerCase();
    } 
    if(fcase==4){
        text = capitalize(text);
    }
    if(fcase==5){
        text = capitalizeFirstLetter(text);
    }

    ctxRef.shadowColor = "rgba(0,0,0,0)";

    var div = document.createElement('span');
    div.innerHTML = text.replace(/\s/g, "&nbsp;");
    div.style.position = 'absolute';
    div.style.top = '-10000px';
    div.style.left = '-10000px';
    div.style.fontFamily = fName;
    div.style.fontSize = parseInt(dfSize)+ 'pt';
    div.style.lineHeight = "1.42857143";
    document.body.appendChild(div);
    var textMaxWidth = get_tex_width(text, parseInt(dfSize) + 'pt ' + fName);
    var textMaxHeight = div.offsetHeight;
    var textWidth = get_tex_width(text, parseInt(dfSize)*fheight + 'pt ' + fName);
    var textHeight = div.offsetHeight;
    var fonts = parseInt(dfSize);

    if(typeof m_[40]== 'undefined'){m_[40]=1;}

    if(_SJ2[25]<1)
    {
    var i;
    var j=parseInt(fSize* fheight);
    for (i = parseInt(fSize); i > 1; i--) {
    div.style.fontSize = j + 'pt';
    div.innerHTML = text.replace(/\s/g, "&nbsp;");
    var textWidth = get_tex_width(text, parseInt(j) + 'pt ' + fName);
    var textHeight = div.offsetHeight;
    if (textWidth < width) {
        fSize = j;
        div.style.fontSize = fSize + 'pt';
        textWidth = get_tex_width(text, parseInt(j) + 'pt ' + fName);
        textHeight = div.offsetHeight;

        break;
    }
    if(textWidth>width*1.3){
        j= parseInt(j*(width/textWidth)*1.2);
    }
    else{
        j=j-1;
    }
    }
    }
    else{
        fSize=parseInt(fSize)* fheight;
        div.style.fontSize = fSize + 'pt';
        textHeight = div.offsetHeight;
        textWidth = get_tex_width(text, parseInt(fSize) + 'pt ' + fName);
    }
    jQuery(div).remove();

    var getlastTextHeight = textHeight;

    if(m_[40] < 1 && inputtype < 2){
        jQuery('.pplr-size-select[data-frame="' + eqn + '"]').val((fSize/(ratio  * 0.75 * (canheight / 500))).toFixed(2));
    }

    fSize = fSize + 'pt';
    if (!textInside) diameter += textHeight * 2;
    mainCanvas.style.backgroundColor = 'none';

    if(colortype>1){
          var new_ctxRef = ctxRef;
          var canvas_text = document.createElement("canvas");
          canvas_text.width = canwidth;
          canvas_text.height = canheight;
          ctxRef = canvas_text.getContext("2d"); 

    }else{
        ctxRef.fillStyle = pplrCHex(color, opacity);
        if(m_[71]==2){
            ctxRef.fillStyle = pplrCHex('#ffffff', opacity);
        }
    }

    ctxRef.font = fSize + ' ' + fName;
    m_[49]=m_[49]*canwidth/445;

    if(m_[71]==2){
        mainCanvas.style.backgroundColor = pplrCHex(color,0.09);
        var blur = 25;
        ctxRef.shadowOffsetX = 0;
        ctxRef.shadowOffsetY = 0;
    }

    if(m_[71]==3){
        ctxRef.strokeStyle = m_[50];
        if(m_[49]<0){
            ctxRef.lineWidth = -2*m_[49];
        }else{
            ctxRef.lineWidth = m_[49];
        }

        if(colortype>1){
            new_ctxRef.font = fSize + ' ' + fName;
            new_ctxRef.strokeStyle = m_[50];
            if(m_[49]<0){
                new_ctxRef.lineWidth = -2*m_[49];
              }else{
                  new_ctxRef.lineWidth = m_[49];
            }
        }
    }



    if(m_[71]==4){
        ctxRef.shadowOffsetX = -m_[49];
        ctxRef.shadowOffsetY = -m_[49];
        ctxRef.shadowColor = "rgba(0,0,0,1)"; 
    }

    if(typeof pplr_custom_text_stye !=='undefined'){
        window.pplr_custom_text_stye = pplr_custom_text_stye;
    }

    if(window.pplr_custom_text_stye){
        console.log('pplr_custom_text_stye');
        try {
            window.pplr_custom_text_stye(ctxRef,m_,mainCanvas,pss,align,color,fName,fheight,fSize,text,textWidth,xpos,ypos,dfSize);
        }
        catch(err){
            console.log(err);
        }
    }


    if (inputtype == 2) {
        if (type == 1) {
            var maxlinenumber = parseInt(m_[7]);
            pplr_wrapText(ctxRef, text, xpos, ypos, width, fName, parseInt(areafSize), align, valign, maxlinenumber, line_height, height, fheight,m_,mainCanvas,pss,color,eqn,type,startAngle,angle,inwardFacing,diameter,textHeight,textMaxHeight,clockwise,fonts,new_ctxRef,colortype);
            if(colortype>1){
              text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight);
            }
            return (pplr_svg,mainCanvas);
        }
        ctxRef.font = (parseInt(areafSize) + 'pt') + ' ' + fName;
        ctxRef.save();
        var ay = width / 2;
        var extra = ay * Math.sin(angle * Math.PI / 180);
        var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
        var ad = height;
        var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
        var extraX = ad * Math.sin(angle * Math.PI / 180);
        if(type>2){
            var dy = (adjust / 2-  textHeight / 2 + fonts / 2)
            var v = dy* Math.sin(angle * Math.PI / 180);
            var x = -dy* Math.cos(angle * Math.PI / 180);
            ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);
            if(new_ctxRef){
              new_ctxRef.save()
              new_ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);
            }
        }else{
            ctxRef.translate(xpos-extra2-extraX, ypos-extra+extraY);
            ctxRef.rotate(-angle*Math.PI/180); 
            if(new_ctxRef){
              new_ctxRef.save()
              new_ctxRef.translate(xpos-extra2-extraX, ypos-extra+extraY);
              new_ctxRef.rotate(-angle*Math.PI/180); 
            }
        }
        var maxlinenumber = jQuery("input[name='cstmfy_wrap[]']:eq(" + eqn + ")").val();
        pplr_wrapText(ctxRef, text, 0, 0, width, fName, parseInt(areafSize), align, valign, maxlinenumber, line_height, height, fheight,m_,mainCanvas,pss,color,eqn,type,startAngle,angle,inwardFacing,diameter,textHeight,textMaxHeight,clockwise,fonts,new_ctxRef,colortype);
        ctxRef.restore();
        if(colortype>1){
          new_ctxRef.restore()
              text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight);
        }
        return ;

    }


    var fixalign = textWidth / 2;
    if (align == 'left') {
        var fixalign = width / 2;
    }
    if (align == 'right') {
        var fixalign = -width / 2 + textWidth;
    }
    if (align == 'center') {
        var fixalign = textWidth / 2;
    }
    var style = m_[43];

    if(style>1){

        if(type==2){
            ctxRef.save();
            var ay =width/2;             
            var extra = ay * Math.sin(angle * Math.PI / 180);
            var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
            var ad = height;
            var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
            var extraX = ad * Math.sin(angle * Math.PI / 180);
            ctxRef.translate(xpos - extra2 - extraX, ypos - extra + extraY);
            ctxRef.rotate(-angle*Math.PI/180);
            xpos = 0;
            ypos=0;
        }

        var fName2 = m_[60].split('/').pop(-1).replace('.ttf', '').replace('_', '');
        var fSize2 = ratio * m_[61] * .75 * (canheight / 500);
        var fonts2= parseInt(fSize2)*fheight*(pss/om_[1]);
        var xpos2 = ratio * (m_[62] * canwidth / 100)*(pss/om_[1]);
        var ypos2 = ratio * (m_[63] * canheight / 100);
        var fcase2 = m_[64];
        var fName3 = m_[66].split('/').pop(-1).replace('.ttf', '').replace('_', '');
        var fSize3 = ratio * m_[67] * .75 * (canheight / 500);
        var fonts3= parseInt(fSize3)*fheight*(pss/om_[1]);
        var xpos3 = ratio * (m_[68] * canwidth / 100)*(pss/om_[1]);
        var ypos3 = ratio * m_[69] * canheight / 100;
        var fcase3 = m_[70];

        var fixalign = width/2-get_tex_width('W', areafSize + 'pt ' + fName)/2;
        var c_h = 0 ;
        if(style>2){
            fixalign = fixalign+ (get_tex_width('WWW', areafSize + 'pt ' + fName)-get_tex_width('WWW', dfSize + 'pt ' + fName))/2;
            c_h = (getTextHeight(fName, areafSize, 'WWW').height-getTextHeight(fName, dfSize, 'WWW').height)/2;
        }

        if(text.length==1 && decodeHtml(m_[9]).length>1){
            text= text + decodeHtml(m_[9])[1];
        }

        if(text.length==2 && decodeHtml(m_[9]).length>2){
            text= text + decodeHtml(m_[9])[2];
        }

        if(text[0]){
          var a = text[0];
            ctxRef.font = areafSize + 'pt ' + fName;  
            ctxRef.fillText(a,xpos-fixalign-get_tex_width(a, areafSize + 'pt ' + fName)/2,ypos+(fonts/2)*(pss/om_[1])+parseInt(areafSize)/2-c_h);
            if(m_[71]==4){
                ctxRef.shadowOffsetX = m_[49];
                ctxRef.shadowOffsetY = m_[49];
                ctxRef.shadowColor = "rgba(255,255,255,1)"; 
                ctxRef.fillText(a,xpos-fixalign-get_tex_width(a, areafSize + 'pt ' + fName)/2,ypos+(fonts/2)*(pss/om_[1])+parseInt(areafSize)/2-c_h);
            }
            if(m_[71]==3){
                  ctxRef.strokeText(a,xpos-fixalign-get_tex_width(a, areafSize + 'pt ' + fName)/2,ypos+(fonts/2)*(pss/om_[1])+parseInt(areafSize)/2-c_h);
            }
        }

        if(text[1]){
            var b = text[1];
            if(fcase2==1){
                b=b.toUpperCase(); 
            }
            if(fcase2==2){
                b= b.toLowerCase();
            } 
            if(m_[71]==4){
                ctxRef.shadowOffsetX = -m_[49];
                ctxRef.shadowOffsetY = -m_[49];
                ctxRef.shadowColor = "rgba(0,0,0,1)";
            }
            ctxRef.font = fonts2 + 'pt ' + fName2;  
            ctxRef.fillText(b,xpos+xpos2-fixalign-get_tex_width(b, fonts2 + 'pt ' + fName2)/2,ypos+ypos2+fonts2/2+parseInt(areafSize)/2-c_h);

            if(m_[71]==4){
                ctxRef.shadowOffsetX = m_[49];
                ctxRef.shadowOffsetY = m_[49];
                ctxRef.shadowColor = "rgba(255,255,255,1)"; 
                ctxRef.fillText(b,xpos+xpos2-fixalign-get_tex_width(b, fonts2 + 'pt ' + fName2)/2,ypos+ypos2+fonts2/2+parseInt(areafSize)/2-c_h);
            }
            if(m_[71]==3){
                  ctxRef.strokeText(b,xpos+xpos2-fixalign-get_tex_width(b, fonts2 + 'pt ' + fName2)/2,ypos+ypos2+fonts2/2+parseInt(areafSize)/2-c_h);
            }
        }

        if(style==3){
            if(text[2]){
              var c = text[2];
              if(fcase3==1){
                  c= c.toUpperCase(); 
              }
              if(fcase3==2){
                  c= c.toLowerCase();
              }
              if(m_[71]==4){
                  ctxRef.shadowOffsetX = -m_[49];
                  ctxRef.shadowOffsetY = -m_[49];
                  ctxRef.shadowColor = "rgba(0,0,0,1)";
              }
              ctxRef.font = fonts3 + 'pt ' + fName3;  
              ctxRef.fillText(c,xpos+xpos2+xpos3-fixalign-get_tex_width(c, fonts3 + 'pt ' + fName3)/2,ypos+ypos3+fonts3/2+parseInt(areafSize)/2-c_h);
              if(m_[71]==4){
                  ctxRef.shadowOffsetX = m_[49];
                  ctxRef.shadowOffsetY = m_[49];
                  ctxRef.shadowColor = "rgba(255,255,255,1)"; 
                  ctxRef.fillText(c,xpos+xpos2+xpos3-fixalign-get_tex_width(c, fonts3 + 'pt ' + fName3)/2,ypos+ypos3+fonts3/2+parseInt(areafSize)/2-c_h);
              }
              if(m_[71]==3){
                    ctxRef.strokeText(c,xpos+xpos2+xpos3-fixalign-get_tex_width(c, fonts3 + 'pt ' + fName3)/2,ypos+ypos3+fonts3/2+parseInt(areafSize)/2-c_h);
              }
            }
        }

        if(type==2){
            ctxRef.restore();
        }

        if(colortype>1){
              text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight);
        }

        return;
    }


    if (type == 1) {
        var k = [text, xpos - fixalign, ypos + parseInt(dfSize) / 2 + parseInt(fSize) / 2];
        if(m_[49]<0 && m_[71]==3 && colortype<2){
            ctxRef.strokeText(k[0],k[1],k[2]);
        }


        if(m_[71]==2 || m_[71]==5){
            window.pplr_n_glow(ctxRef,k[0],color,k[1],k[2],m_[71]);
        }
        else{
            ctxRef.fillText(k[0],k[1],k[2]);
        }

        if(m_[71]==3 && m_[49]>0 && colortype<2){
            ctxRef.strokeText(k[0],k[1],k[2]);
        }

        if(m_[71]==4){
            ctxRef.shadowOffsetX = m_[49];
            ctxRef.shadowOffsetY = m_[49];
            ctxRef.shadowColor = "rgba(255,255,255,1)"; 
            ctxRef.fillText(k[0],k[1],k[2]);
        }
        if(colortype>1){
            if(m_[71]==3){
                new_ctxRef.strokeText(k[0],k[1],k[2]);
            }
            text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight);
        }

        return ;
    }


    if(type>1){
        var ay = width / 2;
        var extra = ay * Math.sin(angle * Math.PI / 180);
        var extra2 = ay - ay * Math.cos(angle * Math.PI / 180);
        var ad = height;
        if (type == 2){var ad = height - fonts / 2 - parseInt(fSize) / 2;}
        var extraY = ad - ad * Math.cos(angle * Math.PI / 180);
        var extraX = ad * Math.sin(angle * Math.PI / 180);
    }

    if (type == 2) {
        ctxRef.save();
        ctxRef.translate(xpos - extra2 - extraX, ypos + fonts / 2 + parseInt(fSize) / 2 - extra + extraY);
        ctxRef.rotate(-angle * Math.PI / 180);
        ctxRef.textAlign = align;
        var align_l = 0;
        if (align == 'left') {
            align_l= -width / 2;
        }
        if (align == 'right') {
            align_l= width / 2;
        }
        if(m_[49]<0 && m_[71]==3){
            ctxRef.strokeText(text, align_l, 0);
        }

        if(m_[71]==2 || m_[71]==5){
            window.pplr_n_glow(ctxRef,text,color,align_l,0,m_[71]);
        }
        else{
        ctxRef.fillText(text, align_l, 0);
        }

        if(m_[49]>0 && m_[71]==3 ){
            ctxRef.strokeText(text, align_l, 0);
        }
        if(m_[71]==4){
            ctxRef.shadowOffsetX = m_[49];
            ctxRef.shadowOffsetY = m_[49];
            ctxRef.shadowColor = "rgba(255,255,255,1)"; 
            ctxRef.fillText(text, align_l, 0);
        }
        ctxRef.restore();

        if(colortype>1){
              text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight);
          }

        return ;
    }


    if(isRTL(text[0])){text = text.split('').reverse().join('')}

    if (((['left', 'center'].indexOf(align) > -1) && inwardFacing) || (align == 'right' && !inwardFacing)) text = text.split('').reverse().join('');
    ctxRef.save();
    var dy = (adjust / 2-  textHeight / 2 + fonts / 2);
    var f = (diameter / 2 - textHeight / 2 + fonts / 2);
    var v = dy* Math.sin(angle * Math.PI / 180);
    var x = -dy* Math.cos(angle * Math.PI / 180);
    startAngle += ((Math.PI) * !inwardFacing);

    if(!pisSafari() && !iOS || create_svg){
        ctxRef.textBaseline = 'middle';
    }


    ctxRef.textAlign = 'center';
    if (align == 'center') {
        for (var j = 0; j < text.length; j++) {
            var charWid = ctxRef.measureText(text[j]).width;
            var kerning = 0;
            if (!inwardFacing) {
                var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight ))* getTextHeight(fName, parseInt(fSize), text[j]).height;
                var mtxt = ctxRef.measureText('MW');
                if(mtxt.actualBoundingBoxAscent){
                    var txtht= mtxt.actualBoundingBoxAscent + mtxt.actualBoundingBoxDescent;
                    //kerning = txtht*(txtht/(diameter / 2- 2*textHeight))/3;
                }
            }
            startAngle += ((charWid + (j == text.length - 1 ? 0 : kerning )) / f) / 2 * -clockwise;
        }
    }


    var sa = 0;
    for (var j = 0; j < text.length; j++) {
        var charWid = ctxRef.measureText(text[j]).width;
        var kerning = 0;
        if (!inwardFacing) {
            var kerning = 2*Math.tan((charWid / 2) / (diameter / 2 - textHeight))* getTextHeight(fName, parseInt(fSize), text[j]).height;
            //var gth = getTextHeight(fName, parseInt(fSize), text[j]).height ;
            // var ker2 = 2*Math.tan((gth / 2) / (diameter / 2 - textHeight))* getTextHeight(fName, parseInt(fSize), text[j]).height;
            // console.log(kerning+'-'+ker2);
            // var texh = getTextHeight(fName, parseInt(fSize), text[j]).height;
            // console.log(textHeight/(diameter / 2)+'-'+kerning);
            var mtxt = ctxRef.measureText('MW');
            if(mtxt.actualBoundingBoxAscent){
                var txtht= mtxt.actualBoundingBoxAscent + mtxt.actualBoundingBoxDescent;
                //kerning = txtht*(txtht/(diameter / 2- 2*textHeight))/3;
            }
        }
        ctxRef.save();

        ctxRef.translate(xpos - extra2 - extraX-v, ypos - extra + extraY+x);
        //ctxRef.rotate((startAngle-(angle * Math.PI / 180)+sa+(charWid / 2 + kerning) / f * clockwise)*1.00183);
        ctxRef.rotate((startAngle-(angle * Math.PI / 180)+sa+(charWid / 2) / f * clockwise));

        if (inwardFacing) {
            var yy = (0 - diameter / 2+textMaxHeight/2 - textHeight/2);
        } else {
            var yy = -1 * (0 - diameter / 2 + textHeight) + fonts / 2 +textMaxHeight/2 - textHeight/2;
        }

        var adjust =0;

        if(pisSafari() || iOS){
            if(!create_svg){
                adjust = getlastTextHeight/4.3;
            }
        }

        if(m_[49]<0 &&m_[71]==3){
            ctxRef.strokeText(text[j], 0, yy+adjust);
        }

        if(m_[71]==2 || m_[71]==5){
            window.pplr_n_glow(ctxRef,text[j],color,0,yy+adjust,m_[71]);
        }
        else{
            ctxRef.fillText(text[j], 0, yy+adjust);
        }


        if(m_[49]>0 && m_[71]==3){
            ctxRef.strokeText(text[j], 0, yy+adjust);
        }
        if(m_[71]==4){
            ctxRef.shadowOffsetX = m_[49];
            ctxRef.shadowOffsetY = m_[49];
            ctxRef.shadowColor = "rgba(255,255,255,1)"; 
            ctxRef.fillText(text[j], 0, yy+adjust);
        }

        sa=sa+(charWid / 2) / f * clockwise+(charWid / 2 + kerning) / f * clockwise;
        ctxRef.restore();
    }

    ctxRef.restore();
    if(colortype>1){
              text_color_image(imgObj,ctxRef,new_ctxRef,canvas_text,canwidth,canheight);
        }

    return ;
};



function getOrientation(file, callback) {
var reader = new FileReader();
reader.onload = function(e) {

    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8)
    {
        return callback(-2);
    }
    var length = view.byteLength, offset = 2;
    while (offset < length) 
    {
        if (view.getUint16(offset+2, false) <= 8) return callback(-1);
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) 
        {
            if (view.getUint32(offset += 2, false) != 0x45786966) 
            {
                return callback(-1);
            }

            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++)
            {
                if (view.getUint16(offset + (i * 12), little) == 0x0112)
                {
                    return callback(view.getUint16(offset + (i * 12) + 8, little));
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00)
        {
            break;
        }
        else
        { 
            offset += view.getUint16(offset, false);
        }
    }
    return callback(-1);
};
reader.readAsArrayBuffer(file);
}


function fileuploadpplr(tis, e) {
    jQuery('.pplr_atc_form').attr("enctype", "multipart/form-data");
    var frame = jQuery(tis).attr("data-frame");
    jQuery('.cp-sel-Photos[data-main="' + tis + '"] ul li').remove();
        if (window.FileReader) {
            var file = e.target.files[0];
            if (file) {
                if(file.size/1024/1024>69.8){
                    pplr_delete(frame, true, true);
                    alert("Maximum Size 20MB!");
                    return;
                }
                if (/^image\//i.test(file.type)) {
                    setTimeout(function() {
                        jQuery('.crop_img_url[data-frame="' + frame + '"]').attr('data-type',file.type?.toLowerCase()?.includes("heic") ? "image/jpeg" : file.type);
                        pplr_readURL(file, tis, frame,file.type);
                    }, 500);
                    getOrientation(file, function(orientation) {
                        jQuery('.img_url[data-frame="' + frame + '"]').attr("data-rotation", orientation);
                    });

                    if(_CP[10] > 1){
                      pplr_files_values[frame] = e.target.files
                    }

                } else {

                      const extension = file.name?.split(".")[1];

                      const allowedTypesPreview = ['jpg','jpeg','png','gif','webp','avif','bmp','svg','svg+xml','heic'];
                      if(_CP[8] != 3 && pplr_values[frame][39] == 1 && !allowedTypesPreview.includes(extension)){
                          pplr_delete(frame, true, true);
                          alert("Invalid file type!");
                      }else {
                        const allowedTypes = [
                                    ...allowedTypesPreview,
                                    'pdf', 'ai', 'tiff', 'eps', 'psd', 'xlsx', 'xls', 'docx', 'doc', 'txt', 'cdr', 'mp3', 'mp4',
                                    ...(window.pplr_custom_allowed_types ?? [])
                                ];
                        if(allowedTypes.includes(extension)){
                            saveImages(false, tis)
                        }else {
                          pplr_delete(frame, true, true);
                          alert("Invalid file type!");
                        }
                      }

                    if(_PP[_CM + frame].split(',')[39]>2){
                        return;
                    }
                }
            }

        } else {
            console.log('filereader not found');
        }
    window.PPLR_CAlCULATE_PRICE();
};

function blobToDataURL(blob) {
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        base64data = reader.result;                
        return base64data;
    }
}

function convertHEIC(file) {
  return new Promise(function(resolve) {
      loadScript_pplr('https://cdn.jsdelivr.net/npm/heic2any@0.0.3/dist/heic2any.min.js', function() {
          heic2any({
              blob: file,
              toType: "image/jpg"
          }).then(function (convertedFile) {
              convertedFile.name = file.name.substring(0, file.name.lastIndexOf('.')) + '.jpeg';
              resolve(convertedFile);
          });
      });
  });
}

function pplr_readURL(file, input, frame ,type) {
    var reader = new FileReader();

    jQuery(input).parents('.pplrfileuploadbutton').after('<div class="pprl-progressbar"><span class="progress-title">' + _SJ[5] + '</span><div class="loader-canvas"><div class="pplr-progress"></div></div><p class="progress-txt"></p></div>');

    reader.onloadend = function(event) {
        var targetthis = reader.result;
        if(file.type?.toLowerCase()?.includes("heic") && !pisSafari()){
          convertHEIC(file).then(function(file) {
            pplr_readURL(file, input, frame, type)
          })
        }else {
          canvasimagepplr(input, targetthis, frame);
        }
    }
    reader.onprogress = function(data) {
        if (data.lengthComputable) {
            var percentComplete = parseInt(((data.loaded / data.total) * 100), 10);
            jQuery(".loader-canvas .pplr-progress").width(percentComplete + "%");
            jQuery(".loader-canvas .progress-txt").text(parseInt(percentComplete) + "%");
        }
    }
    reader.readAsDataURL(file);
};

function dataurlToBlobUrl(url) {
    var parts = url.split(',', 2);
    var mime = parts[0].substr(5).split(';')[0];
    var blob = b64toBlob(parts[1], mime);
    return URL.createObjectURL(blob);
}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
        type: contentType
    });
    return blob;
}

// newly added
function pplr_field_img(f){
    var f_data = _PP[_CM + f]?.split(',');
    if(f_data){
        var img = f_data[18];
        if(pplr_is_views && pplr_views[f_data[92]]){
          var current_view = pplr_views[f_data[92]]
          if(current_view[0] == '0'){
            var n_canvas = document.createElement("canvas");
            n_canvas.width = current_view[2]
            n_canvas.height = current_view[3]
            img = n_canvas.toDataURL();
          }else {
            img = pplr_views[f_data[92]][1];
            if(img==''){
              img = 'images/blank.png';
            }
          }
 
        }
        return img;
    }
}
// newly added

function p_img_now(frame,input){
    // var pplr_img_now = _PP[_CM + frame].split(',')[18];
    // newly added
    var pplr_img_now = pplr_field_img(frame);

    if (_CP[0] > 0) {
        var pplrform = jQuery('.pplr_atc_form');
        var pplrvariantid = pplr_variant_id(pplrform);
        for (var i = 0; i < pplr_product.variants.length; i++) {
            if (pplr_product.variants[i].id == pplrvariantid) {
                if(pplr_product.variants[i]["featured_image"]){
                    pplr_img_now = pplr_product.variants[i]["featured_image"]["src"];
                    break;
                }

            }
        }
    }

    if(pplr_img_now.indexOf('/products/') == -1 && pplr_img_now.indexOf('/files/') == -1 && pplr_img_now.indexOf('data:image') == -1){
        pplr_img_now =app_link_pplr+resizepplr+pplr_img_now+pplr_no_day;
    }
    return pplr_img_now;
}

function getBase64SizeInMB(base64String) {
    const len = base64String.length;
    const padding = (base64String.endsWith("==")) ? 2 : (base64String.endsWith("=")) ? 1 : 0;
    const bytes = (len * 3 / 4) - padding;
    return bytes / (1024 * 1024); // in MB
}



function canvasimagepplr(input, target, frame) {
    // var pplr = jQuery(".pplr img:visible:first");

const compress = (imgObj) => {
      if(_CP[8] < 3){

        var imgObj3 = imgObj || new Image();

        const func = () => {

          var type= jQuery('.crop_img_url[data-frame="' + frame + '"]').attr('data-type');

          var target2 = target;
          var angle = 0 ;
          var rt = jQuery('.img_url[data-frame="' + frame + '"]').attr("data-rotation");
          if(rt==6 || rt==5){angle = 90;}if(rt==3 || rt==4){angle = 180;}
          if(rt==8 || rt==7){angle = -90;}
          var cck = true;
          if(iOS && pisSafari() || iOS && pisFacebookOrInstagram()){
          var newcanvas = image_crop(imgObj3,4096,4096,angle);
          }
          else{
          var newcanvas = image_crop(imgObj3,false,false,angle);
          if(angle==0){
              cck =false;
          }
          }
        
          var target2 = newcanvas.toDataURL(type,0.96);
          var s_ = (4 * Math.ceil((target2.length / 3))*0.5624896334383812)/1000000; 
          var f_size = window.pplr_shopify_file_size;
          console.log(s_, f_size, 'compression')
          jQuery('.img_url[data-frame="' + frame + '"]').attr('src', '');
          if(s_>f_size)
          {
              var w = imgObj3.naturalWidth;
              var h = imgObj3.naturalHeight;
              var kkr = image_crop(imgObj3,parseInt(w * Math.sqrt(f_size/s_)),parseInt(h * Math.sqrt(f_size/s_)),angle).toDataURL(type);
              jQuery('.img_url[data-frame="' + frame + '"]').attr("src", kkr);
              target2 = kkr;
              jQuery('.img_url[data-frame="' + frame + '"]').attr("data-psrc", target2);
  
          }
          if(cck){
              jQuery('.img_url[data-frame="' + frame + '"]').attr("data-psrc", target2);
          }

          if(imgObj){
            if(ISiPAD()){
            jQuery('.pplr-modal-img[data-frame="'+frame+'"]').parent().css({'max-width':window.innerHeight/2-40,'float':'none','margin':'0 auto'});
            }
            jQuery('.pplr-modal-img[data-frame="'+frame+'"]').attr('src', target2);
          }

          return [target2, angle, cck];


        }

        if(!imgObj){
          imgObj3.crossOrigin = 'Anonymous';
          imgObj3.onload = function() {
            func()
          }
          imgObj3.src = target;
        }
        else {
          return func();
        }

      }
    }

    var data_name = jQuery(input).attr("data_name");

    var pplr_img_now = p_img_now(frame,input);
    jQuery('.pplr-crop[data-frame="' + frame + '"]').prop("disabled", false);
    jQuery('.img_url[data-frame="' + frame + '"]').attr("data-psrc", target);

    if(_PP[_CM + frame].split(',')[39]>2 || _CP[8] == 3){
        const progressEl = jQuery(".pprl-progressbar .pplr-progress");
          progressEl.css({display: "block", width: "0%"});
          saveImages(false, input, false, (progress) => {
            if(progress?.completed || progress == 99){
              jQuery(".pprl-progressbar").remove();
            }else {
              progressEl.css('width', progress+"%");
            }
          })
        jQuery(".p_m_warning").remove();

        compress();

        return;
    }

    var pplr_dd =  'pplr_delete(' + frame + ',true)';

    var name = jQuery(input).attr("name");

    if(_CP[8] <2){
        jQuery('input[name="' + name + '"]').each(function() {
            var frm  = jQuery(this).data('frame');
            var commmann= '<a  onclick="pplr_hide(' + frm + ', true);" class="js-modal-close pplr_close p_r_c"><i class="pfa fa-check"></i></a><a  onclick="pplr_zoomIn('+frm+');" class="js-modal-close pplr_close p_r_r js_z_i"><i class="pfa fa-plus"></i></a><a  class="js-modal-close pplr_close p_r_l js_z_o" onclick="pplr_zoomOut('+frm+');" ><i class="pfa fa-minus"></i></a><a  onclick="pplr_rotate('+frm+',-90);" class="js-modal-close pplr_close p_r_r js_z_r"><i class="pfa fa-rotate-left"></i></a><a  class="js-modal-close pplr_close p_r_l js_z_l" onclick="pplr_rotate('+frm+',90);" ><i class="pfa fa-rotate-right"></i></a><a  class="js-modal-close pplr_close p_r_d" onclick="pplr_delete(' + frm + ',true,true,true)" ><i class="pfa fa-trash-o"></i></a><div class="pplr_ex_button" style="display:none;"></div>';
    
            var pplr_img_now2 = p_img_now(frm,input);
            if (_CP[10] <3 ) {
                jQuery('.pplr_crop-modal[data-main="' + frm + '"]').remove();
                jQuery("body").append('<div  class="pplr_crop-modal" data-name="'+data_name+'" data-main="'+frm+'"><div class="pplr-popup pplr-modal-box"><header class="pplr_desktop">'+commmann+'</header><div class="pplr-main"><div class="pplr-p-left"><img class="pplr_popup_image" alt src="' + pplr_img_now2 + '" /></div><div class="pplr-p-right" ><div class="pplr-modal-body"><img alt class="pplr-modal-img" data-name="'+data_name+'" data-frame="'+frm+'" src="' + target + '" /></div></div></div><header class="pplr_mobile">'+commmann+'</header></div></div>');
                jQuery('.pplr-wrapper[data-main="' + frm + '"]').addClass('p_h_i');
            }
            else{
                pplr_dd =  'pplr_delete(' + frm + ',true,true,true)';
                jQuery('.pplr-wrapper[data-main="' + frm + '"] .jscroll').before('<div class="crop_header" data-frame="' + frame + '" data-name="'+data_name+'"><div class="pplr-modal-image"><img alt class="pplr-modal-img" data-name="'+data_name+'" data-frame="'+frm+'" src="' + target + '" /></div><header>'+commmann+'</header></div>');
                jQuery('.pplr-wrapper[data-main="' + frm + '"]').addClass('p_h_m');
                if(parseInt(frame) !== parseInt(frm)){
                    jQuery('.pplr-wrapper[data-main="' + frm + '"]').find('.crop_header').hide();
                    jQuery('.pplr-wrapper[data-main="' + frm + '"]').removeClass('p_h_m').addClass('p_h_i');
                }
            }
        })
        is_pplr_canvas_img_append = true;
      }

    setTimeout(function() {
        var imgObj2 = new Image();
        imgObj2.crossOrigin = 'Anonymous';
        imgObj2.onload = function() {
        var imgObj3 = new Image();
        imgObj3.crossOrigin = 'Anonymous';
        imgObj3.onload = function() {


        jQuery(".p_m_warning").remove();

        var min_width = _PP[_CM + frame].split(",")[32];
        var min_height = _PP[_CM + frame].split(",")[33];


       var [target2, angle, cck] = compress(imgObj3);
        
        var imgObj4 = new Image();
        imgObj4.crossOrigin = 'Anonymous';

        imgObj4.onload = function() {

           if(_CP[8] < 2){
              var nwidth = jQuery('.pplr-modal-img[data-frame="'+frame+'"]').get(0).naturalWidth;
              var nheight = jQuery('.pplr-modal-img[data-frame="'+frame+'"]').get(0).naturalHeight;
            }else {
              var nwidth = imgObj4.naturalWidth;
              var nheight = imgObj4.naturalHeight;
            }



            if (min_width > nwidth || min_height > nheight) {
              jQuery(".pprl-progressbar").remove();
                if (_SJ[35] == '1') {
                    jQuery('.pplr-wrapper[data-main="' + frame + '"]').append('<span class="p_m_warning">Sorry min width ' + min_width + 'px & min height ' + min_height + 'px</span>');
                } else {
                    jQuery('.pplr-wrapper[data-main="' + frame + '"]').append('<span class="p_m_warning">' + _SJ[35] + ' ' + min_width + 'px ' + _SJ[36] + ' ' + min_height + 'px</span>');
                }
                pplr_delete(frame, true, true);
                if (_CP[10] < 3) {
                    pplr_hide(frame);
                }

                return;
            }


            if(_CP[8] >1){
              jQuery(".pprl-progressbar").remove();
              return;
            }

        const call = () => {

          jQuery(".pprl-progressbar").remove();

            if (_CP[10] < 3) {
                  jQuery("body").find('.pplr_crop-modal[data-main="' + frame + '"]').show();
                  if (min_width > nwidth || min_height > nheight) {
                      jQuery(".pplr-modal-box").css('opacity', 1);
                      jQuery(".pplr-modal-box").css('max-width', 400);
                  }
              }

            if (_CP[10] <3 ) {
            var delta = jQuery('.pplr_crop-modal[data-main="' + frame + '"]');
            p_p_w_r();
            pplr_image_upload = true;
            }
            else{
            var delta = jQuery('.pplr-main');
            }
            var pwidth = delta.find(".pplr-p-left .pplr_popup_image").get(0).naturalWidth;
            var pheight = delta.find(".pplr-p-left .pplr_popup_image").get(0).naturalHeight;

           if(pplr_views?.length > 0){
              var current_view = pplr_views[pplr_values[frame][92]]
              if(current_view?.[0] == '0'){
                pwidth = current_view[2];
                pheight = current_view[3];
              }
            }
            
            var ratio = ((pwidth* _PP[_CM + frame].split(",")[4]) / (_PP[_CM + frame].split(",")[14] * pheight)).toFixed(2);

            if (_PP[_CM + frame].split(",")[31] < 2) {
            ratio = 0;
            }

            jQuery(input).parents(RP).removeClass('pplr_red_wrapper');

            var canvas = image_crop(imgObj3,1000,1000,angle);
                var width = canvas.width;
                var height = canvas.height;
                if(window.self == window.top){
                var nowtar = dataurlToBlobUrl(canvas.toDataURL( 'image/png' ));
                }
                else{
                var nowtar = canvas.toDataURL( 'image/png' );
                }
                jQuery('.pplr-modal-img[data-frame="' + frame + '"]').attr('src',nowtar).attr('angle',0).attr('ratio',ratio);

                if(!jQuery('.cp-sel-Photos[data-main="' + frame + '"] ul li')[0]){
                    
                    jQuery('input[name="' + name + '"]').each(function() {
                    var frm  = jQuery(this).data('frame');
                    var pplr_dd =  'pplr_delete(' + frm + ',true)';
                        jQuery(this).parents('.pplr-wrapper').find("ul").append('<li class="pplr_img_w" data-name="'+data_name+'"><a onclick="return false;" data-f="'+frm+'" class="pplr_img" href="' + nowtar + '" style="background-image:url(\'' + nowtar + '\');"><a class="pplr_shadow"></a><a class="pplr_modify" onclick="pplr_modify(' + frm + "," + width + "," + height + "," + ratio + "," + nwidth  + ')" ><i class="pfa fa-edit"></i></a><a class="pplr_delete" onclick="'+pplr_dd+'" ><i class="pfa fa-trash-o"></i></li>');
                        if(parseInt(frm) !==parseInt(frame) ){
                        jQuery('.fileupload[data-frame="' + frm + '"]').attr('disabled',true);
                        jQuery('.pplr-modal-img[data-frame="' + frm + '"]').attr('src',nowtar).attr('angle',0).attr('ratio',ratio);
                        if(!jQuery('.img_url[data-frame="' + frm + '"]').parents('.pplr-color-select')[0]){
                            if(cck){
                                jQuery('.img_url[data-frame="' + frm + '"]').attr("data-psrc", target2);
                            }
                            else{
                                jQuery('.img_url[data-frame="' + frm + '"]').attr("data-psrc", target);
                            }
                        }
                        }

                        });
                }
                if (_CP[10] >2 ) {
                  jQuery(".crop_header:visible").css('max-height',jQuery(".pplr-p-right:visible").height());
                  jQuery(".pplr-modal-image:visible").css('max-height',jQuery(".pplr-p-right:visible").height()-40);
                } 
                else{pplr_modal_correct(true);
                  setTimeout(function() {
                      pplr_modal_correct(true);
                  },600);
            }
            cropperpplr(frame, width, height, ratio,nwidth);

            if (_CP[10] >2 ) {
                setTimeout(function() {
                var b = jQuery('.pplr-wrapper[data-main="' + frame+ '"]').find(".crop_header header");
                var c = jQuery(".pplr-p-right:visible");
                var a = -c.offset().top - c.height()+b.offset().top+b.height();
                if(a>0 && b.height()>0){
                    c.animate({ scrollTop:c.scrollTop()+a});
                }
                },110);

            }
          }

          if(_SJ2[26] != 2){
              const progressEl = jQuery(".pprl-progressbar .pplr-progress");
              progressEl.css({display: "block", width: "0%"});
              saveImages(false, input, false, (progress) => {
                if(progress?.completed || progress == 99){
                  call();
                }else {
                  progressEl.css('width', progress+"%");
                }
              })
            }else {
              call();
            }


        }
        imgObj4.src = target2;

        }
        imgObj3.src = target;
        }
        imgObj2.src = pplr_img_now;
    }, 100);
}

function cropperpplr(frame, nwidth, nheight, ratio,k) {
    loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/cropper.js?v=1234', function() {
        var recheck;
        var vm = _SJ2[28];
        jQuery('.pplr-modal-img[data-frame="' + frame + '"]').cropper({
            aspectRatio: ratio,
            rotatable: true,
            scalable: true,
            movable:true,
            minCropBoxWidth:50,
            minCropBoxHeight:50,
            autoCropArea:1,
            checkOrientation: true,
            minContainerWidth: jQuery('.pplr-modal-img[data-frame="' + frame + '"]').parent().width(),
            strict: false,
            viewMode: vm,
            crop: function(e) {
            clearTimeout(recheck);
            recheck = setTimeout(function() {
                recalluipplr(e, frame, nwidth, nheight,k);

            }, 100);

            }
        });

    });
}


function recalluipplr(ui, frame, nwidth, nheight,k) {

    var uileft = ui.x;
    var uitop = ui.y;
    var perwidth = ui.width;
    var perheight = ui.height;
    var rotate = parseInt(ui.rotate);

    if (rotate == -90 || rotate == 270) {
        var uileft = nwidth - ui.y - perheight;
        perheight = ui.width;
        var uitop = ui.x;
        perwidth = ui.height;
    }
    if (rotate == 90 || rotate == -270) {
        var uileft = ui.y;
        var uitop = nheight-ui.x-ui.width;
        perheight = ui.width;
        perwidth = ui.height;
    }
    if (rotate == -180) {
        rotate = 180;
    }

    var check_frame_v = frame;
    if(pplr_is_views){
      const view_id = jQuery('.fileupload[data-frame="' + frame + '"]').parents('.pplr-wrapper').attr('data-pview');
      if(view_id != pplr_active_view_id){
        check_frame_v = false;
      }
    }

    var name = jQuery('.fileupload[data-frame="' + frame + '"]').attr("name");
    jQuery('.fileupload[name="' + name + '"]').each(function() {
        var frm  = jQuery(this).data('frame');
        jQuery('.img_url[data-frame="' + frm + '"]').attr('data-newr',(k/nwidth));

        if(!check_frame_v && pplr_values[frm][92] == pplr_active_view_id){
          check_frame_v = frm;
        }
        

        var crop_val = (uileft.toFixed(0)) + "_" + (uitop.toFixed(0)) + "_" + (perwidth.toFixed(0)) + "_" + (perheight.toFixed(0)) + "_" + (rotate);
        jQuery('.pplr-crop[data-frame="' + frm + '"]').val(crop_val);
        pplr_values[frm][22] = crop_val; // set crop val;

        var div = jQuery('.pplr-wrapper[data-main="' + frm + '"]').find('.pplr_img')[0];
        div.style.webkitTransform = 'rotate('+rotate+'deg)'; 
        div.style.mozTransform    = 'rotate('+rotate+'deg)'; 
        div.style.msTransform     = 'rotate('+rotate+'deg)'; 
        div.style.oTransform      = 'rotate('+rotate+'deg)'; 
        div.style.transform       = 'rotate('+rotate+'deg)';
    });

    if(!check_frame_v){
      check_frame_v = frame;
    }
    jQuery('.pplr-crop[data-frame="' + check_frame_v + '"]').trigger("change");

    update_crop_aws(frame,perwidth,perheight,uileft,uitop,k/nwidth,rotate);

    if(rotate>0 || rotate<1){
    //pplr_rotate(frame,rotate);
    }
}


function update_crop_aws(frame,perwidth,perheight,uileft,uitop,awr,rotate){
    if(pplr_s3_upload){
       var cc = $PP_EL('.img_url[data-frame="' + frame + '"]');
       var target = $PP_EL('.img_url[data-frame="' + frame + '"]').attr('data-psrc');
       var imgObj = new Image();
      imgObj.onload = function() {

         var canvas_crop = document.createElement( 'canvas' );
          var ctx_crop = canvas_crop.getContext( "2d" );
          var t = uitop.toFixed(0)*awr;
          var l = uileft.toFixed(0)*awr;
          var w = perwidth.toFixed(0)*awr;
          var h = perheight.toFixed(0)*awr;
          if(t<0){
              t=0;h=h-t;
          }
          if(l<0){
              l=0;w=w-l;
          }
          canvas_crop.width = w;
          canvas_crop.height = h;
          ctx_crop.clearRect(0,0,w,h);
          ctx_crop.drawImage(imgObj,l,t,canvas_crop.width,canvas_crop.height, 0, 0, canvas_crop.width, canvas_crop.height);

          var canvas_r = document.createElement( 'canvas' );
          var ctx_r = canvas_r.getContext( "2d" );

          if(rotate == 180 || rotate == -180 || rotate == 0){
              canvas_r.width = w;
              canvas_r.height = h;
          }
          else{
              canvas_r.width = h;
              canvas_r.height = w;    
          }

          ctx_r.save();
          ctx_r.translate(canvas_r.width/2,canvas_r.height/2);

          ctx_r.rotate(rotate*Math.PI/180);

          if(canvas_crop.width>0 && canvas_crop.height>0){
              ctx_r.drawImage(canvas_crop,-canvas_crop.width/2,-canvas_crop.height/2);
          }

          ctx_r.restore();

          if(cc.attr("data-psrc").indexOf("data:image")!== -1){
            var dtype = $PP_EL('.crop_img_url[data-frame="' + frame + '"]').data('type');
            m_ = [...pplr_values[frame]];
            if(m_[42]=='2'){ 
                var imageData = ctx_r.getImageData(0, 0, canvas_r.width, canvas_r.height);
                var data = imageData.data;
                for(var i = 0; i < data.length; i += 4) {
                var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
                data[i] = brightness;
                data[i + 1] = brightness;
                data[i + 2] = brightness;
                }
                ctx_r.putImageData(imageData, 0, 0);
            }
            var croppedImageDataURL = canvas_r.toDataURL(dtype, 1.0);

            if(!create_pplr){
                var type =  jQuery('.crop_img_url[data-frame="' + frame + '"]').data('type');
                var blobObj = img_save_from_canvas(type, croppedImageDataURL);
                var cropped_el = jQuery('.pplr-crop.pplr_aux[data-frame="' + frame + '"]')

                var fileObj = new File([blobObj], cropped_el.attr("data_name")+"_cropped_image.png");
                cropped_image_save_queue[`properties[${cropped_el.attr("data_name")}]`] = {file: fileObj, crop: cropped_el.val(), index: frame}
            }

          }

    }
    imgObj.src = target;  
    }
  }



function image_crop(imgObj3,a,b,c,d){

    var canvas = document.createElement( 'canvas' );
    var ctx = canvas.getContext( "2d" );

    var width = imgObj3.width;
    var height = imgObj3.height;
    var MAX_WIDTH = width;
    var MAX_HEIGHT = height;

    if(a && b){
        MAX_WIDTH = a;
        MAX_HEIGHT = b;
    }

    if ( width > height ) {
        if ( width > MAX_WIDTH ) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if ( height > MAX_HEIGHT ) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }
    canvas.width = width;
    canvas.height = height;
    if(d){
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,width,height);
    }

    ctx.drawImage( imgObj3, 0, 0, width, height );

    if(c){
        var canvas_r = document.createElement( 'canvas' );
        var ctx_r = canvas_r.getContext( "2d" );

        if(c == 180 || c == -180 || c == 0){
            canvas_r.width = canvas.width;
            canvas_r.height = canvas.height;
        }
        else{
            canvas_r.width = canvas.height;
            canvas_r.height = canvas.width;    
        }
        if(c == 180 || c == -180){
            ctx_r.translate(canvas_r.width,canvas_r.height);
        }else{
            if(c<0){
                ctx_r.translate(0,canvas_r.height);
            }
            else{
                ctx_r.translate(canvas_r.width,0)
            }
        }
        ctx_r.rotate(c*Math.PI/180);

        ctx_r.drawImage(canvas,0,0);
        canvas = canvas_r;
    }

    return canvas;
}

function pplr_rotate(k,l){
var cr = jQuery('.pplr-modal-img[data-frame="' + k + '"]');
var name = cr.attr('data-name');
cr.parent().css('opacity',0)
var a = cr.attr('angle');
var r = cr.attr('ratio');
var target = jQuery('.img_url[data-frame="' + k + '"]').attr('data-psrc');
var imgObj3 = new Image();
  imgObj3.onload = function() {
  var newcanvas = image_crop(imgObj3,false,false,l);
  var type= jQuery('.crop_img_url[data-frame="' + k + '"]').attr('data-type');
  var target2 = newcanvas.toDataURL(type);
  jQuery('.img_url[data-frame="' + k + '"]').attr("data-psrc", target2);
  cr.attr("data-psrc", target);
  var nwidth = newcanvas.width;
  var canvas = image_crop(cr[0],1000,1000,l);
  var width = canvas.width;
  var height = canvas.height;
  var nowtar = dataurlToBlobUrl(canvas.toDataURL( 'image/png' ));
  jQuery('.pplr-modal-img[data-name="' + name + '"]').each(function() {
    jQuery(this).attr('src',nowtar).attr('angle',l);
  })
  jQuery('.pplr_img[data-f="' + k + '"]').attr('src',nowtar).css('background-image','url(\'' + nowtar + '\')');
  cr.cropper("destroy");
  if (_CP[10] <3 ) {
    pplr_modal_correct(true);
  }
  cropperpplr(k, width, height, r,nwidth);
  cr.parent().animate({opacity: 1}, 1000);
}
imgObj3.src = target;
}

function pplr_zoomIn(k){

jQuery('.pplr-modal-img[data-frame="' + k + '"]').cropper('zoom', 0.1);

}
function pplr_zoomOut(k){
    jQuery('.pplr-modal-img[data-frame="' + k + '"]').cropper('zoom', -0.1);
}


function pplr_modify(frame, width, height, ratio,nwidth) {
if (_CP[10] >2 ) {
jQuery('.pplr-wrapper[data-main="' + frame + '"]').find('.crop_header').show();
jQuery('.pplr-wrapper[data-main="' + frame + '"]').addClass('p_h_m');
cropperpplr(frame, width, height, ratio,nwidth);
return;
}
p_p_w_r();
//jQuery("body").addClass("pplr-modal-open");
if(!jQuery(".pplr_crop-modal[data-main='"+frame+"'] cropper-container")[0]){
cropperpplr(frame, width, height, ratio,nwidth);
}
jQuery(".pplr_crop-modal[data-main='"+frame+"']").show();
p_p_w_r();
jQuery('.pplr-crop[data-frame="' + frame + '"]').trigger('change');

}

function pplr_hide(tis,k) {

    if(k && _SJ2[26] != 1){
      saveQueueImages()
    }

    if (_CP[10] >2 ) {
        jQuery('.pplr-wrapper[data-main="' + tis + '"]').find('.crop_header').hide();
        jQuery('.pplr-wrapper[data-main="' + tis + '"]').removeClass('p_h_m').addClass('p_h_i');
        return;
    }
    jQuery(".pplr_crop-modal").hide();
    jQuery("body").removeClass("pplr-modal-open");
    p_p_w_r();
    jQuery('.pplr-crop[data-frame="' + tis + '"]').trigger('change');
}



function numberWithCommas(nStr, d, f) {
    var k = '.', n = ',';
    var noDecimals = false;

    var format = !d ? (typeof pplr_money_formate !== 'undefined' ? pplr_money_formate : '') : (f || '');

    if (format.indexOf('amount_with_comma_separator') > -1) {
        k = ','; n = '.';
    }
    if (format.indexOf('amount_no_decimals_with_comma_separator') > -1) {
        k = ','; n = '.'; noDecimals = true;
    }
    if (format.indexOf('amount_no_decimals') > -1) {
        noDecimals = true;
    }

    nStr = parseFloat(nStr).toFixed(2);
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 && !noDecimals ? k + x[1] : '';

    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + n + '$2');
    }

    return x1 + x2;
}



var pplr_calc_first = false;

if (typeof pplrqty == 'undefined') {

var pplrqty = function (k,_l,_n) {


if (window.pplr_addi_price) {
    pricechange = true;
  }

if(!pricechange){
  return 0;
}

if(k){
  if(jQuery(_l).val()<_n){jQuery(_l).val(_n)}
}
var pplrqty = 0;
var pplrqtyreturn = 0;
var pprice2 = pplr_product.price;
var pplrform = jQuery('.pplr_atc_form');
var qty = 1 ;

if(pplrform.find("[name='quantity']").length>0){
  qty = pplrform.find("[name='quantity']").val();
}
else{
  var i_d = pplrform.attr('id');
  var i_d_qty = jQuery("[name='quantity'][form='"+i_d+"']");
  if(i_d_qty[0]){
    qty = i_d_qty.val() ;
  }
}

if(window.pplr_no_qty_update){
  qty = 1;
}

var pplrvariantid = pplr_variant_id(jQuery('.pplrform,.pplr_atc_form'));


for (var i = 0; i < pplr_product.variants.length; i++) {
  if (pplr_product.variants[i].id == pplrvariantid) {
    var pprice2 = pplr_product.variants[i].price
    }
}
var hasAddi = false;
var rate = Shopify.currency.rate;
var shopify_variant = false;

if(window.pplr_variant_product){
  if(Object.keys(window.pplr_variant_product).length>0){
    shopify_variant = true;
  }
}

jQuery(".pplraddprice:not([disabled]),.pplr_disabled.pplraddprice").each(function() {
  var k= jQuery(this);
  if (jQuery.trim(k.val()) !== "" && k.val() !== "blank" && pplrischecked(k) && !k.parents('.pplr_no_preview')[0] || k.hasClass('pplr_mselect') && k.val() !== "blank" && pplrischecked(k) && !k.parents('.pplr_no_preview')[0]) {
    var dp = k.attr("data-pplr_price").replace(/[^0-9.]/g, '');
    if(dp == ''){dp = 0;}
    var a_p = parseFloat(dp);
    if(a_p>0){  
        var _J = k.attr('data-pplr_price-type');
        if(k.hasClass('pplr_font')){
          var fr = k.data('frame');
          var _b = jQuery('.pplr_text[data-main="' + fr + '"]');
          var _n = _b.attr('data-pplr_price-type');
          if (typeof _n !== typeof undefined && _n !== false) {
            if(_n==4){k=_b;_J=_n;}
          }
        }
        if (typeof _J !== typeof undefined && _J !== false) {
          if(_J==3){
            a_p = parseFloat(dp)*pprice2/10000;
          }

          if(_J==5){
            a_p = parseFloat(dp)*pprice2/10000+parseFloat(dp)*pplrqty/100;
          }

          if(_J==4){
            var f = k.attr("data-frame");

            if (typeof pplr_price_filter == 'undefined') {
              var pplr_price_filter = /[^0-9a-zA-Z]/g;
            }
            if(_PP[_CM + f].split(",")[38]>1){
              a_p = parseFloat(dp*(k.val().replace(pplr_price_filter, '').length));
            }
            else{
              a_p = parseFloat(dp*(k.val().replace(/\s/g, '').length));
            }

          }
        }

        if (window.pplr_modify_price) {
          var check_p = window.pplr_modify_price(k,pplrqty,pprice2);
          if(check_p){
            if(check_p[0]){
              a_p = check_p[1];
            };
          }
        }

        var cur_adjust = 0 ;

        var dv  = k.attr('data-variant');

        if (typeof dv !== typeof undefined && dv !== false && createproduct !=='2' && createproduct !=='5') {
            if(dv ==''){
              pplrqtyreturn = pplrqtyreturn + a_p*rate;
            }
            else{
              if(diffcur){
                var addr = Math.ceil(a_p*rate)- a_p*rate;
                var tttr = parseFloat((pplr_product.price).toString().slice(-2));
                var addr2 = tttr - 100;
                if(100-addr*100-tttr>0){
                  addr2 = tttr;
                }
                if(_SJ2[36] !=='1'){
                  if(!shopify_variant){
                    cur_adjust = (addr2+addr*100)/(100*rate);
                    hasAddi = false;
                  }
                }
              }
            }

          }
          else{
              pplrqtyreturn += dv === '' || dv === undefined ? a_p * rate : a_p;
          }

        pplrqty += dv === '' || dv === undefined ? a_p * rate : a_p;


      }
}
});


if (window.pplr_addi_price) {
    pplrqty = pplrqty + window.pplr_addi_price(pplrqty,pprice2);
    pplrqtyreturn = pplrqtyreturn + window.pplr_addi_price(pplrqty,pprice2);
}


if(pplrqty == 0 && !pplr_calc_first){
  pplr_calc_first = true;
  return 0;
}

pplr_calc_first = true;


var _P2 = jQuery("."+_SJ2[8]+',#'+_SJ2[8]);
if (_CP[10] <3 ) {
var _P = jQuery("."+_SJ2[8]+',#'+_SJ2[8]);

if (!_P[0]) {var _P = jQuery("#main .ProductMeta__Price:not(.Price--compareAt),.price-list:not(.product-item__price-list) .price:not(.price--compare) ,#ProductPrice-product .money,.gf_product-price.money,#productPrice .money,.product__current-price .money,#product-price .money,.product-price .sale,.product-single .price-item--sale:visible,#price-field .money,.pplrcur,#price .price,#ProductPrice-product-template .money,.product-single__meta .product__price .price-item--sale:visible,.product__price:not(.product__price--compare)>.money,.product-detail .theme-money,.price__container .current_price .money,.price__regular .price-item--regular span,."+_SJ2[8]+',#'+_SJ2[8]);}
if (!_P[0]) {var _P = jQuery(".product-single__price,form .price-item--regular .money,.new-price,form .price-item--regular:visible,#price,#ProductPrice-product-template,.price__container .current_price,.product__current-price,.product-price .money,.product__price.sale-price,#product-price,.product__price [data-product-price]");}
  if (!_P[0]) {var _P = jQuery(".product-single__price,form .price-item--regular,.product__price:not(.product__price--compare),.price__regular .price-item--regular");}
}
else{
  var _P = jQuery(".pplr-p-right .pplrcur,.pplr_ex_inner .pplrcur");
}

var _X = '';
var _J = "$";
var decimal = 2;
var cur_r = false;

if (_P[0]) {
    var _J = _P.attr('data-cur');
  if (typeof _J !== typeof undefined && _J !== false) {
    if (typeof pplr_money_formate !== 'undefined') {
      if(pplr_money_formate.indexOf('amount_no_decimals')> -1){
        decimal = 0;
      }
    }
  }
  else{
  if (typeof pplr_money_formate !== 'undefined') {
      if(pplr_money_formate.indexOf('amount')> -1){
      var a = pplr_money_formate.replace(/<\/?[^>]+(>|$)/g, "");
      var _J = a.split('{{')[0];
      if(a.split('}}').length>1){
        var _X = a.split('}}')[1];
      }
      if(_J.trim()==''){_P.attr('data-cur-place','right');_J = _X;cur_r = true;}
    }

    if(pplr_money_formate.indexOf('amount_no_decimals')> -1){
      decimal = 0;
    }

    }
  }
}

if( Shopify.currency !== 'undefined' && _X ==''){
var cc = {"gbp":'£', "usd":'$', "cad":'$', "aud":'$', "eur":'€', "jpy":'¥'};
var mc = Shopify.currency["active"].toLowerCase();
if(cc[mc]){_J = cc[mc];}
};

var a_p_t = jQuery('.a_p_t');
var g = 1;

var t_pplrqty = pplrqty*qty;

if(createproduct !== '2' && createproduct !=='5'){
    t_pplrqty = pplrqty * qty - pplrqtyreturn*qty + convertAndRound(pplrqtyreturn *qty, rate, Shopify.currency.active) ;
  }
if(createproduct !== '2' && createproduct !=='5' && _SJ2[36] =='0' && _SJ[26]>0){
  t_pplrqty = pplrqty * qty - pplrqtyreturn*qty + Math.round(convertAndRound(pplrqtyreturn, rate, Shopify.currency.active)*100*qty/_SJ[26])*_SJ[26]/100 ;
}
var additional = (t_pplrqty).toFixed(decimal);

var _w ='';
if (_P[0] && pricechange) {

var pplr_total = ((pprice2 / 100)*qty + t_pplrqty).toFixed(decimal);

var _s = jQuery(".doubly-wrapper .selected,.currency-switcher:not(.vitals-nice-select) .list .selected,.doubly-float,[name='doubly-currencies']");
jQuery(".currency-switcher select").trigger('change');

if(_s[0]){
  loadScript_pplr('//init.grizzlyapps.com/9e32c84f0db4f7b1eb40c32bdb0bdea9', function() {
      loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/currency.js', function() {
        var b = Shopify.currency.active;
        if(_s.hasClass('currency-switcher-btn')){
          var k = _s.attr('doubly-currency');
          var _J = _s.text().split(" ")[2];
        }else{
          if(_s.hasClass('doubly-float')){
            var k = _s.find('.currency-switcher').val();
            var _J = _s.attr('data-currency-symbol');
          }else{
            if(_s.hasClass('currency-switcher')){
              var k = _s.val();
              var _J = _s.find(":selected").attr('data-currency-symbol');
            }else{
               var k = _s.attr('data-display');
              var _J = _s.attr('data-currency-symbol');
            }
          }
        }

        var curr = pplr_currency[k].money_with_currency_format.replace("{{amount}}",',').replace("{{ amount }}",',').replace("{{amount_with_comma_separator}}",',').replace("{{amount_no_decimals}}",',').split(',');

        if (typeof _J == typeof undefined || _J == false) {
            var _J = decodeHtml(curr[0]);
            if(pplr_currency[k].money_format.indexOf(" ")>-1){
              _J = _J + ' ';
            }

          }

        _X=decodeHtml(curr[1]).replace('Ã˜Â¯.Ã˜Â¥','Ø¯.Ø¥');


        pplr_total = Currency.convert(pplr_total,Shopify.currency.active,k).toFixed(decimal);
        additional = Currency.convert(pplrqty*qty,Shopify.currency.active,k).toFixed(decimal);
        var kkr = jQuery('[doubly-currency]');
        if(kkr[0]){
          if(kkr.first().text().indexOf(".95")>-1 || kkr.first().text().indexOf(",95")>-1){
            if(pplr_total>0){pplr_total = pplr_total.substr(0, (pplr_total.toString().indexOf(".") + 1)) + 95;}
            if(additional>0){additional = additional.substr(0, (additional.toString().indexOf(".") + 1)) + 95;}
          }
        }
        _P.text(_J + numberWithCommas(pplr_total,1,pplr_currency[k].money_with_currency_format) +_X );
        if(_SJ2[6]>0){a_p_t.html('<span class="money">'+_SJ2[7]+' '+_J + numberWithCommas(additional,1,pplr_currency[k].money_with_currency_format)+_X+'</span>')}
      })
  })
}
else{
  //var _v=jQuery(".BOLD-mc-picker .name");if("undefined"!=typeof Currency&&"undefined"!=typeof cookieCurrency&&_v[0]){var _g=jQuery("[data-original-value]"),_c=1;if(_g[0]){var _l=parseFloat(_g.first().attr("data-original-value"))/100,_m=parseFloat(_g.first().attr("data-"+_v.first().text().toLowerCase()).replace(/[^\d.-]/g,""));_c=_l/_m}if(1==_c)var pplr_total=Currency.convert(pplr_total*_c,Shopify.currency.active,_v.first().text()).toFixed(2);else pplr_total=(pplr_total/_c).toFixed(2);_J=decodeHtml(Currency.moneyFormats[_v.first().text()].money_format.replace("{{amount}}","").replace("{{amount_no_decimals}}",""))}
  
var _s = jQuery(".currency-picker[name='currencies'],.currency-selector select[name='currencies'],#currencies[name='currencies']");
if(_s[0] && typeof Currency !=="undefined"  && typeof Currency.moneyFormats !=="undefined"){
    var b = Shopify.currency.active;
    if (typeof Currency.cookie === 'function') {
      var k = Currency.cookie.read();
    }
    if (k == null || typeof k !=="undefined") {
    var k = Shopify.currency.active;
    }
    k = k.toUpperCase();
    var _d = Currency.moneyFormats[k]?.["money_with_currency_format"] ??  pplr_money_formate;

    _d = _d.replace("<span class=money>",'').replace("</span>",'').replace("{{amount_with_comma_separator}}",',').replace("{{amount}}",',').replace("{{ amount }}",',').replace("{{amount_no_decimals}}",',').split(",") ;

    var _J = decodeHtml(_d[0]);
    var _w = _d[1];
    pplr_total = Currency.convert(pplr_total,Shopify.currency.active,k).toFixed(decimal);
    additional = Currency.convert(t_pplrqty,Shopify.currency.active,k).toFixed(decimal);
    _P.text(_J + numberWithCommas(pplr_total)+_w);
}else{

  pplr_total = (pplr_total*1).toFixed(decimal);

  additional = (t_pplrqty).toFixed(decimal);

  if(createproduct == 2 || createproduct ==5){
    pplr_total = convertAndRound(pplr_total, rate, Shopify.currency.active);
    if(!window.rounding_enabled){
      additional = ((t_pplrqty/rate).toFixed(decimal) * rate).toFixed(decimal);
      pplr_total = ((pplr_total/rate).toFixed(decimal) * rate).toFixed(decimal);
    }else{
      additional=convertAndRound(t_pplrqty, rate, Shopify.currency.active);
    }
    pplr_total = (pplr_total*1).toFixed(decimal);
  }
  else{
   // if(window.rounding_enabled && _SJ2[36] !=='0'){additional=convertAndRound(t_pplrqty, rate, Shopify.currency.active);}
  }

  _J=decodeHtml(_J).replace('&euro;','â‚¬').replace('&pound;','Â£');
  
  if(cur_r){_J='';}
  _P.text(_J + numberWithCommas(pplr_total)+_X);

}    

  if(a_p_t[0]){a_p_t.html(_SJ2[7]+' <span>'+_J + numberWithCommas(additional)+_X+'</span></br>')}
}
}

  if(createproduct == 2 || createproduct ==5){
    return pplrqtyreturn;
  }else{
   return convertAndRound(pplrqtyreturn, rate, Shopify.currency.active);
  }
}
}

window.PPLR_CAlCULATE_PRICE = pplrqty;

function addthistoinput(tis){
  var a = jQuery(tis).parent('.key_layout');
  var is = a.siblings('.pplr_text');
  var oldval = is.val();
  var n = jQuery(tis).attr('data-value');
  var maxchar = is.attr('maxlength') || is.attr('data-maxlength');
  if (typeof maxchar == typeof undefined || maxchar == false) {
      maxchar = 50000;
  }
  const input = a.siblings('.pplr_text');
  if(oldval.length < maxchar+1){
      var _J = is.attr('fpos');
      if (typeof J !== typeof undefined && J !== false) {
          if(input.css('direction') == "rtl"){
              oldval = oldval.slice(_J) + n + oldval.slice(0, _J);
          }else {
              oldval = oldval.slice(0, _J) + n + oldval.slice(_J);
          }
          is.attr('fpos', parseInt(_J)+n.length);
      }
      else{
          if(input.css('direction') == "rtl"){
              oldval = n + oldval
          }else {
              oldval = oldval + n
          }
      }
      input.val(oldval).trigger('input');
  }
}


function togglekey(tis){
jQuery(tis).siblings('.key_layout').slideToggle();
}

function base64Encode(str) {
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "", i = 0, len = str.length, c1, c2, c3;
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += CHARS.charAt(c1 >> 2);
        out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += CHARS.charAt(c3 & 0x3F);
    }
    return out;
}

function addfont(m_){
    var myfont = m_.split('/');
    var fct = myfont.length;
    myfont[fct - 1].replace(".ttf", "")
    loadfont += "<div  class='pplrloadfont' style=\"font-family:\'" + myfont[fct - 1].replace(".ttf", "") + "\' !important;\">a</div>";
    var link = app_link_pplr + m_ +pplr_no_day;
    var p_ttf = myfont[fct - 1].replace(".ttf", "");
    var c_f = false;
    if(typeof pplr_custom_font !=='undefined'){
        if(pplr_custom_font[p_ttf]){
            link = pplr_custom_font[p_ttf];
        }
    }
    fontface += "@font-face {font-family: '" + p_ttf + "';src: url('"+link+ "') format('truetype');} ";
    if(commonsvg){
        jQuery.ajax({
            url:link,
            cache:true,
            xhr: function() {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 2) {
                        if (xhr.status == 200) {
                            xhr.responseType = "blob";
                        } else {
                            xhr.responseType = "text";
                        }
                    }
                };
                return xhr;
            },
            success: function(data){
                if(data instanceof Blob){
                    var reader = new FileReader();
                        reader.onload =  function(e){
                        font_face_array[myfont[fct - 1].replace(".ttf", "")]= [p_ttf,btoa(e.target.result)];
                    };
                    reader.readAsBinaryString(data);
                }
                else{
                    font_face_array[myfont[fct - 1].replace(".ttf", "")]= [p_ttf,base64Encode(data)];
                }
            },
            error:function(data){
                console.log(data);
            }
        });
    }
}

 
  
function pplr_Ready() {
    if (window.pplr_Loaded) {
        return;
    }
    window.pplr_Loaded = true;


    var p_condition = false;
    if(conditions_json !== null){
      if(Array.isArray(conditions_json) || typeof(conditions_json) !== 'undefined'){
        if(Object.keys(conditions_json).length>0){
            p_condition = true;
          }
      }
    }
    if(product_personalizer['conditions'] ){
      if(Object.keys(JSON.parse(product_personalizer['conditions'])).length>0){
        p_condition = true;
      }
    }

    var prodata = _CP;
    // var cstmfy_all = prodata[0];
    var cstmfy_count = prodata[1];
    // var url = prodata[2];
    // var url1 = prodata[2];
    // var img_size = prodata[3];
    var preview = prodata[9];
    var customize = prodata[10];

    if(p_condition){
      for(let x = 1; x <= cstmfy_count; x++){

        var m_ = _PP[_CM + x].split(",");
        pplr_values[x] = m_;
        if(!pplr_is_views){
          pplr_values[x][92] = false;
        }
        pplr_values[x][pplr_last_idx] = {};
        if(m_[13]<3){
          pplr_values[x][pplr_last_idx].text_val = m_[9];
        }
        else if(m_[13] == 3 || m_[13] == 3.5){
          var imagegroup = imagegroup_json[m_[21]?.replaceAll(`\\'`, "'")];
          if(imagegroup){
            for (var y = 0; y < Object.keys(imagegroup).length; ++y) {

              var imagekey = Object.keys(imagegroup)[y];
              var image_name = imagegroup[imagekey];
              if (imagegroup[imagekey] instanceof Array) {
                image_name = imagegroup[imagekey][0];
              }
              if (m_[15] == 'images/' + pplr_myshopify_url + '/' + decode_utf8(image_name)) {
                pplr_values[x][pplr_last_idx].val = decodeHtml(imagekey);
                break;
              }
            }
          }
        }else if(m_[13] == 4){

          var cstmfy_color = m_[6];

          var colorgroup = colorgroup_json[m_[52]?.replaceAll(`\\'`, "'")];
          if (Array.isArray(colorgroup) || typeof(colorgroup) !== 'undefined' && colorgroup !== null) {
            
            for (var y = 0; y < Object.keys(colorgroup).length; ++y) {
              var colorkey = Object.keys(colorgroup)[y];
              if(Array.isArray(colorgroup[colorkey])){
                var colordata = colorgroup[colorkey][0];
                if(colorgroup[colorkey][1]>1){
                    var colordata = colorgroup[colorkey][2];
                }
              }
              else{
                  var colordata = colorgroup[colorkey];
              }
              if (colordata == cstmfy_color || colordata == cstmfy_color ) {
                pplr_values[x][pplr_last_idx].val = decodeHtml(colorkey);
                break;
              }
            }
          }

        }else if(m_[13] == 7 || m_[13] == 6){
          var dropdown = dropdown_json[m_[51]];
          if(dropdown){
            for (var y = 0; y < Object.keys(dropdown).length; ++y) {
              var df=false;
              var droptkey = Object.keys(dropdown)[y];
              if('_'+droptkey == decodeHtml(m_[58]) || '_'+droptkey == m_[58] || '_'+decodeHtml(droptkey) == "_"+decodeHtml(decodeHtml(m_[58]?.replace("_", "")))){
                df = true;
              }

              if(m_[44]==2 && mselect){
                  var df = false;
              }
              if(df){
                pplr_values[x][pplr_last_idx].val = decodeHtml(droptkey);
                break;
              }
            }
          }

        }else if(m_[13] == 8){
          if(m_[91]<1){
            pplr_values[x][pplr_last_idx].val = m_[53]!=0;
          }
        }

        if(pplr_values[x][pplr_last_idx]?.val === undefined){
          pplr_values[x][pplr_last_idx].val = ""
        }

      }
    }


    jQuery.fn.rC = jQuery.fn.removeClass;
    jQuery.fn._aC = jQuery.fn.addClass;

    if (prodata.length > 13) {
        var cstmfy_preview_text = prodata[13];
    } else {
        var cstmfy_preview_text = 'PREVIEW';
    }

    var text = '';

    var cstmfy_name = '';
    var cstmfy_default = '';
    // var imageon = false;
    var pcropper = false;

    var pplrfontthumb = '';
    if (_SJ[19] == 2) {
        var pplrfontthumb = ' pplrfontthumb ';
    }
    // var pplr_image_loader ='';


    var [hidecon, showcon] = showHideFieldCondition();
    for (var i = 0; i < hidecon.length; ++i) {
      var index = showcon.indexOf(hidecon[i]);
      if (index > -1) {
        showcon.splice(index, 1);
      }
    }


    var frame_set = false;

    for (var x = 1; x <= cstmfy_count; x++) {

        var ccolor = '';
        var cfont = '';
        var fcolor = '';
        var droptext= '';
        var tabx= false;
        var selectdisabled = '';

        if(!frame_set){
          if(!hidecon.includes(x.toString()) && !hidecon.includes(x)){
            frame_set = true;
            pplrframe = x;
          }
        }


        if(_CP[10]==2){
            var selectdisabled =' disabled ';
        }

        var m_ = _PP[_CM + x].split(",");

        if(m_[21] == 0 || !m_[21] || m_[21] == ""){
          m_[21] = 1;
        }

        if(!pplr_values[x]){
          pplr_values[x] = m_;
          if(!pplr_is_views){
            pplr_values[x][92] = false;
          }
          pplr_values[x][pplr_last_idx] = {};
        }
        var frame = x;
        var cstmfy_name = decodeHtml(m_[8].replace(/\\/g, ""));
        var c_n = decodeHtml(m_[8]).replace(/(<([^>]+)>)/ig,"");
        cstmfy_name = jQuery.trim(cstmfy_name);

        if(!pplr_has_duplicate.field){
          if(pplr_dup_labels.field[cstmfy_name]){
            pplr_has_duplicate.field = true;
          }else {
            pplr_dup_labels.field[cstmfy_name] = true
          }
        }
        if(m_[13] == 8){
          pplr_has_checkbox = true
        }

        // condition
        var base_class = "pplr-wrapper";
        var display_style = "";
        var input_prop = "";
        if(hidecon?.indexOf(x) > -1 || hidecon?.indexOf(x.toString()) > -1){
          base_class += " pplr_no_preview";
          input_prop = " disabled";
          display_style = `display:none;`;
          pplr_values[x][pplr_last_idx].hidden = true
        }else if(showcon?.indexOf(x) > -1){
          base_class += " pplr_show_preview"
        }

        // newly added
        var view_attr = m_[92] ? `data-pview="${m_[92]}"` : "";

        if (cstmfy_name == '') { 
            var cstmfy_prop = x;
        } else {
            var cstmfy_prop = decodeHtml(m_[8].replace(/\\/g, '').replace(/\//g, '').replace(/"/g, "'").replace("]", " ").replace('[', " ")); 
        }

        if(m_[75]>0 && m_[76] !==''){
            cstmfy_prop = m_[76];
        }

        if(pplr_s3_upload){
          cstmfy_prop = cstmfy_prop?.toString().replace(/\n/g, "");
        }
        
        pplr_values[x][pplr_last_idx].data_name = cstmfy_prop;
        
        if(cstmfy_name.indexOf('_')==0){
            cstmfy_name = cstmfy_name.substr(1);
        }

        if(m_[85]){
            cstmfy_name = cstmfy_name + ' <span class="pplr_option_price_span"></span> ';
        }


        var cstmfy_class = " pplr-" + c_n.replace(/[^\w\s]/gi, '').split(' ').join('-').toLowerCase();
        cstmfy_class = cstmfy_class.replace("pplr-main", "");

        var cstmfy_class_opt = " pplr-" + c_n.split(' ').join('-').toLowerCase();
        cstmfy_class_opt=cstmfy_class_opt.replace("pplr-main", "");
        var cstmfy_input_type = m_[13];
        var cstmfy_ins='';
        var tooltip = autocorrectHTML(decodeHtml(m_[29]));

        if (tooltip !== '1' && jQuery.trim(tooltip) !== '' ) {
            if (_SJ[13] == 2 ) {
                var vins = ' <span class="ptooltip"><span class="qcon">?</span><span class="ptooltiptext">' + tooltip + '<span class="ptooltiparrow"></span></span></span>';
                if(cstmfy_input_type<8){
                    cstmfy_name += vins;
                }
                else{
                    cstmfy_ins =  vins;
                }
            } else if(_SJ[13] == 1) {
                cstmfy_name += ' <span class="ptbr">(</span>' + tooltip + '<span class="ptbr">)</span>';
            }
            else{
                cstmfy_ins =  ' <span class="pplr_ins" data-frame="' + x + '">' + tooltip + '</span>';
            }
        }

        var cstmfy_default = decodeHtml(m_[9].replace(/\\/g, ''));
        var cstmfy_color = m_[6];
        var cstmfy_required = '';
        var cstmfy_c_disabled = '';
        var cstmfy_c_required = '';
        var placeholder_default = m_[9].replace("\n", "").replace(/\\/g, '').replace(/"/g, '&quot;');
        var default_value = decodeHtml(m_[9]).replace(/"/g, '&quot;');
        var oindex= '';

        if(m_[38]=='1'){
            var pattern= '';
        }

        var type ='type="text"';
        if(m_[38]=='2'){
            var pattern= 'pattern="[a-zA-Z0-9\\s]+"'+' title="'+ tooltip.replace(/"/g, "'") + '"';
        }

        if(m_[38]=='3'){
            var pattern= 'pattern="[A-Za-z\\s]+"'+' title="'+ tooltip.replace(/"/g, "'") + '"';
        }

        if(m_[38]=='4'){
            var type ='type="number"';
        }

        if(m_[38]=='5'){
            var type ='type="date"';
        }

        if (m_[23] == '1' && customize !==2 &&  m_[39] !=='2' &&  m_[39] !=='4') {
            var cstmfy_required = ' required ';
            var placeholder_default = m_[9].replace("\n", "").replace(/\\/g, '');
            var default_value = '';
        }

        if (m_[23] == '1' &&  m_[39] !=='2' || m_[23] == '1' && m_[13]>5) {
            var cstmfy_c_required = ' cstmfy_c_required '; 
        }

        if( m_[26] >1){ 
            var default_value= '';
        }

        if (prodata[10] == 2) {
            var cstmfy_required = '';
        }

        var pplr_arrow = "";
        if (_SJ[0] == 2 && m_[13] !== 8) {
            cstmfy_class_opt = cstmfy_class_opt + ' pplr-collapsible pplr-hide ';
            var pplr_arrow = "<div class=\"pplr-arrow pplr-arrow-right\"></div>";
        } 

        if (m_[23] <3  && typeof(m_[37]) !== 'undefined') {
            if(m_[37]!=='1' && m_[37].replace(/ /g, '')!==''){
                oindex= '<label class="oindexlabel">'+m_[37]+'</label>';
                var tabx= true;
                pplr_has_tab = true
            }
        }

        var optionwith = '';
        var optionwithclass = '';
        for (var y = x; y > 0; y--) {
            var z = y + 1;
            if (z > cstmfy_count) {
                var z = cstmfy_count;
            }
            if (_PP[_CM + y].split(",")[23] == 3) {
              optionwithclass_v = true;
                var optionwith = '<input class="pplr_check" type="radio" data-frame="' + x + '" onclick="pplr_option(this)" name="field' + (y - 1) + '"  > ';
                optionwithclass = ' optionwithclass ';
                oindex= '';
                var cstmfy_required = '';
                var cstmfy_c_required = '';
                var pplr_arrow = "";
                var placeholder_default = '';
            } else if (_PP[_CM + z].split(",")[23] == 3) {
              optionwithclass_v = true;
                if (x == y) {
                    var checked = ' checked ';
                } else {
                    var checked = '';
                }
                var optionwith = '<input class="pplr_check" type="radio" data-frame="' + x + '" onclick="pplr_option(this)" name="field' + y + '" ' + checked + '> ';
                optionwithclass = ' optionwithclass ';
                oindex= '';
                var cstmfy_required = '';
                var cstmfy_c_required = '';
                var placeholder_default = '';
                var pplr_arrow = "";
                break;
            } else {
                break;
            }
        }

        var pplr_arrow_main = "";
        if (_SJ[0] == 2  && optionwith === '') {
            if(x == 1 && m_[23] <2 || m_[13] == '8'){
            } else{
                cstmfy_class = cstmfy_class + ' pplr-collapsible pplr-hide ';
                var pplr_arrow_main = "<div class=\"pplr-arrow pplr-arrow-right\"></div>";
            }
        }


        if(m_[57]==1 && tabend && tabstart < x){
            text +='</div>';
            tabend = false;
        }


        // newly added
        if(pplr_is_views && pplr_total_views > 1 && pplr_views[first_view_id][16] != 1) {
            var prev_m_ = _PP[_CM + (x - 1)]?.split(",");
            var new_tab = true;
            if(prev_m_ && m_[92] == prev_m_[92]){ 
                new_tab = false;
            }else if(prev_m_ && m_[92] != prev_m_[92]) {
              tabend = true;
                text += "</div>";
            }
            if(new_tab){
                pplr_has_tab = true
                tabstart = x;
                oindex ='';
                text +='<div class="pplr_tab" data-pview="'+m_[92]+'" id="pplr_tab_'+x+'" data-tab="'+x+'">';
                
                pplr_tab +='<div class="pplr_tab_index" data-pview="'+m_[92]+'" data-tab="'+x+'" onclick="pplr_tab_show('+x+',this)"><span>'+pplr_views[m_[92]][4]+'</span></div>';
            }
        }  
        // newly added
        else if(m_[57] == 1 && tabx){ 
            tabstart = x;
            oindex ='';
            text +='<div class="pplr_tab" id="pplr_tab_'+x+'" data-tab="'+x+'">';
            tabend = true;
            pplr_tab +='<div class="pplr_tab_index" data-tab="'+x+'" onclick="pplr_tab_show('+x+',this)"><span>'+m_[37]+'</span></div>';
        }



        var cstmfy_fontname = m_[24].split('{{')[0];
        if(cstmfy_fontname.indexOf('_')==0){
            cstmfy_fontname = cstmfy_fontname.substr(1);
        }

        cstmfy_fontname = decodeHtml(cstmfy_fontname.replace(/\\/g, ""));
        cstmfy_fontname = jQuery.trim(cstmfy_fontname);

        var cstmfy_static = ' '; 
        if(m_[39]=='2' && m_[13]<6 || m_[39]=='4'){
            var cstmfy_static = ' cstmfy_static '; 
            var cstmfy_c_disabled = ' ';
            var cstmfy_required = '';
            var cstmfy_c_required = ''; 
        }

        if(m_[13]>5){
            cstmfy_static = '';
        }

        var ccase ='';
        var fcase = m_[19];
        var transform = 'inherit';
        if(fcase==2){
            ccase = ' toUpperCase ';
            transform = 'uppercase';
        }
        if(fcase==3){
            ccase= ' toLowerCase ';
            transform = 'lowercase';
        } 
        if(fcase==4){
            ccase = ' tocapitalize ';
            transform = 'capitalize';
        }
        if(fcase==5){
            ccase = ' tocapitalizeFirstLetter ';
        }


        if(m_[24].split('{{').length>1){
            cstmfy_fontname+= ' <span class="ptooltip"><span class="qcon">?</span><span class="ptooltiptext">' + m_[24].split('{{')[1].replace("}}", "") + '<span class="ptooltiparrow"></span></span></span>';
        }

        var cstmfy_fontnamel = m_[24].split('{{')[0];
        if (cstmfy_fontnamel == '') {
            cstmfy_fontnamel = 'Font '+x;
        }

        var cstmfy_colorname = m_[25].split('{{')[0];
        if(m_[25].split('{{').length>1){
            cstmfy_colorname+= ' <span class="ptooltip"><span class="qcon">?</span><span class="ptooltiptext">' + m_[25].split('{{')[1].replace("}}", "") + '<span class="ptooltiparrow"></span></span></span>';
        }

        var cstmfy_prop_color = cstmfy_colorname;
        if(cstmfy_prop_color==''){
            cstmfy_prop_color= "_"+cstmfy_prop +"_color"+x;
        }
        if(cstmfy_colorname.indexOf('_')==0){
            cstmfy_colorname = cstmfy_colorname.substr(1);
        }

        var cstmfy_colornamel = m_[25].split('{{')[0];
        if (cstmfy_colornamel == '') {
            cstmfy_colornamel = 'Color '+x;
        }

        var displaycolor = "";
        var displayfont = "";
        var typedisabled = "";
        var typeclass = "";

        if (cstmfy_input_type > 2) {
            var displaycolor = "display:none;";
            var displayfont = "display:none;";
            var typedisabled = "disabled";
        }

        var pplrhidelabel = '';
        if (cstmfy_input_type==3) {
            var typeclass = " cp-sel-Photos ";
        }

        var cstmfy_max = m_[17];
        if (cstmfy_input_type > 1) {
            cstmfy_max = cstmfy_max*m_[7];
        }
        var maxline = m_[7];

        var nlc = "";
        if (prodata[10] > 2) {
            nlc = "no_load_first";
        }

        var crop = m_[22];
        var priceclass = '';
        var dataprice = '';
        var disabled = "";
        var ypos = m_[3];
        var deselect = "";
        var fileupload = 'fileupload ';
        var charleft = '';

        if(m_[43]==2 && m_[13]<2){
            cstmfy_max=2;
        }
        if(m_[43]==3 && m_[13]<2){
            cstmfy_max=3;
        }

        if(m_[17] != 200 && _SJ[31] !=1 && _SJ[31] !='' && _SJ2[23] >0 && m_[38] !=='5' && m_[13]<3){

            var charleft = '<span class="pplr-character-count" data-frame="' + frame + '"><span class="ct">'+cstmfy_max+'</span> <span class="lt">'+_SJ[31]+'</span><span class="lm"> / '+cstmfy_max+'</span></span>';
            cstmfy_class += ' p_c_c';
        }

        if (ypos > 100) {
            var fileupload = '';
        }
        if (m_[26] > 1) {
            var priceclass = ' pplraddprice';
            var dataprice = 'data-pplr_price="' + m_[27] + '" '+'data-pplr_price-type="' + m_[26] + '" ';
            pricechange = true;
        }

        if (m_[26] >1 || m_[23] > 1 || prodata[10] > 1) {
            if (cstmfy_default == '') {
                var disabled = " ";
            }
        }

        pplr_values[x][pplr_last_idx].text_val = default_value;

        if (default_value == '') {
            var disabled = "";
        }

        if (m_[23] <2) {
            var disabled = "";
        }

        var mselect = false;

        if(m_[72]>0){
            mselect = true;
        }

        if (m_[23] == 2 && !mselect) {
            if (_SJ[22] == 2) {
                var deselect = "<a name=\"properties[" + cstmfy_prop + "]\" class=\"pplr-swatch-element pplrimage pplr_deselect\" data-pplr_price=\"0\" onclick=\"chooseimage(this,0,true);\" style=\"text-align:left;width: 100%;float: left;cursor: pointer;\" data-val=\"\" data-frame=\"" + frame + "\" data-image=\""+app_link_pplr+"images/blank.png\"><span class='img_dropdown' style='display:none;'>"+_SJ[21]+"</span><span>" + _SJ[21] + "</span></a>";
            } else if(_SJ[22] == 1) {
                var deselect = "<span name=\"properties[" + cstmfy_prop + "]\" class=\"pplr-swatch-element pplrimage pplr_deselect\" data-pplr_price=\"0\" onclick=\"chooseimage(this,0,true);\" style=\"text-align:center\" data-val=\"\" data-frame=\"" + frame + "\" data-image=\""+app_link_pplr+"images/blank.png\"><img alt src=\""+app_link_pplr+"cross.png\" style=\"max-width: 100%;max-height: 100%;float: none;margin: auto;\" /><span class='img_dropdown'>"+_SJ[21]+"</span></span>";
            }
        }

        if (m_[40] < 1 ) {
            var fonsizeselect= '<div class="textBiggerSmaller" data-frame="' + frame + '"><input name="properties[_font size ' + cstmfy_prop + ']" '+input_prop+' class="pplr-size-select pplr_aux" data-size="'+m_[1]+'" type="hidden" value="'+m_[1]+'" data-frame="'+x+'"/><a title="Smaller Font" class="sourceSmallerFont" onclick="sourceSmallerFont(this)">-</a><span title="Normal Font"><span>A</span><span>A</span><span>A</span></span><a title="Bigger Font" onclick="sourceBiggerFont(this)" class="sourceBiggerFont">+</a></div>';
        }else{ 
            var fonsizeselect= '';
        }

        if (m_[41] < 1 && m_[43] < 2) {
            var align = m_[20];
            var alignx='';
            var aligny='';
            var alignz='';

            if (align == 'left') {
                var alignx = 'active';
            }
            if (align == 'center') {
                var aligny = 'active';
            }
            if (align == 'right') {
                var alignz = 'active';
            }
            var alignselect= '<div class="pplr-btn-group" data-frame="' + frame + '"><input class="pplr-align-select pplr_aux" '+input_prop+' name="properties[_align ' + cstmfy_prop + ']" type="hidden" value="'+align+'" data-frame="'+x+'"/><button class="pplr_align" title="Left" onclick="pplr_align_select(this,\'left\')" class="'+alignx+'" type="button"><i class="pfa fa-align-left"></i></button><button title="Center" class="pplr_align" onclick="pplr_align_select(this,\'center\')" class="'+aligny+'" type="button"><i class="pfa fa-align-center"></i></button><button class="pplr_align" onclick="pplr_align_select(this,\'right\')" title="Right" class="'+alignz+'" type="button"><i class="pfa fa-align-right"></i></button></div>';
        }else{
            var alignselect= '';
        }

        var data_color_val_name = "";

        if (prodata[4] !== '0' || m_[35] !== '1') {
            if(cstmfy_input_type < 3 && (m_[39] != 2 || !pplr_is_views)){

                if (prodata[4] == 1 || m_[35] == '2') {

                    if(!pplr_has_duplicate.jscolor){
                      if(pplr_dup_labels.jscolor[cstmfy_colornamel]){
                        pplr_has_duplicate.jscolor = true;
                      }else {
                        pplr_dup_labels.jscolor[cstmfy_colornamel] = true
                      }
                    }

                    var ccolor = "<div style=\"" + displaycolor+";"+display_style + "\" "+ view_attr +" class=\""+base_class+" pplr-color-select" +cstmfy_static + typeclass + cstmfy_class_opt +optionwithclass+ "\" data-frame=\"" + frame + "\" ><label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label><input  data-frame=\"" + frame + "\" type=\"text\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" " + typedisabled +disabled+ " name=\"properties[" + cstmfy_colornamel + "]\" "+input_prop+" value=\"" + cstmfy_color + "\" class=\"jscolor pplr_aux "+cstmfy_static+"\">"+cstmfy_ins+"</div>";
                    gcolor = true;
                } else {
            
                    var disp = '';
                    var dataprice1 = 'data-pplr_price="' + 0 + '" ';
                    var priceclass1 = '';

                    if (m_[35] !== '1') {
                        var colorgroup = colorgroup_json[m_[35]];
                    } else {
                        var colorgroup = colorgroup_json[prodata[4]];
                    }

                    var color_display = ' color_display_box ';
                    if (_SJ[20] == 3) {
                        var color_display = ' color_display_circle ';
                    }

                    if (colorgroup) {
                        var colorkey = Object.keys(colorgroup)[0];
                        var dcolorname = cstmfy_color;
                        var dcolordata = cstmfy_color;
                        var dcolortype = 1;
                        var ecolor = '';
                        var datavariant = 'data-variant="" ';
                        if(Array.isArray(colorgroup[colorkey])){
                            if(colorgroup[colorkey][1]>1){
                            dcolortype = 2;
                            dcolordata = colorgroup[colorkey][2];
                            dcolorname = colorkey;
                            }
                        }

                        if(Object.keys(colorgroup).length<2){
                            disp = ' cstmfy_static ';
                        }

                        for (var y = 0; y < Object.keys(colorgroup).length; ++y) {
                            var selectcolor = '';
                            var colortype = 1;
                            var pp=0;
                            var colorkey = Object.keys(colorgroup)[y];
                            var tooltip = '<div class="swtooltip">' + colorkey + '</div>';
                            var colorname = colorkey;
                            var colordata = colorgroup[colorkey];
                            var colorback = colordata;

                            if(Array.isArray(colorgroup[colorkey])){
                                var colordata = colorgroup[colorkey][0];
                                var colordatam = colorgroup[colorkey][0];
                                var colorback = colordata;
                                if(colorgroup[colorkey][1]>1){
                                    colortype = 2;
                                    var colordata = colorgroup[colorkey][2];
                                    var colorback = 'url(\''+app_link_pplr + 'images/' + Shopify.shop + '/'+colorgroup[colorkey][2]+pplr_no_day+'\')'; 
                                }
                                if(colorgroup[colorkey][3]>0){
                                    pp=parseFloat(colorgroup[colorkey][3]);
                                    priceclass1 = ' pplraddprice ';
                                    pricechange = true;
                                }
                            }
                            
                            if (colordata == cstmfy_color || colordatam == cstmfy_color) {
                                selectcolor = 'selected';
                                dcolorname = colorname;
                                dcolordata = colordata;
                                dcolortype = 1;
                                if(colortype == 2){
                                    dcolortype = 2;
                                    dcolordata = colorgroup[colorkey][2];
                                }
                                if(pp>0){
                                    dataprice1 = 'data-pplr_price="' + pp + '" ';pricechange = true;
                                }
                                if(colorgroup[colorkey][7]){
                                    datavariant =  'data-variant="' + colorgroup[colorkey][7] + '" ';
                                }
                            }

                            var variant = '';
                            if(colorgroup[colorkey][7]){
                                variant = colorgroup[colorkey][7];
                            }

                            var colorclass = ' pplr_'+ colorname.replace(/ /g, '_')+' ';
                            if (_SJ[20] == 2) {
                                ecolor += '<span class="pplr-selecter-item ' + selectcolor + '" data-variant="'+variant+'" data-color="' + colordata + '" data-pplr_price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-type="'+colortype+'" data-name="' + colorname + '"><span class="colorminithumb" style="background:' + colorback + ';"></span>' + tooltip + '</span>';
                            }
                            else{
                                ecolor += '<span class="pplr-swatch-element pplrColor ' + selectcolor + color_display+ colorclass+'" data-variant="'+variant+'" data-color="' + colordata + '" data-type="'+colortype+'" style="background:' + colorback + ';" data-pplr_price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-name="' + colorname + '">' + tooltip + '</span>';
                            }

                        }

                        pplr_values[x][pplr_last_idx].colortype = dcolortype
                        pplr_values[x][6] = dcolordata

                        if (_SJ[20] == 2) {
                            var pplrcolordiv = "<span class=\"pplr-selecter-selected dropdowncolor\" onclick=\"pplrselecterselected(this)\">"+'<span class="colorminithumb" style="background:' + dcolordata + ';"></span><span class="dcolorname">'+dcolorname+"</span></span><div class=\"pplr-selecter-options c_drop_list\">";
                        }
                        else{
                            var pplrcolordiv = "<div class=\"pplrgcolor  pplr-swatch-main\">";
                        }

                        if(cstmfy_colornamel==cstmfy_prop){
                            cstmfy_colornamel=cstmfy_colornamel+' color'
                        }

                        if(m_[26]>2){
                            dataprice +=' data-pplr_price-type="' + m_[26] + '" ';
                        }

                        if(!pplr_has_duplicate?.pplrjscolor){
                          if(pplr_dup_labels.pplrjscolor[cstmfy_colornamel]){
                            pplr_has_duplicate.pplrjscolor = true
                          }else {
                            pplr_dup_labels.pplrjscolor[cstmfy_colornamel] = true
                          }
                        }

                        ccolor = "<div style=\"" + displaycolor+";"+display_style + "\" "+ view_attr +"  class=\""+base_class+" mcolor  pplr-color-select"+disp+cstmfy_static + typeclass + cstmfy_class_opt +optionwithclass+ " \" data-frame=\"" + frame + "\"><label class='pplrlabel "+pplrhidelabel+"' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label><input " + disabled + "  data-type=\""+dcolortype+"\" data-frame=\"" + frame + "\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" " + typedisabled + "  name=\"properties[" + cstmfy_colornamel + "]\" value=\"" + dcolorname + "\" data-value=\"" + dcolordata + "\" "+input_prop+" class=\"pplrjscolor pplr_aux"+cstmfy_static+priceclass1+"\" " + dataprice1 + datavariant +"/>"+pplrcolordiv;
                        ccolor += ecolor + "</div></div>";
                    }
                }
            }
            else {
              if(pplr_is_views && m_[39] == 2){
                if (m_[35] !== '1') {
                  var colorgroup = colorgroup_json[m_[35]];
                } else {
                    var colorgroup = colorgroup_json[prodata[4]];
                }
                if(colorgroup){
                  if(cstmfy_colornamel==cstmfy_prop){
                    cstmfy_colornamel=cstmfy_colornamel+' color'
                  }
                                    var dcolortype = 1;
                  var dcolordata = cstmfy_color;

                  for (var y = 0; y < Object.keys(colorgroup).length; ++y) {
                    var colortype = 1;
                    var colorkey = Object.keys(colorgroup)[y];
                    var colordata = colorgroup[colorkey];
                    var colorback = colordata;

                    if(Array.isArray(colorgroup[colorkey])){
                        var colordata = colorgroup[colorkey][0];
                        var colordatam = colorgroup[colorkey][0];
                        if(colorgroup[colorkey][1]>1){
                            colortype = 2;
                        }
                    }
                    
                    if (colordata == cstmfy_color || colordatam == cstmfy_color) {
                        dcolordata = colordata;
                        dcolortype = 1;
                        if(colortype == 2){
                            dcolortype = 2;
                            dcolordata = colorgroup[colorkey][2];
                        }
                    }
                  }

                  pplr_values[x][pplr_last_idx].colortype = dcolortype
                  pplr_values[x][6] = dcolordata

                  data_color_val_name = ' data-color-el-name="properties[' + cstmfy_colornamel + ']"';
                }
              }
            }
            var color_choice = ' data-color="'+cstmfy_color+'" ';
        }
        else{
            var color_choice = ' c-color="single" data-color="'+cstmfy_color+'" ';
        }

        var pinputform = '';
        var selectedfamily = '';
        if(cstmfy_input_type < 3){
            hasfont = true;
        }
        if(image_load.indexOf(m_[18])<0){
            image_load.push(m_[18]);
            if(m_[18].indexOf('/products/') == -1 && m_[18].indexOf('/files/') == -1){
                // pplr_image_loader += "<img alt style='width:0px;height:0px;' src data-frame='"+frame+"' data-psrc='"+app_link_pplr +m_[18]+pplr_no_day+"' />";
                pplr_image_loader_array.push({idx: frame, src: app_link_pplr +m_[18]+pplr_no_day})
            }
            else{
                // pplr_image_loader += "<img alt style='width:0px;height:0px;' src data-frame='"+frame+"' data-psrc='"+m_[18]+"' />";
                pplr_image_loader_array.push({idx: frame, src: m_[18]})
            }
        }
        var key_layout = '';
        var key_layout_class = '';

        if(cstmfy_input_type < 3){

            var myfont = m_[0].split('/');
            var fct = myfont.length;

            if(_SJ2[32] != 1){
              selectedfamily = myfont[fct - 1].replace(".ttf", "");
            }

            if(fontload.indexOf(m_[0])<0){
                if(m_[34] == '1' || m_[43]>1){
                    addfont(m_[0]);
                    fontload.push(m_[0]);
                }
            }

            if(m_[43]>1 && fontload.indexOf(m_[60])<0){
                addfont(m_[60]);
                fontload.push(m_[60]);
            }

            if(m_[43]>2 && fontload.indexOf(m_[66])<0){
                addfont(m_[66]);
                fontload.push(m_[66]);
            }

            if(window.pplr_extra_keyboard){
                _SJ[15] = window.pplr_extra_keyboard;
            }

            if(_SJ[15] !=='' && _SJ[15] !=='Personalize'){
                if(m_[38] >1){
                }
                else{
                    pinputform = "font-family:"+ myfont[fct - 1].replace(".ttf", "");
                    var keyboard = _SJ[15].replace(/ /g, ",").split(',');
                    var key_layout_class = ' inputkeylayout inputkeypos';
                    if(_SJ2[5]>0){
                        key_layout = '<div class="key_layout k_full" style="display:block;'+pinputform+'">';
                        key_layout_class = ' inputkeypos ';
                    }else{
                        key_layout = '<div onclick="togglekey(this);" style="'+pinputform+'" class="key_layout_sub" data-frame="' + frame + '">⌨</div><div class="key_layout" style="display:none;'+pinputform+'">';
                    }

                    for (var y = 0; y < Object.keys(keyboard).length; ++y) {
                        var a_input = decodeHtml(keyboard[y]);
                        if(a_input.length>1){
                            a_input=a_input.replace(/\\/g, '');
                        }
                        key_layout +='<span onclick="addthistoinput(this)" data-value="'+a_input+'">'+a_input+'</span>';
                    }

                    if(_SJ[15].search(/[\u0590-\u05FF]/) && cstmfy_input_type == '2'){
                        key_layout += '<span class="p_space" onclick="addthistoinput(this)" data-value="\n">&#8626;</span>';
                    }
                    
                    key_layout += '</div>';
                    var selectedfamily = pinputform;
                }
            }

        }

        var font_list = '';
        if (_SJ[23] == 3) {
            selectedfamily = myfont[fct - 1].replace(".ttf", "");
        }


        if (prodata[6] !== '1' || m_[34] !== '1' &&  m_[43]<2) {

            if(cstmfy_input_type < 3){

                if (m_[34] !== '1') {
                    var fontgroup = fontgroup_json[m_[34]];
                } else {
                    var fontgroup = fontgroup_json[prodata[6]];
                }

                var datapricef = 'data-pplr_price="' + 0 + '" ';
                var priceclassf = '';
                var pp=0;
                var fheight = 1;

                if (fontgroup) {
                    if(Object.keys(fontgroup)){

                        var fontkey = Object.keys(fontgroup)[0];
                        var sfheight = 1;
                        var selectfontname = fontkey;
                        if (fontgroup[fontkey] instanceof Array) {
                            var selectedfontval = fontgroup[fontkey][0];
                            selectedfamily = fontgroup[fontkey][0].replace(".ttf", "");
                        } else {
                            var selectedfontval = fontgroup[fontkey];
                            selectedfamily = fontgroup[fontkey].replace(".ttf", "");
                        }

                        for (var y = 0; y < Object.keys(fontgroup).length; ++y) {

                            var fontkey = Object.keys(fontgroup)[y];
                            var selected_font = "";

                            if (m_[0] !== '') {
                                if (fontgroup[fontkey] instanceof Array) {
                                    var fontfamily = fontgroup[fontkey][0].replace(".ttf", "");
                                    var fontval = fontgroup[fontkey][0];

                                    var fheight = fontgroup[fontkey][1];
                                    if(fheight==0){fheight=1;}

                                } else {
                                    var fontfamily = fontgroup[fontkey].replace(".ttf", "");
                                    var fontval = fontgroup[fontkey];
                                    var fheight = 1;
                                }

                                var fontname = fontkey;
                                if (is_int(fontname)) {
                                    var fontname = fontfamily;
                                }
                                if (fontgroup[fontkey] instanceof Array) {
                                    var fontname = fontkey;
                                }
                        
                                if(fontgroup[fontkey][2]>0){
                                    var pp=parseFloat(fontgroup[fontkey][2]);
                                    var priceclassf = ' pplraddprice';
                                    pricechange = true;
                                }else{
                                    var pp=0;
                                }

                                if (fontval === myfont[fct - 1] && fontname !== '') {
                                    var selectedfontval = decode_utf8(fontval);
                                    var selectfontname = decode_utf8(fontname);
                                    selectedfamily = fontfamily;
                                    var selected_font = " selected-font ";
                                    var sfheight = fheight;
                                    var datapricef = 'data-pplr_price="' + pp + '" ';
                                    pplr_values[x][pplr_last_idx].fheight = fheight;
                                    pplr_values[x][0] = selectedfontval;
                                }

                                var linkf = "font/" + Shopify.shop + "/" + decode_utf8(fontval);
                                if(fontload.indexOf(linkf)<0){
                                    addfont(linkf);
                                    fontload.push(linkf);
                                }
                                if (_SJ[23] == 2) {
                                    fontfamily = 'inherit';
                                    selectedfamily = 'inherit';
                                }
                                var fontclass = ' pplr_'+ fontfamily.toLowerCase();
                                font_list += '<span class="pplr-selecter-item ' + selected_font + fontclass + '" style="font-family:' + decode_utf8(fontfamily) + '" data-value="' + decode_utf8(fontval) + '"  data-height="' + fheight + '" data-name="' + decode_utf8(fontname) + '" data-pplr_price="'+pp+'" onclick="pplrselecteritem(this,'+pp+')">' + decode_utf8(fontname) + '</span>';
                            }
                        }

                        if(cstmfy_fontnamel==cstmfy_prop){cstmfy_fontnamel=cstmfy_fontnamel+' font'}

                        if(!pplr_has_duplicate?.font){
                          if(pplr_dup_labels.font[cstmfy_fontnamel]){
                            pplr_has_duplicate.font = true
                          }else {
                            pplr_dup_labels.font[cstmfy_fontnamel] = true
                          }
                        }

                        cfont = "<div style=\"" + displayfont+";"+display_style + " \" "+ view_attr +"  class=\""+base_class+"  pplr-font-select" +cstmfy_static + typeclass + cstmfy_class_opt + pplrfontthumb +optionwithclass+ " \" data-frame=\"" + frame + "\"><label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_fontname + "</label><input type=\"hidden\" data-value=\"" + selectedfontval + "\" value=\"" + selectfontname + "\"   data-height=\"" + sfheight + "\" data-frame=\"" + frame + "\" " + disabled + datapricef + " oninput=\"LoadPplrWithFont('" + frame + "\',true);\" " + typedisabled + "   name=\"properties[" + cstmfy_fontnamel + "]\" "+input_prop+" class=\"pplr_font pplr_aux"+cstmfy_static+priceclassf+"\" /><span style=\"font-family:" + selectedfamily + "\" class=\"pplr-selecter-selected\" onclick='pplrselecterselected(this)'>" + selectfontname + "</span><div class=\"pplr-selecter-options\">" + font_list + "</div></div>";
                    }
                }
            }
        }


        var image_thumb_list ='';
        if (cstmfy_input_type == 3.5 || cstmfy_input_type == 4 || cstmfy_input_type == 3) {
            var image_list = '';
            var tag = [];
            var taglist = '';

            if (m_[21] != 1 && m_[21] != "") {

              var dtype = cstmfy_input_type == 4 ? _SJ[32] : _SJ[24];

              if(m_[73] > 0){
                  dtype = m_[73];
                  if(dtype < 3 && m_[74] > 0){
                      dtype = cstmfy_input_type == 4 ? parseInt(dtype) + parseInt(m_[74]) : (parseInt(dtype) + (parseInt(m_[74]) == 0 ? parseInt(m_[74]) : parseInt(m_[74])+1));
                  }
              }

              var display_image =' img_thumb_small ';
              var bg_ratio_x = 40, bg_ratio_y = 40;
              if(dtype == 2){
                  display_image =' img_thumb_big ';
                  bg_ratio_x = 60
                  bg_ratio_y = 60
              }

              var i_dropdown =false;
  
              if((dtype == 3 && cstmfy_input_type != 4) || (cstmfy_input_type == 4 && dtype == 5)){
                  display_image =' img_thumb_dropdown ';
                  i_dropdown =true;
              }
  
              if((cstmfy_input_type != 4 && dtype == 4) || (cstmfy_input_type == 4 && dtype == 3)){
                  display_image =' img_thumb_small_circle ';
                  bg_ratio_x = 40
                  bg_ratio_y = 40
              }
  
              if((cstmfy_input_type != 4 && dtype == 5) || (cstmfy_input_type == 4 && dtype == 4)){
                  display_image =' img_thumb_big_circle ';
                  bg_ratio_x = 60
                  bg_ratio_y = 60
              }

                if(m_[15] ==''){
                    m_[15] = 'images/blank.png';
                }

                var v_dropdown = (dtype == 3 && cstmfy_input_type != 4) || (cstmfy_input_type == 4 && dtype == 5);


                if (dtype == 3 && m_[23] == 2 && !mselect) {
                    var selectimagedefault = m_[15].replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", "");
                }
                else{
                    var selectimagedefault = '';
                }

                var selectimgsrc = app_link_pplr + m_[15]+pplr_no_day;

                var imagegroup = imagegroup_json[m_[21]?.replace(/\\'/g, "'")];

                if (imagegroup) {

                    var displayimagegroup = '';
                    if (Object.keys(imagegroup).length > 1) {
                        displayimagegroup = '';
                    }

                    var imgsrc = app_link_pplr + m_[15]+pplr_no_day;
                    var datavariant = 'data-variant="" ';
                
                    if(m_[26]>1){
                        var pradd = parseFloat(m_[27]);
                        var dataprice = 'data-pplr_price="' + m_[27] + '" ';
                    }
                    else{
                        var pradd = 0;
                        var dataprice = 'data-pplr_price="' + 0 + '" ';
                    }

                    var DthumbImg = '';

                    for (var y = 0; y < Object.keys(imagegroup).length; ++y) {

                        var selectimage = '';
                        var imagekey = Object.keys(imagegroup)[y];
                        var data_price= 0;
                        var vimg_back = '';
                        var tag_c = ' data-tag="" ';
                        var image_name = imagegroup[imagekey];
                
                        var data_color = ' data-color="" ';
                        if (imagegroup[imagekey] instanceof Array) {

                            var imagelabel = '<span>' + decode_utf8(imagekey) + '</span>';
                            var data_val = imagekey;
                            if(imagegroup[imagekey][7] && !i_dropdown){
                                var tagarray = imagegroup[imagekey][7].split("|");
                                for (var k = 0; k < tagarray.length; ++k) {
                                var tt = decodeHtml(tagarray[k]).replace(/["']/g, "").replace(/ /g, '_');
                                    tag_c = ' data-tag="'+tt.replace(/\./g, '')+'" ';
                                    tag.push(tt);

                                }
                            }
                            image_name = imagegroup[imagekey][0];
                            var vimg_back = imagegroup[imagekey][1].split("_");
                            if(imagegroup[imagekey].length>3 ){
                                data_color = ' data-color="'+imagegroup[imagekey][2]+'" ';
                                if (imagegroup[imagekey][3]) {
                                    data_price= imagegroup[imagekey][3];
                                }
                            }
                        } else {
                            var imagelabel = '';
                            if (imagegroup[imagekey] instanceof Array) {
                                var data_val = decode_utf8(image_name[0].replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", ""));
                                image_name = image_name[0];
                            } else {
                                var data_val = decode_utf8(image_name.replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", ""));
                            }
                        }

                        if(imagegroup[imagekey][5]>3){
                          var imgsrc_thumb = app_link_pplr+'images/' + pplr_myshopify_url + '/' + decode_utf8(imagegroup[imagekey][6])+pplr_no_day;
                        }

                        if (m_[15] == 'images/' + pplr_myshopify_url + '/' + decode_utf8(image_name)) {
                            var selectimage = 'selected';
                            var selectimagedefault = data_val;
                            var selectimgsrc = app_link_pplr + 'images/' + pplr_myshopify_url + '/' + decode_utf8(image_name)+pplr_no_day;
                            var dataprice = 'data-pplr_price="' + (parseFloat(data_price)+pradd) + '" ';
                            if(imagegroup[imagekey][9]){
                                datavariant =  'data-variant="' + imagegroup[imagekey][9] + '" ';
                            }

                            if(imagegroup[imagekey][5]>3){
                                  DthumbImg = "<span class='ppsrc'><img src='"+imgsrc_thumb+"' data-ppsrc='"+imgsrc_thumb+"' /></span>";
                                }else{
                                  DthumbImg = "<span class='ppsrc'><img src='"+selectimgsrc+"' data-ppsrc='"+selectimgsrc+"' /></span>";
                            }
                        }
                        var variant = '';
                        if(imagegroup[imagekey][9]){
                            variant = imagegroup[imagekey][9];
                        }

                        if(data_price>0){
                            priceclass = ' pplraddprice';
                            pricechange = true;
                        }

                        var imgsrc = app_link_pplr+'images/' + pplr_myshopify_url + '/' + decode_utf8(image_name)+pplr_no_day;

                        var thumbImg = '';

                        if(i_dropdown){

                          if(imagegroup[imagekey][5]>3){
                              thumbImg = "<span class='ppsrc'><img src='"+img_loader+"' data-ppsrc='"+imgsrc_thumb+"' /></span>";
                            }else{
                              thumbImg = "<span class='ppsrc'><img src='"+img_loader+"' data-ppsrc='"+imgsrc+"' /></span>";
                            }

                        }

                        if (vimg_back == '' || imagegroup[imagekey][5]>3 || v_dropdown) {

                            if(imagegroup[imagekey][5]>3){
                                tooltip = '<div class="swtooltip"><img alt data-psrc="' + imgsrc_thumb + '" />' + imagelabel + '</div>';
                                image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-pplr_price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage + "\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"' data-thumb=\""+imgsrc_thumb+"\" style=\"background-image:url('" + img_loader + "') ;background-position: center center;background-size:contain;background-repeat:no-repeat;\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+thumbImg+"<span class='ppdata'>"+data_val+"</span></span>" + tooltip + "</span>";
                            }
                            else{
                                if(imagegroup[imagekey][4]){

                                    if(imagegroup[imagekey][4].indexOf('#') !== -1){
                                        tooltip = '<div class="swtooltip">' + imagelabel + '</div>';
                                        image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-pplr_price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage + "\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"'  style=\"background:"+imagegroup[imagekey][4]+";\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+thumbImg+"<span class='ppdata'>"+data_val+"</span></span>" + tooltip + "</span>";
                                    }
                                    else{
                                        tooltip = '<div class="swtooltip"><img alt data-psrc="' + imgsrc + '" />' + imagelabel + '</div>';
                                        image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-pplr_price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage +"\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"' data-thumb=\""+imgsrc+"\" style=\"background-image:url('" + img_loader + "') ;background-position: center center;background-size:contain;background-repeat:no-repeat;\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+thumbImg+"<span class='ppdata'>"+data_val+"</span></span>" + tooltip + "</span>";
                                    } 
                                }
                                else{
                                    tooltip = '<div class="swtooltip"><img alt data-psrc="' + imgsrc + '" />' + imagelabel + '</div>';
                                    image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-pplr_price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage +"\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\""+data_color+" data-variant='"+variant+"' data-thumb=\""+imgsrc+"\" style=\"background-image:url('" + img_loader + "') ;background-position: center center;background-size:contain;background-repeat:no-repeat;\" data-val=\"" + data_val + "\" data-frame=\"" + frame + "\" data-image=\"" + imgsrc + "\" ><span class='img_dropdown'>"+thumbImg+"<span class='ppdata'>"+data_val+"</span></span>" + tooltip + "</span>";
                                }
                            }
                        } else {
                            var _x =1.33,_y=5,_z=6.65;
                          if(dtype==2){
                              _y=3;_z=4;
                          }

                          var v_img_position_x = "";
                          var v_img_position_y = "";

                          var v_img_size_x = "";
                          var v_img_size_y = "";

                          if(vimg_back[5]){
                              var v_img_width = vimg_back[5];
                              var v_img_height = vimg_back[6];
                              var v_img_x = vimg_back[0];
                              var v_img_y = vimg_back[1];
                              var v_img_w = vimg_back[2];
                              var v_img_h = vimg_back[3];
                              var sq_x = bg_ratio_x - 2;
                              var sq_y = bg_ratio_y - 2;
                              var v_img_rat_x = v_img_w / sq_x;
                              var v_img_rat_y = v_img_h / sq_y;
                              v_img_position_x = (-v_img_x / v_img_rat_x);
                              v_img_position_y = (-v_img_y / v_img_rat_y);
                              v_img_size_x = (v_img_width / v_img_rat_x);
                              v_img_size_y = (v_img_height / v_img_rat_y);
                          }else {
                              v_img_position_x = (-vimg_back[0] / _y-2) ;
                              v_img_position_y = (-vimg_back[1] / _z) ;
                              v_img_size_x = (vimg_back[2] / _y);
                              v_img_size_y = (vimg_back[3] / _z);
                          }
                          
                          tooltip = '<div class="swtooltip" ><div style="height:180px;width:180px; background-image:url(\'' + imgsrc + '\');background-position:' + (v_img_position_x *180/bg_ratio_x) +'px ' + (v_img_position_y*180/bg_ratio_x) + "px" + ' ;background-size:' +  (v_img_size_x*180/bg_ratio_x) +'px '+ (v_img_size_y*180/bg_ratio_x) +'px '+ ';"></div>' + imagelabel + '</div>';
                          
                          image_list += "<span name=\"properties[" + cstmfy_prop + "]\" data-pplr_price=\""+data_price+"\" class=\"pplr-swatch-element pplrimage " + selectimage + "\" "+tag_c+" onclick=\"chooseimage(this,"+data_price+");\" "+data_color+" data-variant='"+variant+"' data-val=\"" + data_val + "\"  data-frame=\"" + frame + "\" data-thumb=\""+imgsrc+"\" data-image=\"" + imgsrc + "\"" + 'style="background-image:url(\'' + imgsrc + '\') !important;background-position:' + v_img_position_x +'px ' + v_img_position_y + "px" + ';background-size:'  +  v_img_size_x +'px '+ v_img_size_y +'px '+ ';"><span class="img_dropdown">'+thumbImg+'<span class="ppdata">'+data_val+"</span></span>" + tooltip + "</span>";
                        }

                    }
                

                    if(v_dropdown){
                        if(DthumbImg == ""){
                            imgsrc = app_link_pplr+"/"+m_[15]
                            selectimagedefault = m_[15].replace(".jpg", "").split("/").pop().replace(".jpeg", "").replace(".png", "")
                            DthumbImg = "<span class='ppsrc'><img src='"+imgsrc+"' data-ppsrc='"+imgsrc+"' /></span>";
                        }
                      image_thumb_list = "<span class=\"pplr-selecter-selected dropdowncolor\" onclick=\"pplrselecterselected(this)\" >"+DthumbImg+selectimagedefault+"</span>";
                  }

                    var uniqueArray = tag.filter(function(item, pos) {
                        return tag.indexOf(item) == pos;
                    });

                    var arjoin = uniqueArray.join();
                    for (var i = 0; i < uniqueArray.length; i++) {
                        taglist += "<span class='pplr-selecter-item' onclick='selectthistag(this,true)' data-val='"+uniqueArray[i]+"' data-group='"+arjoin+"'>" + uniqueArray[i] + "</span>";
                    }

                    if(taglist !=='' && !i_dropdown){
                        taglist = '<div class="pplr-selecter-options pplr_tag">'+taglist+'</div>'; 
                        pplr_has_duplicate.tag = true;
                    }
                    image_list += deselect;
                }
                else{
                  console.log(cstmfy_input_type);


                }
            }
            else{
                var cstmfy_prop_color = cstmfy_prop;
                  if(cstmfy_input_type == 3.5){
                    var selectimgsrc = app_link_pplr+'images/blank.png'+'?v=123';
                  }
            } 
        }


        if (cstmfy_input_type == 3 || cstmfy_input_type == 3.5) {
            var imgsrc = app_link_pplr + m_[15]+pplr_no_day;
            if(image_load.indexOf(m_[15])<0){
                image_load.push(m_[15]);
                // pplr_image_loader += "<img alt style='width:0px;height:0px;' src data-frame='"+frame+"' data-psrc='"+imgsrc+"' />";
                pplr_image_loader_array.push({idx: frame, src: imgsrc})
            }

            if (m_[21] == 1 && cstmfy_input_type != 3.5 || m_[21] == "" && cstmfy_input_type != 3.5 ) {
                cimage = true;
                pcropper = true;

                jQuery('body').addClass('pplefileupload');
                var accept = "accept=\"image/jpg,image/jpeg,image/JPG,image/JPEG,image/webp,image/WEBP,image/png,.HEIC,image/PNG,image/svg+xml\"";
                if(m_[39]>2){
                    accept = "";
                }
                var ua = navigator.userAgent.toLowerCase();
                if(/chrom(e|ium)/.test(ua) && ua.indexOf("android") > -1){
                accept ='';
                }
                if(m_[26]>2){
                    dataprice +=' data-pplr_price-type="' + m_[26] + '" ';
                } 

                text += "<div style=\""+display_style+"\" "+ view_attr +" class=\" "+base_class+" " +cstmfy_static + cstmfy_class +optionwithclass+typeclass+ " \"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><div class=\"jscroll\"><ul></ul></div><div class='pplrfileuploadbutton'><span class='pplrfileuploadcover' data-lockedat='1'> </span><img alt data-newr=\"1\" data-rotation=\"0\" class=\"img_url\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"display:none;\" data-psrc=\"" + imgsrc + "\" \><img alt class=\"crop_img_url\" data-type=\"image/png\"  data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"display:none;\" src=\"" + imgsrc + "\" \><input class=\"pplr_monogram " + fileupload + priceclass + cstmfy_c_required+"\" " + cstmfy_c_disabled+cstmfy_required + "  " + dataprice + " data-frame=\"" + frame + "\" "+input_prop+" autocomplete=\"off\" onchange=\"fileuploadpplr(this,event)\" data_name=\"" + cstmfy_prop + "\"  type=\"file\" name=\"properties[" + cstmfy_prop + "]\" "+accept+" /><input "+input_prop+" class=\"pplr-crop pplr_aux\" type=\"hidden\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" disabled  data-frame=\"" + frame + "\" value=\"" + crop.split("-").join("_") + "\" data_name=\"" + cstmfy_prop + "\" name=\"_Crop_x_y_width_height(px)_rotate " + frame + "\" /></div>"+cstmfy_ins+"</div>";

                imageon = true; 

            } else {

                if(m_[26]>2){
                    dataprice +=' data-pplr_price-type="' + m_[26] + '" ';
                }
                if(image_list==''){
                    cstmfy_c_required ='';
                    cstmfy_required ='';
                }

                if(m_[82]>0){
                    cstmfy_name = cstmfy_name + ' <span class="pplr_option_text_span f_p_img"> - '+selectimagedefault+'</span> ';
                }
                if(m_[72]>0 && m_[78]>1){
                    priceclass = priceclass + ' pplr_mselect ';
                }

                if(m_[15] == "images/blank.png" && cstmfy_input_type == 3.5 && (m_[73]==3 || _SJ[24]==3 && m_[73]==0)){
                  selectimagedefault = ""
                }

                if(m_[77] > 1 && m_[72] == 1){
                  selectimagedefault = "";
                }

                if(!pplr_has_duplicate?.img){
                  if(pplr_dup_labels.img[cstmfy_prop]){
                    pplr_has_duplicate.img = true
                  }else {
                    pplr_dup_labels.img[cstmfy_prop] = true
                  }
                }

                text += "<div style=\""+display_style+"\" "+ view_attr +"  class=\""+base_class+"  "+ cstmfy_static + cstmfy_class +optionwithclass+ "\"  data-main=\"" + frame + "\" style=\"" + displayimagegroup + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><img alt data-name=\"properties[" + cstmfy_prop + "]\" data-newr=\"1\" class=\"img_url\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"display:none;\" data-psrc=\"" + selectimgsrc + "\" \><input class=\"pplr_imgg pplr_monogram " + priceclass +cstmfy_c_required+ "\" " + dataprice + datavariant+ " data-frame=\"" + frame + "\" "+input_prop+" onchange=\"LoadPplrWithFont('" + frame + "\',true,this);\"  oninput=\"LoadPplrWithFont('" + frame + "\',true,this);\" type=\"hidden\" value=\"" + selectimagedefault + "\" data_name=\"" + cstmfy_prop + "\"" +cstmfy_c_disabled  + cstmfy_required+" name=\"properties[" + cstmfy_prop + "]\" ><input disabled   data-frame=\"" + frame + "\" "+input_prop+" class=\"pplr-crop pplr_aux\" type=\"hidden\" value=\"" + crop.split("-").join("_") + "\"  multiple />"+image_thumb_list+"<div class=\"pplrgcolor pplr_thumb_image "+ nlc+" pplr-swatch-main"+display_image+"\">"+taglist+image_list+'</div>'+cstmfy_ins+'</div>';
            }
        } 

        else if (cstmfy_input_type == 4) {

            var disp = '';
            var dataprice1 = 'data-pplr_price="' + 0 + '" ';
            var priceclass1 = '';
            var datavariant = 'data-variant="" ';
            
            if(m_[26]>1){
                dataprice1 = 'data-pplr_price="' + m_[27] + '" ';
                if (m_[21] == 1) {
                    priceclass1 = ' pplraddprice';
                }else{
                    priceclass = ' pplraddprice';
                }
                pricechange = true;
            }
            else{
                m_[27] = 0;
            }
            var dcolor = '';
            var colorgroup = colorgroup_json[m_[52]?.replaceAll(`\\'`, "'")];

            var dtype = _SJ[32];

            if(m_[73]>0){
                dtype=m_[73];
                if(dtype<3 && m_[74]>0){
                    dtype = parseInt(dtype)+ parseInt(m_[74]);
                }
            }

            var color_image_display = ' color_image_display_box ';
            if (dtype == 2) {
                var color_image_display = ' color_image_display_box_big ';
            }
            if (dtype == 3) {
                var color_image_display = ' color_image_display_circle ';
            }
            if (dtype == 4) {
                var color_image_display = ' color_image_display_circle_big ';
            }

            if (Array.isArray(colorgroup) || typeof(colorgroup) !== 'undefined' && colorgroup !== null) {
                var colorkey = Object.keys(colorgroup)[0];
                var dcolorname = '';
                var dcolordata = cstmfy_color;
                var dcolortype = 1;

                var ecolor = '';
                var pp=0;
                if(Object.keys(colorgroup).length<2){
                    disp = ' cstmfy_static ';
                }
                for (var y = 0; y < Object.keys(colorgroup).length; ++y) {
                    var selectcolor = '';
                    var colorkey = Object.keys(colorgroup)[y];
                    var tooltip = '<div class="swtooltip">' + colorkey + '</div>';
                    var colorname = colorkey;
                    var colortype = 1;
                    var dcolortype = 1;
                    if(Array.isArray(colorgroup[colorkey])){
                        var colordata = colorgroup[colorkey][0];
                        var colordatam = colorgroup[colorkey][0];
                        var colorback = colordata;

                        if(colorgroup[colorkey][1]>1){
                            colortype = 2;
                            var colordata = colorgroup[colorkey][2];
                            var colorback = 'url(\''+app_link_pplr + 'images/' + pplr_myshopify_url + '/'+colorgroup[colorkey][2]+pplr_no_day+'\')';
                        }

                        if(colorgroup[colorkey][3]>0){
                            var pp=parseFloat(colorgroup[colorkey][3]);
                            priceclass1 = ' pplraddprice ';
                            pricechange = true;
                        }
                        else{
                            pp=0;
                        }
                    }
                    else{
                        var colordata = colorgroup[colorkey];
                        var colorback = colordata;
                    }

                    pp=parseFloat(m_[27])+pp;

                    if (colordata == cstmfy_color || colordatam == cstmfy_color ) {
                        selectcolor = 'selected';
                        dcolorname = colorname;
                        dcolordata = colordata;
                        if(pp>0){
                            dataprice1 = 'data-pplr_price="' + pp + '" ';
                        }
                        if(colorback.indexOf('#') == -1 || colortype > 1){
                            dcolortype = 2;
                        }
                        if(colorgroup[colorkey][7]){
                            datavariant =  'data-variant="' + colorgroup[colorkey][7] + '" ';
                        }
                        pplr_values[x][pplr_last_idx].colortype = dcolortype // update selected color type
                    }
                    pplr_values[x][6] = dcolordata

                    var variant = '';
                    if(colorgroup[colorkey][7]){
                        variant = colorgroup[colorkey][7];
                    }

                    var color_name_el = ""
                    if(dtype == 5){
                      if(colortype>1){
                          color_name_el = "<span class='color-drop'><span style='float: left;margin-top: 5px;margin-right: 5px;'><img style='height: 20px;float: left;width: 20px;' src='"+app_link_pplr + 'images/' + Shopify.shop + '/'+colorgroup[colorkey][2]+'?v=123'+"' /></span><span>"+colorname+"</span></span>";
                        }
                        else
                        {
                          color_name_el = "<span class='color-drop'>"+colorname+"</span>";

                        }
                    }

                    var color_back_st = 'style="background:' + colorback + ';"'

                    if (dtype == 5) {
                        var cmt = '';
                        if(colortype < 2){
                            var cmt = '<span class="colorminithumb" '+ color_back_st +'></span>'
                        }
                        ecolor += '<span class="pplr-selecter-item ' + selectcolor +'" data-variant="'+variant+'" data-color="' + colordata + '" data-pplr_price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-type="'+colortype+'" data-name="' + colorname + '">'+color_name_el + cmt  + '</span>';
                    } else{
                        ecolor += '<span class="pplr-swatch-element pplrColor ' + selectcolor + color_image_display+ '" data-variant="'+variant+'" data-color="' + colordata + '" data-type="'+colortype+'"' + color_back_st +' data-pplr_price="'+pp+'" onclick="pplrColor(this,'+pp+')" data-name="' + colorname + '">' + color_name_el + tooltip + '</span>';
                    }

                }

                var color_thumb_list = ""
                if (dtype == 5) {
                    color_thumb_list = "<span class=\"pplr-selecter-selected dropdowncolor\" onclick=\"pplrselecterselected(this)\" >"+dcolorname+"</span>";
                }

                var dcolordata_wb = dcolordata;

                if (dtype == 5) {
                  var cmt = '';
                  if(dcolortype > 1){
                      dcolordata = 'url(\''+app_link_pplr + 'images/' + Shopify.shop + '/'+ dcolordata +'?v=123'+'\')'
                  }
                    var cmt = '<span class="colorminithumb" style="background:' + dcolordata + ';"></span>'
                    var pplrcolordiv = "<span class=\"pplr-selecter-selected dropdowncolor color_p_main\" onclick=\"pplrselecterselected(this)\">"+cmt+'<span class="dcolorname">'+dcolorname+"</span></span><div class=\"pplr-selecter-options c_drop_list\">";

                }
                else{
                    var pplrcolordiv = color_thumb_list+"<div class=\"pplrgcolor  pplr-swatch-main\">";
                }

                if (m_[21] == 1) {
                    var colorlabel = "";
                }
                else{
                  if(m_[82]>0){
                      cstmfy_colorname = cstmfy_colorname + ' <span class="pplr_option_text_span f_p_color"> - '+dcolorname+'</span> '; 
                  }
                    var colorlabel = "<label class='pplrlabel "+pplrhidelabel+"' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label>";
                }

                if(m_[26]>2){
                    dataprice1 +=' data-pplr_price-type="' + m_[26] + '" ';
                }

                if(!pplr_has_duplicate?.pplrjscolor){
                  if(pplr_dup_labels.pplrjscolor[cstmfy_prop_color]){
                    pplr_has_duplicate.pplrjscolor = true
                  }else {
                    pplr_dup_labels.pplrjscolor[cstmfy_prop_color] = true
                  }
                }

                fcolor = colorlabel+"<input data-frame=\"" + frame + "\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" "  + "  name=\"properties[" + cstmfy_prop_color + "]\" data-type=\""+dcolortype+"\" value=\"" + dcolorname + "\" data-value=\"" + dcolordata_wb + "\" "+input_prop+" class=\"pplrjscolor pplr_aux "+cstmfy_c_required+priceclass1+ "\""+cstmfy_required+"/ " + dataprice1 + datavariant + "\>"+pplrcolordiv;
                fcolor += ecolor + "</div>";
            }
            else{

                  if(!pplr_has_duplicate.jscolor){
                    if(pplr_dup_labels.jscolor[cstmfy_prop_color]){
                      pplr_has_duplicate.jscolor = true;
                    }else {
                      pplr_dup_labels.jscolor[cstmfy_prop_color] = true
                    }
                  }

                  var colorlabel = m_[21] == 1 ? "" : "<label class='pplrlabel "+pplrhidelabel+"' onclick=\"pplr_unfold(this)\" >" + pplr_arrow + cstmfy_colorname + "</label>"
                  var fcolor = "<div style=\""+display_style+"\" "+ view_attr +"  class=\""+base_class+"  pplr-color-select" +cstmfy_static + typeclass +optionwithclass+"\" data-frame=\"" + frame + "\"  >"+colorlabel+"<input   data-frame=\"" + frame + "\" type=\"text\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" "+ " name=\"properties[" + cstmfy_prop_color + "]\" value=\"" + cstmfy_color + "\" "+input_prop+" class=\"jscolor pplr_aux"+priceclass1+"\" " + dataprice1 + datavariant + "\>"+"</div>";

                gcolor = true;
            }

            var imgsrc = app_link_pplr + m_[15]+pplr_no_day;

            if(image_load.indexOf(m_[15])<0){
                image_load.push(m_[15]);
                // pplr_image_loader += "<img alt style='width:0px;height:0px;' src data-frame='"+frame+"' data-psrc='"+imgsrc+"' />";
                pplr_image_loader_array.push({idx: frame, src: imgsrc})
            }


            if (m_[21] == 1) {
                if(m_[82]>0){
                    cstmfy_name = cstmfy_name + ' <span class="pplr_option_text_span f_p_color"> - '+dcolorname+'</span> '; 
                }
                text += "<div style=\""+display_style+"\" "+ view_attr +" class=\" "+base_class+" pplr-color-select"+disp +cstmfy_static + cstmfy_class +optionwithclass+typeclass+ " \"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><img alt class=\"img_url pplr_n_d\" data-newr=\"1\" data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"width:0px;height:0px;display:none;\" data-psrc=\"" + imgsrc + "\" \><input class=\"pplr-crop\" type=\"hidden\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" disabled  data-frame=\"" + frame + "\" value=\"" + crop.split("-").join("_") + "\" data_name=\"" + cstmfy_prop + "\" name=\"_Crop_x_y_width_height(px)_rotate " + frame + "\" />"+fcolor+cstmfy_ins+"</div>";
            }
            else{
                if(cstmfy_prop == cstmfy_prop_color){
                    cstmfy_prop = cstmfy_prop+'+';
                }
                if(m_[82]>0){
                    cstmfy_name = cstmfy_name + ' <span class="pplr_option_text_span f_p_img"> - '+selectimagedefault+'</span> '; 
                }

                if(m_[72]>0 && m_[78]>1){
                    priceclass = priceclass + ' pplr_mselect ';
                }

                if(!pplr_has_duplicate?.img){
                  if(pplr_dup_labels.img[cstmfy_prop]){
                    pplr_has_duplicate.img = true
                  }else {
                    pplr_dup_labels.img[cstmfy_prop] = true
                  }
                }

                text += "<div style=\""+display_style+"\" class=\" "+base_class+" pplr-color-select" +cstmfy_static + cstmfy_class +optionwithclass+typeclass+ " \"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><img alt class=\"img_url\" data-newr=\"1\" data-name=\"properties[" + cstmfy_prop + "]\"  data_name=\"" + cstmfy_prop + "\" data-frame=\"" + frame + "\" style=\"width:0px;height:0px;display:none;\" data-psrc=\"" + imgsrc + "\" \><input class=\"pplr_imgg pplr_no_condition pplr_monogram " + priceclass +cstmfy_c_required+ "\" " + dataprice + datavariant + " data-frame=\"" + frame + "\" "+input_prop+" onchange=\"LoadPplrWithFont('" + frame + "\',true,this);\"   type=\"hidden\" value=\"" + selectimagedefault + "\" data_name=\"" + cstmfy_prop + "\"" +cstmfy_c_disabled + " name=\"properties[" + cstmfy_prop + "]\" ><input class=\"pplr-crop\" type=\"hidden\" onchange=\"LoadPplrWithFont('" + frame + "\',true);\" disabled  data-frame=\"" + frame + "\" value=\"" + crop.split("-").join("_") + "\" data_name=\"" + cstmfy_prop + "\" name=\"_Crop_x_y_width_height(px)_rotate " + frame + "\" />"+image_thumb_list+"<div class=\"pplrgcolor pplr-swatch-main pplrcolorimage"+display_image+"\">"+taglist+image_list+"</div>"+fcolor+cstmfy_ins+"</div>";
            }

        }

        else if (cstmfy_input_type == 7 || cstmfy_input_type == 6) {

            if(cstmfy_input_type == 6){
                m_[44] = 2;
            }

            var dropdown = dropdown_json[m_[51]];
            var ddropkey = '';
            var priceclass = ' pplraddprice ';
            var dataprice = 'data-pplr_price="' + 0 + '" '; 
            var datavariant = 'data-variant="" ';

            if (Array.isArray(dropdown) || typeof(dropdown) !== 'undefined' && dropdown !== null) {

              m_[55] = m_[58]=="" && (!m_[55] || m_[55] == "") ? "--Select--" : m_[55];

                var is_disabled = m_[23] != 1 ? "" : "style='display:none;'";
                if(m_[55] !=='0' && m_[55] !=='' && m_[44]<2){ 
                    droptext += '<option class="pplr-selecter-item '+(m_[58]=="" ? "" : "")+'" '+is_disabled+' data-variant="" data-frame="'+x+'" data-pplr_price="0" value="">'+decodeHtml(m_[55], true)+'</option>'
                }

                for (var y = 0; y < Object.keys(dropdown).length; ++y) {

                    var droptkey = Object.keys(dropdown)[y];
                    var df = false;
                    var ddselect = '';

                    if('_'+droptkey == decodeHtml(m_[58]) || '_'+droptkey == m_[58] || '_'+decodeHtml(droptkey) == "_"+decodeHtml(decodeHtml(m_[58]?.replace("_", "")))){
                        df = true;
                        ddselect = ' selected ';
                    }

                    if(m_[58] =='' || m_[58] =='1' || m_[58] =='0'){
                        if(m_[44]<2 && y==0 && m_[55] ==''){
                            df = true; 
                            ddselect = ' selected ';
                        }
                    }
            
                    if(m_[58] =='0' && y==0 && m_[44]>1){
                        df = true; 
                        ddselect = ' selected ';
                    }

                    if(m_[44]==2 && mselect){
                        var df = false;
                        var ddselect = '';
                    }
            
                    if(df){
                        var data_price = dropdown[droptkey][0];
                        ddropkey = droptkey;
                        var dclass = ' active';
                        if(data_price || (dropdown[droptkey][3] && dropdown[droptkey][2])){
                            var priceclass = ' pplraddprice ';
                            var dataprice = 'data-pplr_price="' + data_price + '" ';
                            if(dropdown[droptkey][3]){
                                var datavariant = 'data-variant="' + dropdown[droptkey][3] + '" ';
                            }
                        }
                    }
                    else{
                        var dclass = '';
                    }
                    var pclass = ' _pplr_'+decodeHtml(droptkey).replace(/(<([^>]+)>)/ig,"").split(' ').join('_').toLowerCase().replace(/"/g, '');
                    var variant = '';
                    if(dropdown[droptkey][3]){
                        variant = dropdown[droptkey][3];
                    }

                    if(m_[44]==2){
                        droptext += '<span class="pplr-drop-item' + pclass + dclass+'" data-variant="'+variant+'" data-pplr_price="'+dropdown[droptkey][0]+'"  data-value="' + extractContent(droptkey) + '" data-frame="'+x+'"   onclick="pplrselecteritemoption(this)">' + decodeHtml(droptkey) + '</span>';
                    }else{
                        droptext += "<option "+ddselect+" class='"+pclass+"' data-variant='"+variant+"' data-frame='"+x+"'  data-pplr_price='"+dropdown[droptkey][0]+"' value='"+droptkey+"'>"+decodeHtml(droptkey)+"</option>";
                    }

                    if(dropdown[droptkey][0]>0){
                        pricechange = true;
                    }
                }

                if(m_[55] !=='0' && m_[55] !=='' && m_[55]<2){ 
                    var dataprice = 'data-pplr_price="0" ';
                }

            }
            else{
                cstmfy_c_required = '';
                cstmfy_required='';
            }


            if(m_[82]>0){
                cstmfy_name = cstmfy_name + ' <span class="pplr_option_text_span"> - '+ddropkey+'</span> ';
            }

            if(m_[72]>0 && m_[78]>1){
                priceclass = priceclass + ' pplr_mselect ';
            }

            if(m_[44]==2){
                text += "<div style=\""+display_style+"\" "+ view_attr +" class=\""+base_class+"  pplr-dropdown "+cstmfy_static + cstmfy_class + optionwithclass+"\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><input type=\"hidden\" class=\"pplr_select "+priceclass+cstmfy_c_required+cstmfy_static+"\" "+dataprice+ datavariant+selectdisabled+cstmfy_required+" "+input_prop+" data-frame=\"" + frame + "\" onchange=\"updatepricepplr(this);updateconditionFeild(this,"+frame+",false,true);window.PPLR_CAlCULATE_PRICE();\" value=\""+ddropkey+"\" name=\"properties[" + cstmfy_prop + "]\">"+droptext+cstmfy_ins+"</div>";
            }
            else{
                text += "<div style=\""+display_style+"\" "+ view_attr +" class=\""+base_class+"  pplr-dropdown "+cstmfy_static + cstmfy_class + optionwithclass+"\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><select "+input_prop+" class=\"pplr_select "+priceclass+cstmfy_c_required+cstmfy_static+"\" "+dataprice+ datavariant+selectdisabled+cstmfy_required+" data-frame=\"" + frame + "\" onchange=\"updatepricepplr(this,true);updateconditionFeild(this,"+frame+",false,true);window.PPLR_CAlCULATE_PRICE();\"  name=\"properties[" + cstmfy_prop + "]\">"+droptext+"</select>"+cstmfy_ins+"</div>";
            }

        }

        else if (cstmfy_input_type == 8) {
            if(m_[53]==0 || m_[91]>0){
                var checkbox = '';
            } else {
                var checkbox = ' checked ';
            }

            var checkboxinput = _SJ[16];
            var mcheckboxtype = 'checkbox';
            if(m_[91]>0){
                var checkboxinput = '';
                var mcheckboxtype = 'hidden';
            }
            var mcheckbox = '';

            if(m_[91]>0){
                var dropdown = dropdown_json[m_[51]];
                if (Array.isArray(dropdown) || typeof(dropdown) !== 'undefined' && dropdown !== null) {
                    for (var y = 0; y < Object.keys(dropdown).length; ++y) {
                    var droptkey = Object.keys(dropdown)[y];
                        var variant = '';
                        if(dropdown[droptkey][3]){
                            variant = dropdown[droptkey][3];
                        }
                        mcheckbox += '<label class="pplr_checkbox_l"><input type="checkbox" class="pplr-checkbox-item " data-p-variant="'+variant+'" data-pplr_price="'+dropdown[droptkey][0]+'"  data-value="' + extractContent(droptkey) + '" data-frame="'+x+'"   onclick="pplrselecteritemoption(this)" /> ' + decodeHtml(droptkey) + '</label>';
                        if(dropdown[droptkey][0]>0){
                            pricechange = true;
                        }
                    }
                }

                if(m_[82]>0){
                    cstmfy_name = cstmfy_name + ' <span class="pplr_option_text_span"></span> ';
                }

            }

            if(m_[72]>0 && m_[78]>1){
                priceclass = priceclass + ' pplr_mselect ';
            }

            text += "<div style=\""+display_style+"\" "+ view_attr +" class=\""+base_class+"  pplr-checkbox "+cstmfy_static + cstmfy_class + optionwithclass+"\" data-main=\"" + frame + "\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" > <input "+checkbox+cstmfy_required+dataprice+"  type=\""+mcheckboxtype+"\" data-frame=\"" + frame + "\" onchange=\"updateconditionFeild(this,"+frame+",false,true);window.PPLR_CAlCULATE_PRICE();LoadPplrWithFont('" + frame + "\',true);\" "+input_prop+" class=\"pplrcheckbox "+cstmfy_c_required+priceclass+"\" value=\""+checkboxinput+"\" "+selectdisabled+" name=\"properties[" + cstmfy_prop + "]\"> " + pplr_arrow_main + optionwith + cstmfy_name + "</label>"+mcheckbox+cstmfy_ins+"</div>";

        }

        else if (cstmfy_input_type == 2) {
            if(_SJ2[32]>0){
                selectedfamily = '';
            }
            text += "<div style=\""+display_style+"\" "+ view_attr +" class=\""+base_class+" pplr-text "+cstmfy_static + cstmfy_class +optionwithclass+ "\"   data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><textarea " + cstmfy_required + " type=\"text\" class=\"pplr_text pplr_monogram p_u_t" +key_layout_class+ priceclass+cstmfy_c_required +ccase+cstmfy_static+"\" " + cstmfy_c_disabled+dataprice+ pattern+color_choice + data_color_val_name + " data-main=\"" + frame + "\" data-frame=\"" + frame + "\" "+input_prop+" oninput=\"LoadPplrWithFont('" + frame + "',true,this);\"  onkeyup=\"LoadPplrWithFont('" + frame + "',true,this,event);\" style=\"text-transform:" + transform +';'+ pinputform+";font-family:" + selectedfamily +"\" d-placeholder='" + placeholder_default + "' placeholder='" + placeholder_default + "' name=\"properties[" + cstmfy_prop + "]\" data-maxlength=\"" + cstmfy_max + "\" maxline=\"" + maxline + "\" >" + default_value + "</textarea>"+key_layout+fonsizeselect+alignselect+charleft+cstmfy_ins+"</div>";
        } else {
            if(_SJ2[32]>0){
                selectedfamily = '';
            }
            text += "<div style=\""+display_style+"\" "+ view_attr +" class=\""+base_class+"  pplr-text "+cstmfy_static + cstmfy_class + optionwithclass+"\"  data-main=\"" + frame + "\">"+oindex+"<label class='pplrlabel' onclick=\"pplr_unfold(this)\" >" + pplr_arrow_main + optionwith + cstmfy_name + "</label><input " + cstmfy_required + type+ " class=\"pplr_text pplr_monogram p_u_t"+key_layout_class + priceclass +cstmfy_c_required+ ccase+ cstmfy_static+"\" "+cstmfy_c_disabled + dataprice + pattern+color_choice + data_color_val_name + " data-main=\"" + frame + "\" data-frame=\"" + frame + "\" "+input_prop+" oninput=\"LoadPplrWithFont('" + frame + "',true,this);\"   style=\"text-transform:" + transform+';'+pinputform+";font-family:" + selectedfamily + "\" value=\"" + default_value + "\" d-placeholder='" + placeholder_default + "' placeholder=\"" + placeholder_default + "\" name=\"properties[" + cstmfy_prop + "]\" data-maxlength=\"" + cstmfy_max + "\" maxlength=\"" + cstmfy_max + "\" />"+key_layout+fonsizeselect+alignselect+charleft+cstmfy_ins+"</div>";
        }

        text += cfont + ccolor;
        if( x == cstmfy_count && tabend){
            tabstart = x;
            text +='</div>';
        }
    }

    if(_SJ2[6]>0 && _CP[10] <3){
        text +="<span class='a_p_t'></span>";
    }

    if(_SJ[0]==2){
        var pplr_arrow='';}else{var pplr_arrow='';
    }

    if (prodata[10] > 1) {
        pplr_html= text;
        text = '<button type="button" '+bcolor+' onclick="cstmfy_personalize_text(this,event)"  class="btn pplr-c-button pplr-btn button Button--secondary '+_SJ[28]+'">' +pplr_arrow+ prodata[14].replace(/\\/g, '') + '</button>';
        window.pplr_on_boostly = true;
    }
    if (prodata[10] < 3){
        text += loadfont;
    }
    // text += "<div class='pplr_image_loader' style='width:0px;height:0px;'>"+pplr_image_loader +"</div>";

    if(!pplr_preview_save && prodata[10] <2){
      text += pplr_preview_no_code;
    }


    pplr_values_origin = pplr_values;

    jQuery('body').removeClass('product-personalizer');


    function check_pplr_duplicate(){

        if(jQuery(_P_P).length>1 && jQuery(_P_P).parents('.shopify-app-block')[0]){
            jQuery(_P_P).each(function() {
                var ppf = jQuery(this).closest('.shopify-app-block,form');
                if(!ppf[0]){
                    jQuery(this).remove();
                }
            });
        }

        if(jQuery(_P_P).length>1 && pplr_form?.length>0){
            jQuery(_P_P).each(function() {
                var ppf = jQuery(this).closest('form:visible');
                if(!ppf[0]){
                    jQuery(this).remove();
                }
            });
            jQuery(_P_P).first().siblings(_P_P).remove();
        }
    }




  
      var pplr_form = jQuery(_P_P).closest('form:visible');

      check_pplr_duplicate();

    var _P_P_D = jQuery(_P_P);

    var _P_P_D_S = _P_P_D.parents('.shopify-app-block');

    var old_pplr = false;


    if(pplr_form.length==0 && !_P_P_D_S[0] || pplr_form.length==0 && pplr_user_id < 16001 && _P_P_D_S[0] && _SJ2[38]<1  || pplr_form.length==0 && isIE()){

      var pbefore = {};
      old_pplr = true;

      if(pplr_user_id < 18001 || _SJ2[38]>0){

          var pbefore = jQuery('.productForm .product-action,.selection-wrapper:last,.product-single__quantity-inventory,.product-form__item--quantity:visible,.product-single__quantity,.payment-and-quantity,.purchase-details,.product-detail.addtocart--button,form .product__quantity--button,form .quantity-product-template,.quantity-selector__wrapper:visible,.product_form .product-add,.shopify-product-form .product-page-qty,form .product-single__qty,.shopify-product-form .quanity-cart-row,.shopify-product-form .productForm__quantity,.product_form_options .purchase,[data-icon="gpicon-product-cartbutton"],.product-form__item--payment-button,form[action*="/cart/add"] .product-quantity-box:visible,.product-form__info-list:visible,.product-detail__quantity-row,#add-to-cart-form .selector-wrapper:last:visible,#Quantity-product,.productForm .productForm-block:last,.product-form--alt .product-form--atc,#add-to-cart-form.shopify-product-form .quantity,.product-form--regular .product-form--atc,#addToCartForm-product-template .quantity-selector-product-template,#product-form-options-wrap .product-quantity-w,#quantity-selector-product-template,#AddToCartForm #product-add,.product-qty.selector-wrapper,[data-pf-type="ProductQuantity"],.gt_product-quantity,.product__info-wrapper .product-form__buttons,.product-single__form .payment-buttons:visible');

          if(!pbefore[0]){
              pbefore = jQuery('[data-icon="gpicon-product-quantity"]');
          }

        }

        var p_after_class = false;
        var pafter = jQuery('.form_pplr_element');
        if(!pafter[0]){
            var kgt = jQuery.trim(_SJ2[37]);
            if(kgt !==''){
                pafter = jQuery('.'+kgt+',#'+kgt);
                if(pafter[0]){
                    p_after_class = true;
                }
            }
        }

        if(pplr_user_id < 18001 || _SJ2[38]>0){

            if(!pafter[0] || kgt ==''){
                pafter = jQuery('.ProductForm ProductForm__Option:last,#AddToCartForm-product .selector-wrapper:last:visible,#AddToCartForm-product-template .selector-wrapper:last:visible,.selector-wrapper.product-form__item:last,.product-form__controls-group .selector-wrapper:last:visible, .addToCartForm .selector-wrapper:last:visible,form .ProductForm__Variants,form .product-single__price-product-template,form .option-selectors,.product-single__form .product-single__variants:last,form .product-single__variants,.product-form__master-select,.productForm-block--options-inline,[data-icon="gpicon-product-swatches"]:last,.variant-group:last,#add-to-cart-product .product__variants:last,product-single__form .variant-wrapper:last,form.product-form .selector-wrapper:last:visible,#add-to-cart-form.shopify-product-form .product-variantsform-field,.shopify-product-form .swatch_options,.lh-wrap-variant');
            }

    
          if(!pafter[0]){
              pafter = jQuery('[data-icon="gpicon-product-price"],.swatches-wrapper:visible:last');
          }
          
        }



        if(pbefore.length>0 && pbefore.parent(':visible')[0] && !p_after_class && pbefore.parents('form')[0]){
            _P_P_D.insertBefore(pbefore.first());
        }
        else if(pafter.length>0 && pafter.parent(':visible')[0] && pafter.parents('form')[0]){
            _P_P_D.insertAfter(pafter.first());
        }

        else{

              var get_v_form_id = false;  
              var afindeform_id;
              var variantIds = pplr_product.variants.map(variant => parseInt(variant.id));

              var formwithButton = jQuery('form[id]:has([type="submit"]):visible [name="id"]');

              formwithButton.each(function(){
                    if(variantIds.includes(parseInt(jQuery(this).val()))){
                        if(!get_v_form_id){
                          get_v_form_id= true;
                          afindeform_id = jQuery(this);
                        }
                    }
              })

              if(get_v_form_id){
                _P_P_D.prependTo(afindeform_id.closest('form'));
              }


            if(!get_v_form_id){
                var vaddtocart = jQuery('form[action*="/cart/add"]:visible button:first,form[action*="/cart/add"]:visible [name="add"]:first,form[action*="/cart/add"]:visible input[type="submit"]:first');
                if(vaddtocart[0]){
                    var parent = vaddtocart.parents('form').first();
                    _P_P_D.prependTo(parent);
                }
                else{
                    var form =  jQuery('form[action*="/cart/add"]:visible').first();
                    if(form[0]){
                        _P_P_D.prependTo(form);
                    }else{
                        _P_P_D.prependTo(jQuery('form[action*="/cart/add"]').first());
                    }
                }
            }
        } 

    }



    if (_P_P_D[0]) {

        // newly added 
        if(pplr_is_views){
          var pplr_first_view = pplr_views[first_view_id]
          var pplr_view_field_type = pplr_first_view[16];
          if(pplr_is_views && pplr_total_views > 1 && pplr_views[first_view_id][16] != 1) {
              if(pplr_view_field_type == 3){
                  jQuery(_P_P_D[0]).addClass("pplr_field_text_thumbnail");
              }
              jQuery(_P_P_D[0]).addClass("pplr_view_tab");
          }
        }
        // newly added 

    }
    
var app_block_enabled = false;

if(_P_P_D_S[0]){

  _P_P_D.each(function(){
        if(pplr_user_id > 16000 ||  _SJ2[38]>0){
            if(jQuery(this).closest('form').length == 0){

                var get_v_form_id = false;  

                var afindeform_id ;

                app_block_enabled = true;

                var variantIds = pplr_product.variants.map(variant => parseInt(variant.id));

                var formwithButton = jQuery('form[id]:has([type="submit"]):visible [name="id"]');

                formwithButton.each(function(){
                      if(variantIds.includes(parseInt(jQuery(this).val()))){
                            if(!get_v_form_id){
                              get_v_form_id= true;
                              afindeform_id = jQuery(this);
                            }
                      }
                })

                if(!get_v_form_id){
                    formwithButton = jQuery('form[id]:has([type="submit"]) [name="id"]');
                    formwithButton.each(function(){
                          if(variantIds.includes(parseInt(jQuery(this).val()))){
                            if(!get_v_form_id){
                              get_v_form_id= true;
                              afindeform_id = jQuery(this);
                            }
                          }
                    })
                  }

                  if(get_v_form_id){
                      var afindeform = afindeform_id.parents('form');
                  }

                  if(!get_v_form_id){
                      var vaddtocart = jQuery('form[action*="/cart/add"][id]:visible button:first,form[action*="/cart/add"][id]:visible [name="add"]:first,form[action*="/cart/add"][id]:visible input[type="submit"]:first');
                      if(vaddtocart[0]){
                        var afindeform = vaddtocart.parents('form').first();
                        get_v_form_id= true;
                      }
                  }

                  if(!get_v_form_id){
                      var afindeform = jQuery('form[action*="/cart/add"][id]:visible').first();
                      if(afindeform[0]){
                        get_v_form_id= true;
                      }
                  }

                  if(!get_v_form_id){
                      var afindeform = jQuery('form[action*="/cart/add"][id]').first();
                      if(afindeform[0]){
                        get_v_form_id= true;
                      }
                  }

                  if(get_v_form_id){
                      var id = afindeform.attr('id'); 
                      afindeform.addClass('pplr_atc_form');
                      _P_P_D.first().html(text);
                      pplr_el = _P_P_D.first();
                      pplr_el.find('input,textarea,select,.pplr_check_order').attr('form',id);
                      pplr_form = afindeform;
                  }

            }
        }
    })
}


    if(!pplr_el){
        _P_P_D.first().html(text);
        pplr_el = _P_P_D.first();

        if(!pplr_form[0]){
            pplr_form = _P_P_D.closest('form');
         }
        pplr_form.addClass('pplr_atc_form');
        pplr_form.attr('action', '/cart/add');
      }

    // pplr_el = jQuery(".product-personalizer").first()[0];


    if (prodata[10] > 3) {
        jQuery('form .'+_SJ[9]).hide().addClass('pplr_hide');
        jQuery('form #'+_SJ[9]).hide().addClass('pplr_hide');
        pplr_form.find('[name="add"],input[type="submit"],button[type="submit"]:not(.pplr-btn)').hide().addClass('pplr_hide p_a_t_c2');
        pplr_form.find('[name="quantity"],.productForm-block,.variations_button .quantity-wrapper,.quantity.quantity-product-template').hide();
        var i_d = pplr_form.attr('id');jQuery("[name='quantity'][form='"+i_d+"']").hide();
        pplr_form.find('[name="quantity"]').siblings('label,.plus,.minus,.js-change-quantity').hide();
        if(pplr_form.length>0 ){
            pplr_form.find(_P_P).nextAll('div label input ,.product-form__item').hide();
            if(pplr_form.find(_P_P).length == 0){
                pplr_form.hide();
            }
        }
        pplr_form.addClass('popup_exclusive');
    }
    else{
        jQuery('.pplr_add_to_cart').removeClass('pplr_add_to_cart');
    }

    if (prodata[10] == 4) {
        jQuery('.shopify-payment-button__button,.shopify-payment-button').hide().css({'visibility':'hidden','height':'0px'});
    }

  if(!app_block_enabled){
    
        if(_P_P_D.siblings('.purchase-details,.quanity-cart-row').css('display')=='flex'){ 
            _P_P_D.wrap('<div style="display:flex;"></div>');
        }
    
        var pplr_g_f = false;
    
        _P_P_D.siblings().each(function(){
            if(jQuery(this).css('display')=='flex' || jQuery(this).css('display')=='grid'){ 
                pplr_g_f = true;
            }
        })
    
        if(pplr_g_f){
            _P_P_D.wrap('<div></div>');
            _P_P_D.parent().css({'float':'none','display':'grid','width':'100%'});
        }
    
        var nvle = _P_P_D.siblings('div:visible');
        if(nvle[0]){
            _P_P_D.css('float',nvle.css('float'));
        }

    }

    pplr_id = _P_P_D.first();

    if(pplr_id.height()<1){
        pplr_id.css('float','left');
    }

    pplr_id.css({
        'padding': _SJ[2],
        'margin': _SJ[3]
    });

    if (prodata[10] == 2) {
        _P_P_D.first().append('<div style="display:none" class="cstmfy_personalize_text" ></div>');
    }

    if (preview > 1 && prodata[8] < 3 && prodata[10] <3) {
        if(preview>2){
            var pplr_prev_mobile= ' pplr_prev_mobile ';}else{var pplr_prev_mobile= '';
        }
        var d_t = '';
        if(prodata[10] ==2){
            d_t = ' p_d_t_p ';
        }
        _P_P_D.first().append('<span class="pplr_prev_span "><button type="button" '+bcolor+' onclick="pplr_preview(event)"  class="btn pplr-btn  button pplr-preview-btn  Button--secondary '+_SJ[28]+pplr_prev_mobile+d_t+'">' + cstmfy_preview_text + '</button></span>');
    }


    if(_SJ2[11]>0){
        if(prodata[10] == 1){
            _P_P_D.addClass('pplr_background');
        }
        if(prodata[10] == 2){
            jQuery('.cstmfy_personalize_text').addClass('pplr_background');
        }
    }

    if (prodata[10] <2) {
        if(typeof pplr_custom_form_add !=='undefined'){
            console.log('pplr_custom_form_add');
            pplr_custom_form_add();
        }
    }

    setTimeout(function() {
        if(pplr_form.length<1 && prodata[10] <2){
            _P_P_D.css({'max-height':'100px',"overflow":"hidden"}).append('<span class="p_p_m_n">No product form found.</span>');
        }
    }, 3000);

    for (var j = 0; j < _CP[1]; j++) {
        var m_ = _PP[_CM + (j + 1)].split(',');
        if(m_[13]<3){
            var k = m_[0].split('/').pop(-1);
            var selectfonts = k.replace('.ttf', '').replace('.TTF', '').replace('_', '');
            var link = app_link_pplr + m_[0]+pplr_no_day;
            var p_ttf = k.replace(".ttf", "");

            if(fNamearray.indexOf(selectfonts)<0){
                fNamearray.push(selectfonts);
                if(typeof pplr_custom_font !=='undefined'){
                    if(pplr_custom_font[p_ttf]){
                        link = pplr_custom_font[p_ttf];
                    }
                }
                fontface3 += "@font-face {font-family: '" + p_ttf + "';src: url('"+link + "') format('truetype');} ";
            }
            
            if(m_[43]>1 && m_[13]<2){
                var selectfonts = m_[60].split('/').pop(-1).replace('.ttf', '').replace('.TTF', '').replace('_', '');
                if(fNamearray.indexOf(selectfonts)<0){
                    fNamearray.push(selectfonts);
                    fontface3 += "@font-face {font-family: '" + m_[60].split('/').pop(-1).replace(".ttf", "") + "';src: url('"+app_link_pplr + m_[60] + "') format('truetype');} ";
                }
            }

            if(m_[43]>2 && m_[13]<2){
                var selectfonts = m_[66].split('/').pop(-1).replace('.ttf', '').replace('.TTF', '').replace('_', '');
                if(fNamearray.indexOf(selectfonts)<0){
                    fNamearray.push(selectfonts);
                    fontface3 += "@font-face {font-family: '" + m_[66].split('/').pop(-1).replace(".ttf", "") + "';src: url('"+app_link_pplr + m_[66] + "') format('truetype');} ";
                }
            }
        }
    }

    if(prodata[10]<2 && prodata[8]<3) {
        _P_P_D.append("<style>" + fontface3 + "</style>");
    }

    if(prodata[10]<2 && prodata[8]<1 || prodata[10]<2 && prodata[8]>1){
        _P_P_D.append("<style>" + fontface + "</style>");
    }


    if(prodata[10]==2){
        jQuery('.cstmfy_personalize_text').hide();
        jQuery('.cstmfy_c_required').prop('required',false);
        jQuery('.cstmfy_c_required,.pplrcheckbox,.pplr_imgg').prop('disabled',true);
    }

    check_remember();
    pplr_id.show();


    if (_CP[10] <3 && pplr_has_tab) {
        ptabify();
    }

    if (_CP[10] <3 ) {
        if(pplr_has_checkbox){
          $PP_EL('input.pplr_check:checked').trigger('click');
        }
        if(pplr_has_duplicate?.tag){
          $PP_EL('.pplr_tag').each(function() {
              var k = jQuery(this).siblings('.selected,.active');
              if(k[0]){
                  var d = k.data('tag');
                  selectthistag(jQuery(this).find('.pplr-selecter-item[data-val="'+d+'"]'));
              }else{
                  selectthistag(jQuery(this).find('.pplr-selecter-item').first());
              }
          })
        }
    }

    if(_CP[10] <2 ){
        pplrCustomeEvent("pplrAppBuild");
        if(p_condition){
          // updatecondition(pplrframe,0,0,0,0,0,true);
          if(pplr_has_tab){
            var active_tab = false;
            pplr_el.children(".pplr_tab").each(function() {
              if(jQuery(this).children().length == jQuery(this).children(".pplr_no_preview , .cstmfy_static").length){
                var tab_idx = jQuery(this).attr("data-tab");
                $PP_EL(".pplr_tab_index[data-tab='"+tab_idx+"']").addClass("p_l_h");
              }else if(!active_tab){
                active_tab = jQuery(this).attr('data-tab');
              }
            })

            if(active_tab){
              $PP_EL("[data-tab='"+active_tab+"']").addClass("pplr_active").siblings().removeClass("pplr_active");
            }else {
              $PP_EL(".pplr_tab.pplr_active").removeClass("pplr_active")
            }

          }
        }
        pplr_hide_duplicate();
        pplr_preload_image();
    }

    if (_CP[8] == 1 && _CP[10] <2 ) {

        setTimeout(function() {
            var pplr = first_prod_img();
            if (typeof pplr !== 'undefined' && hasfont) {
                dowebfontconfig(pplr,pplr_form);
            } else{
                font_loaded = true;
                if (typeof pplr !== 'undefined'){
                  pplr.parent().addClass('pplr');
                }
                LoadPplrWithFont(pplrframe);
            }
         }, 40);

        jQuery(window).on('load', function(font_loaded) {

          document_f_loaded = true;

            pplr_check_fl = setTimeout(function() {
              if(!pplrloading){
                var pplr = first_prod_img();
                if (typeof pplr !== 'undefined') {
                  var pplr_d = jQuery('.pplr');
                    if (pplr_d.length > 1 || !(pplr.parent().hasClass('pplr')) || pplr_d.length < 1) {
                        pplrnewload();
                        console.log('document loaded');
                          dowebfontconfig(pplr,pplr_form);
                    } else {
                        if (font_loaded === false && hasfont) {
                            LoadPplrWithFont(pplrframe);
                            console.log('document loaded');
                        }
                    }
                }
              }

            }, 400);
        });

        pplr_check_fl = setTimeout(function() {
          if(!pplrloading && !document_f_loaded){
              var pplr = first_prod_img();
                if (typeof pplr !== 'undefined') {
                  var pplr_d = jQuery('.pplr');
                    if (pplr_d.length > 1 || !(pplr.parent().hasClass('pplr')) || pplr_d.length < 1) {
                      pplrnewload();
                      if (pplr_d.length < 1) {
                          dowebfontconfig(pplr,pplr_form);
                      }
                    } else {
                      if (font_loaded === false && hasfont) {
                          LoadPplrWithFont(pplrframe);
                          console.log('3 seconds');
                      }
                    }

                    if(pplr_event_attached){
                      if (jQuery('.pplr_preview_wrapper canvas').length > 0) {
                        if(pplrcurrentimage!==jQuery('.pplr img:visible:first')[0].currentSrc){
                            LoadPplrWithFont(pplrframe);
                            console.log('lazy load');
                        }
                      }
                    }

                }
              }

        }, 3100);
    }
    else{
      document_f_loaded = true;
      pplrcomplete();
      setTimeout(function() {
        pplr_manage_event();
      },100)
      setTimeout(function() {
        checkinventory();
      }, 200);
    }

    if (gcolor) {
        dominicolors();
    }


    if(_CP[10] == 2){
        p_d_o = true;
    }

    if(typeof pplr_custom_code !=='undefined'){
        console.log('pplr_custom_code');
        pplr_custom_code();
    }

  setTimeout(function() {

    jQuery.fn.bindFirst = function(name, fn) {
        var elem, handlers, i, _len;
        this.bind(name, fn);
        for (i = 0, _len = this.length; i < _len; i++) {
            elem = this[i];
            handlers = jQuery._data(elem).events[name.split('.')[0]];
            handlers.unshift(handlers.pop());
        }
    };

    jQuery(".pplr_atc_form").bindFirst("submit", function(e) {if(createproduct >2 && _CP[8]<3 && createproduct <6 && pplr_preview_save){

      if(_SJ2[0]>3 && !pplr_buy_now){
        return;
      }
        if(p_d_o){
            return;
        }
        if(jQuery(".pplr-wrapper:visible")[0] && jQuery('.p_a_t_c')[0]){   
            e.preventDefault();
            return false;
        }
    }});


    jQuery(document).off( "submit", 'form[action="/cart/add"]' , function(e) {} );
    jQuery(document).unbind( "submit", 'form[action="/cart/add"]' , function(e) {} );

    p_a_t_c();
    n_ad_cart('.p_a_t_c');

    jQuery('.' + _SJ[9]+',#' + _SJ[9]).prop("type", "submit");

    if(_CP[10] <2 && _CP[7]>1 && _CP[8]<3){
        jQuery('.p_a_t_c').removeClass(_SJ2[33]).removeAttr(_SJ2[33]);
    }
    if(_CP[10] <2){
        jQuery('.p_a_t_c').removeAttr(_SJ2[33]).removeClass(_SJ2[33]);
    }

    if (_SJ[0] == 3 && _CP[10] <3) {
        var k_t= pplr_id.first();
        if(prodata[10] == 2){
            k_t = jQuery('.cstmfy_personalize_text');
        }
        k_t.css({
            'max-height': _SJ[1] + 'px',
            'overflow-y': 'auto',
            'padding': '5px',
            'overflow-x': 'hidden'
        });

        jQuery('.pplr_tab').css({
            'max-height': (_SJ[1]-80) + 'px',
            'overflow-y': 'auto',
            'overflow-x': 'hidden'
        });
    }

    if (pcropper) {
        var link = "<link rel='stylesheet' type='text/css' href='https://cdn-zeptoapps.com/product-personalizer/cropper.min.css'>";
        jQuery("head").append(link);
        loadScript_pplr('//cdn-zeptoapps.com/product-personalizer/cropper.js?v=1234', function() {
        })
    }
        
    var link = "<link rel='stylesheet' type='text/css' href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>";
    jQuery("head").append(link);

  },150)

    pplrCustomeEvent("pplrAppInitiated");

    try {eval(decodeHtml(pplr_cjs));}
    catch (e) {console.log(e)}

}

function p_a_t_c(){
    var pplrform = jQuery(".pplr_atc_form");
    pplrform.each(function() {
        var formaddbutton = jQuery(this).find(add_to_cart);
        if(!formaddbutton[0]){
            formaddbutton = jQuery(this).find('input[type="submit"], button[type="submit"]:not([data-quantity-action]),.' + _SJ[9]+',#' + _SJ[9]);
        }
        if(!formaddbutton[0]){
            if(typeof pplr_custom_ajaxcart_before =='undefined'){
                formaddbutton = jQuery(this).find('button:not(.pplr-c-button):not(.js-qty__adjust):not([data-quantity-action]):not(.js-qty-button):not(.pplr_align):not(.pplr-preview-btn)');
            }
        }
        formaddbutton.addClass('p_a_t_c');
        pplrform = formaddbutton.closest("form");
        var _I_D = pplrform.attr('id');
        if (typeof _I_D !== 'undefined' && _I_D !== false && _I_D !=='') { 
            var buttonoutofform = jQuery('[type="submit"][form='+_I_D+']');
            if(buttonoutofform[0]){
                if(!buttonoutofform.parents('form')[0]){
                    buttonoutofform.addClass('p_a_t_c_o');
                }
            }
        }
    })
}




function addListenerMulti(element, eventNames, listener) {
      var events = eventNames.split(' ');
      for (var i=0, iLen=events.length; i<iLen; i++) {
          element.addEventListener(events[i], listener, true);
      }
  }


  function adjust_r_o(){
      pplr_modal_correct();
      jQuery('.pplr_preview_wrapper,pplr_preview_wrapper canvas').width(jQuery('.pplr img:visible:first').width());
      jQuery('.pplr_preview_wrapper,pplr_preview_wrapper canvas').height(jQuery('.pplr img:visible:first').height());
      update_pplr_wrapper();
  }

function pplr_manage_event(){

  $document = jQuery(document);
  
    if(_SJ[14]>1){
      $document.on('mousemove touchstart touchmove', '.pplr_preview_wrapper,.pplr-prev-left', function(e) {
            if(jQuery('.pplr_preview_wrapper canvas,.pplr-prev-left img')[0]){
                if(window.innerHeight > window.innerWidth){
                    jQuery("body").addClass("pplr_fixed");
                }
                jQuery('.pplr_preview_wrapper canvas,.pplr-prev-left img').addClass('pplr_zoom');
                var a = jQuery(this).children('canvas,img'); 
                var targetWidth = a.get(0).width;
                var targetHeight = a.get(0).height;
                var sourceWidth = jQuery(this).width();
                var sourceHeight = jQuery(this).height();
                var xRatio = (jQuery(this).width() - targetWidth) / sourceWidth;
                var yRatio = (jQuery(this).height() - targetHeight) / sourceHeight;
                var offset = jQuery(this).offset();
                if(e.type == 'touchstart' || e.type == 'touchmove'){
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    var left = (touch.pageX - offset.left);
                    var top = (touch.pageY - offset.top);
                }
                else{
                    var left = (e.pageX - offset.left);
                    var top = (e.pageY - offset.top);
                }
                a.css('left',(left * xRatio));
                a.css('top',(top * yRatio));
            }
        });
        $document.on('touchend mouseout', '.pplr_preview_wrapper,.pplr-prev-left', function(e) {
            jQuery('.pplr_preview_wrapper canvas,.pplr-prev-left img').removeClass('pplr_zoom');
            jQuery('.pplr_preview_wrapper canvas').css({'width':'auto','left':'0px','top':'0px'});
            jQuery("body").removeClass("pplr_fixed");
        })
    }

    $document.on("click mouseover", ".ptooltip", function(event) { 

        var pplrfolder = jQuery(_P_P);
        if(jQuery(".pplr-p-right")[0]){
            pplrfolder = jQuery(".pplr-p-right");
        }
        jQuery(this).css({
            'z-index': 4
        });

        jQuery(this).siblings().css({
            'z-index': 2
        });

        var c = jQuery(this).children(".ptooltiptext");
        var el1 = jQuery(this);
        var el2 = jQuery(this).parents("label,.pplr-wrapper");
        var p1 = el1.offset();
        var p2 = el2.offset();
        var elh = c.height();

        if(elh>200){c.css({'width':'250','max-width':jQuery(this).parent().width()})};
        if(elh>300){c.css({'width':'300','max-width':jQuery(this).parent().width()})};

        var el3 = c.width(); 
        var pleft = jQuery(this).position().left+el3/2-el2.width();
        if(pleft<0){pleft=0;}
        var pright = jQuery(this).offset().left-el3/2-el2.offset().left;
        if(pright>0){pright=0;}
        c.css({
            'margin-left': (p2.left - p1.left),
            'left': jQuery(this).position().left-el3/2-pleft-pright
        });

        if ((p2.top - pplrfolder.offset().top) < c.height() && pplrfolder.css('overflow-y')=='auto') {
            c.css('bottom', -c.height() - 25);
            c.addClass('bottom').removeClass('top');
        } else {
            c.css('bottom', '160%');
            c.addClass('top').removeClass('bottom');
            }
        jQuery(this).find(".ptooltiparrow").css({
            'left': jQuery(this).position().left+7-c.position().left
        });

    })


    $document.on("mouseout", ".ptooltip", function(event) { 
          jQuery(this).css({
          'z-index': 2
          });
    })

    $document.on("click mouseover", ".pplr-swatch-element", function(event) { 

        var pplrfolder = jQuery(_P_P);
        if(jQuery(".pplr-p-right")[0]){
            pplrfolder = jQuery(".pplr-p-right");
        }


        if(!jQuery(this).hasClass('pplr_deselect') & !jQuery(this).parent().hasClass('img_thumb_dropdown')){

            if(jQuery(this).hasClass('activeswatch')){
            return;
            }
            if(event.type == "mouseover" && iOS && pisSafari() || event.type == "mouseover" && iOS && pisFacebookOrInstagram()){
                jQuery(this).addClass('activeswatch');
                setTimeout(function() {
                jQuery('.activeswatch').removeClass('activeswatch');
                },500);
            // jQuery(this).trigger('click');
            }
            
            if(jQuery(this).find('img[data-psrc]:not(.pplr_img_loaded)')[0]){
                var yy = jQuery(this).find('img[data-psrc]').attr("data-psrc");
                jQuery(this).find('img[data-psrc]').attr("src",yy).addClass("pplr_img_loaded");
            }


            jQuery(this).css({
            'z-index': 4
            });
            jQuery(this).siblings().css({
            'z-index': 2
            });
            jQuery('.pplr-swatch-element').children(".swtooltip").hide();
            var s = jQuery(this).children(".swtooltip");
            s.show();
            var p1 = s.offset();
            var p2 = jQuery(this).parent().offset();

            if (p1.left - p2.left >0 && parseInt(jQuery(this).width()/2-s.width()/2)>p1.left - p2.left) {
                s.css({
                    'left': jQuery(this).width()/2-s.width()/2
                });
                s.removeClass('sleftafter').removeClass('sleftbefore');
            }

            if (p1.left - p2.left < 3) {
                s.css({
                    'left': 0
                });
                s.addClass('sleftbefore').removeClass('sleftafter');
            }

            if (jQuery(this).parent().width() + p2.left-jQuery(this).offset().left < s.width()/2 ) {
                s.css({
                    'left': -s.width()
                });
                s.addClass('sleftafter').removeClass('sleftbefore');
            }


            if (pplrfolder.offset().top > s.offset().top  || _SJ[0]==3 || jQuery(this).parents().hasClass('pplr_tab') || s.hasClass('after')) {
                s.css({
                    'bottom': 'auto',
                    'top': jQuery(this).height()+10
                });
                s.addClass('after').removeClass('before');
            } else {
            s.css({
                'bottom': '100%',
                'top': 'auto'
            });
            s.addClass('before').removeClass('after');
            }

        }

    })

    $document.on("mouseout", ".pplr-swatch-element", function(event) { 
          jQuery(this).css({
          'z-index': 2
          });
          var s = jQuery(this).children(".swtooltip");
          s.hide();
      })
  

  
    jQuery(window).on("resize",function() {
        setTimeout(function() {
            var vScale = screen.width / window.innerWidth;
            if(isLandscape()){
                vScale = screen.height / window.innerWidth;
            }
            if(jQuery('.pplr')[0] && vScale ==pplr_vScale){ 
                adjust_r_o();
            }
        },500)
    })

    jQuery(window).on("orientationchange",function() {
        setTimeout(function() {
            if(jQuery('.pplr')[0]){ 
                adjust_r_o();
            }
        },500)
    })




    $document.on("keypress", ".pplr-wrapper input", function(event) { 
        if(event.keyCode == 13){
            jQuery(this).blur();
            return false;
        }
    });


    var a = 'form[action*="/cart/add"] select:not(.pplr_select),.currency-picker[name="currencies"],.doubly-wrapper .currency-switcher,.single-option-selector,.single-option-selector__radio,form[action="/cart/add"] input[type=radio],select[name="id"],.Popover__Value,input[name="id"],.'+_SJ[11];
    var kkrmt;
    if (_CP[10] < 3 && _CP[8] < 2) {
    setTimeout(function() {
        var variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));
        addListenerMulti(window, 'change click touchstart blur focus', function(e){
        var t = jQuery(e.target);
        if(t.is(jQuery(a))){
        clearTimeout(kkrmt);
        kkrmt =  setTimeout(function() {
            if(p_d_o){
                return;
            }
            change_frame = updatecondition(pplrframe,false,false,false,false,true);
            window.PPLR_CAlCULATE_PRICE();
            }, 10);
        }
        });

        if (_CP[0] > 0 || pplr_product.variants[0]["featured_image"] ) {
          $document.on("change", a, function(event) { 
            setTimeout(function() {
            if(p_d_o){
                return;
            }
            if(!change_frame){
            if_change_image(this); 
            }
            }, 10);
         });
        }

        $document.on("touchstart click", 'body img[src*="/products/"],body img[src*="/files/"], .flex-next, .flex-prev, .swatch-element,.flickity-prev-next-button,.'+_SJ[11], function(event) { 
          setTimeout(function() {
          if(p_d_o){
              return;
          }
          if_change_image(this);
        }, 10);

        });

        jQuery('body img[src*="/products/"],.Popover__Value,.ColorSwatch,.HorizontalList__Item,.flex-next, .flex-prev, .swatch-element,.flickity-prev-next-button,.'+_SJ[11]).on("click",function() {
          setTimeout(function() {
            p_a_t_c();
            n_ad_cart('.p_a_t_c');
            if(p_d_o){
                return;
            }
        if_change_image(this);
        }, 10);

        clearTimeout(kkrmt);
        kkrmt =  setTimeout(function() {
            var kkyt = pplr_variant_id(jQuery('.pplr_atc_form'));

            if(kkyt !== variant_now){
            variant_now = kkyt;
                if(p_d_o){
                    return;
                }
                change_frame = updatecondition(pplrframe,false,false,false,false,true);
                window.PPLR_CAlCULATE_PRICE();
            }

            }, 10);

        });

    }, 200);

    $document.on("change", a, function(event) { 
        if(p_d_o){
                return;
            }
        var changevarianttime = setInterval(function () {window.PPLR_CAlCULATE_PRICE();}, 100);
        setTimeout(function() {
            clearInterval(changevarianttime); 
        }, 2000);
        })


    }
    else{
    setTimeout(function() {
        $document.on("change click blur focus", a, function(event) { 
        clearTimeout(kkrmt);
            kkrmt =  setTimeout(function() {
            if(p_d_o){
                return;
            }
            p_a_t_c();
            n_ad_cart('.p_a_t_c');
            change_frame = updatecondition(pplrframe,false,false,false,false,true);
            window.PPLR_CAlCULATE_PRICE();
            },10)

        });

    }, 200);
    }

    setTimeout(function() {

      var MutationObserver_main = window.MutationObserver || window.WebKitMutationObserver;
      var pplr_muta_s_main;
      var obs_main = new MutationObserver_main(function(mutations, observer) {
          clearTimeout(pplr_muta_s_main);
          pplr_muta_s_main = setTimeout(function() {
          var kkyt = pplr_variant_id(jQuery('.pplr_atc_form'));
              if(kkyt !== variant_now){
              clearTimeout(kkrmt);
              kkrmt =  setTimeout(function() {
                  variant_now = kkyt;
                  if(p_d_o){
                      return;
                  }
                  p_a_t_c();
                  n_ad_cart('.p_a_t_c');
                  console.log(pplrframe);
                  change_frame = updatecondition(pplrframe,false,false,false,false,true);
                  window.PPLR_CAlCULATE_PRICE();
              },10)
  
              }
          },20);
      })
      jQuery('body').each(function() {
              obs_main.observe(this, {
              subtree: true,childList: true
              });
          })

    }, 300);


    if(_SJ2[3]>0){
      // jQuery(document).on("change",'.pplr_text,.pplr_select', function(event) { 
        $document.on("change",'.pplr_text,.pplr_select', function(event) { 
              var p = jQuery(this);
              var cn = p.attr('data-frame')+'_pplr';
              var cv = p.val();
              setC(cn, cv);
          })
    }
    var variant_now = pplr_variant_id(jQuery('.pplr_atc_form'));

    $document.on("mouseup click", function(e) {

      var a = jQuery(".key_layout:not(.k_full),.key_layout_sub,.inputkeylayout");if (!a.is(e.target) && a.has(e.target).length === 0) {
        jQuery(".key_layout:not(.k_full)").hide();
      }
      var a = jQuery(".pplr-swatch-element");
      if (!a.is(e.target) && a.has(e.target).length === 0) {
        jQuery(".pplr-swatch-element .swtooltip").hide();
      }
     var kkyt = pplr_variant_id(jQuery('.pplr_atc_form'));

     if(kkyt == variant_now){recurstop = true;}
      var b = jQuery(".pplr-selecter-options,.pplr-selecter-selected,.img_thumb_dropdown");

      if (!b.is(e.target) && !b.children().is(e.target)) {
          jQuery(".pplr-font-select:not(.pplrfontthumb) .pplr-selecter-options,.img_thumb_dropdown,.c_drop_list").hide();
      }

    });


    $document.on("focus", '.pplr_text', function(event) { 
        if(!jQuery(this).hasClass("cstmfy_c_required")){
          jQuery(this).removeClass('p_u_t'); 
            if(jQuery(this).val()==jQuery(this).attr('d-placeholder') && _SJ2[30]<2){
            jQuery(this).val('').attr('d-placeholder','').trigger('input');
            }
        }
        
        var check_view_id = jQuery(this).closest(".pplr-wrapper").attr('data-pview');
        if(check_view_id && pplr_active_view_id !== check_view_id){
          clearTimeout(checktimout)
          var frame = jQuery(this).attr('data-frame');
          const name = jQuery(this).attr('name');
          jQuery(`.pplr-wrapper [name="${name}"]`).each(function(){
            if(jQuery(this).closest(".pplr-wrapper").attr('data-pview') == pplr_active_view_id){
              frame = jQuery(this).attr('data-frame');
            }
          })
          LoadPplrWithFont(frame)
        }

      });


    $document.on("focus", '.inputkeylayout', function(event) { 

      jQuery(".key_layout").hide();
      jQuery(this).siblings(".key_layout:not(.k_full)").show();
    });

    $document.on("click", '.pplr-p-right .minicolors-swatch', function(event) { 
        if(jQuery(this).offset().top+200>jQuery('.pplr-p-right').offset().top+jQuery('.pplr-p-right').height()){
            setTimeout(function() {
                jQuery('.pplr-p-right').animate({ scrollTop:jQuery('.pplr-p-right').scrollTop()+150});
            }, 200);
        }
    })

    $document.on("touchend", ".minicolors-panel", function(event) { 
        jQuery('.pplr-p-right').css({'overflow': 'auto'});
    })

    $document.on("touchstart", ".minicolors-panel", function(event) { 
        jQuery('.pplr-p-right').css({'overflow': 'hidden'});
    })
    
    $document.on("focus focusout", '.inputkeypos', function(event) {
    jQuery(this).attr('fpos',event.target.selectionStart);
    });

    $document.on("mouseenter", '.pplr_red_wrapper', function(event) {
    jQuery(this).addClass('stopdance');
    });
    $document.on("change", '[name="quantity"]', function(event) {
        window.PPLR_CAlCULATE_PRICE();
    });

    var scroltimeout;
    $document.on('scroll', function() {
        pplr_prev_left();
        clearTimeout(scroltimeout);
        scroltimeout = setTimeout(function() {
        pplr_prev_left(true);
        }, 200);

    })

    $document.on("touchstart click", '.pplr_select', function(event) {
        if (event.type !== "click")
        jQuery(this).trigger('click');
    });

    $document.on("touchstart click", '.pplrfileuploadcover', function(event) {
        var link = jQuery(this);

    if(link.data('lockedat')>0) {
        link.data('lockedat', '0');
        if (event.type !== "click")
        jQuery(this).siblings('.fileupload').trigger('click');
        setTimeout(function () {
        link.data('lockedat', '1');
        }, 1000);
    }
    });


    if((pisFacebookOrInstagram() || iOS) && !window.pplr_no_meta){
        jQuery('head').append('<meta name="viewport" id="pplr_meta" content="width=device-width, initial-scale=1.0, maximum-scale=1.0 ,user-scalable=0">');
    }

    if (typeof __st !== "undefined") {
        var shop_url=__st.pageurl.split('/')[0];
        jQuery.ajax({
            type : 'GET',
            url : "https://"+shop_url+"/products/"+pplr_product.handle+".json",
            dataType : 'json',
            success : function(product){
            pplr_product_json = product.product;
        },
        error : function(jqXHR, textStatus, errorThrown){

        }
        })
    }
  }




if (typeof jQuery === 'undefined') {
    loadScript_pplr('//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', function() {
        jQuery(document).ready(pplr_Ready);
        pplrReadyCustom(function() {
            console.log('jQuery loaded');
            pplr_Ready(jQuery)
        });
    });
} else {
    var pplrwidth = jQuery(window).width();
    jQuery(document).ready(pplr_Ready);
    pplrReadyCustom(function() {
        jQuery.fn.pplr_ajax = jQuery.fn.ajax;
        pplr_Ready(jQuery)
    });
}