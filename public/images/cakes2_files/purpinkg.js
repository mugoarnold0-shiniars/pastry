
            if (typeof gsf_customer_privacy !== 'undefined') {
                    
        if (typeof gsf_analytics == 'undefined') {
            gsf_analytics = {};
        }
        if (typeof gsf_init == 'undefined') {
            gsf_init = {};
        }
        
        let fb_data_processing_options = {};
        window.dataLayer = window.dataLayer || [];
        
        
        function gtag(){dataLayer.push(arguments);}
        
        var gsfCustomGenerateProductItemsIds = function (items, type = 'google') {
            var gsf_pids = [];
            for (var gsf_item_i = 0; gsf_item_i < items.length; gsf_item_i++) { 
                var gsf_item = items[gsf_item_i];
                const gsf_variant_item = gsf_item.merchandise || gsf_item.variant || gsf_item;
                var gsf_items = {product_id: gsf_variant_item.product.id,variant_id: gsf_variant_item.id,sku: gsf_variant_item.sku};
                var gsf_pid = gsfCustomGenerateProductItemsId(gsf_items,type);
                if (gsf_pid) {
                    if (type == 'google_drms') {
                        gsf_pids.push({
                            'id': gsf_pid,
                            'value': gsf_variant_item.price.amount,
                            'currency': gsf_variant_item.price.currencyCode,
                            'google_business_vertical': 'retail'
                        });
                    } else if (type == 'google_drm') {
                        gsf_pids.push({
                            'id': gsf_pid,
                            'google_business_vertical': 'retail'
                        });
                    } else {
                        gsf_pids.push(gsf_pid);
                    }
                }
            }
            return gsf_pids;
        };
            
        var gsfCustomGenerateProductItemsId = function (items, channel = 'google') {
            var bing_sku_as_product_id = '-1';
            var gsf_item_pid = 'shopify_KE' + '_' + items.product_id + '_' + items.variant_id;
            if (channel == 'bing' && bing_sku_as_product_id != -1) {
                if (parseInt('-1') === 1) {
                    gsf_item_pid = items.sku;
                } else if (parseInt('-1') === 2) {
                    gsf_item_pid = items.variant_id;
                }
            } else {              
                if (parseInt('0') === 1) {
                    gsf_item_pid = items.sku;
                } else if (parseInt('0') === 2) {
                    gsf_item_pid = items.variant_id;
                } else if (parseInt('0') === 3) {
                    gsf_item_pid = items.product_id + '_' + items.variant_id;
                }
            }
            return gsf_item_pid;                   
        };
        
        var gsfGetShopCurrency = function (items) {
            var gsf_shop_currency = '';
            if (typeof items != 'undefined' && items.shop_currency != '') {
                gsf_shop_currency = items.shop_currency;
            }                
            return gsf_shop_currency;
        };
        
        var gsfCustomGetShopProductData = function (items,type) {           
            var gsf_shop_pdata = '';
            var gsf_shop_pids = [];
            for (var i = 0; i < items.length; i++) {
                var gsf_item = items[i];
                if (type == 'name' || type == 'title') {                    
                    var gsf_shop_pdata = (type == 'title') ? gsf_item.product_title : gsf_item.name;
                } else if(type == 'category') {
                    var gsf_shop_pdata = gsf_item.category;
                } else if(type == 'product_id') {
                    var gsf_shop_pdata = gsf_item.product_id || '';
                } else if(type == 'variant_id') {
                    var gsf_shop_pdata = gsf_item.variant_id || '';
                } else if(type == 'sku') {
                    var gsf_shop_pdata = gsf_item.sku || '';
                } else if(type == 'vendor') {
                    var gsf_shop_pdata = gsf_item.brand || '';
                } else if(type == 'type') {
                    var gsf_shop_pdata = gsf_item.category || '';
                } else if(type == 'variant_title') {
                    var gsf_shop_pdata = gsf_item.variant || '';
                } else if(type == 'id') {                        
                    gsf_shop_pids.push(gsf_item.variant?.product?.id || gsf_item.product.id);
                } else if(type == 'v_id') {                        
                    gsf_shop_pids.push(gsf_item.variant_id);
                }              
            } 
            return (type == 'id' || type == 'v_id') ? gsf_shop_pids : gsf_shop_pdata;             
        };
        
        function gsfGetLineItems(items, channel = 'google') {
            var gsf_product_items = [];
            for (var gsf_item_i in items) {
                var gsf_item = items[gsf_item_i];
                var gsf_product_item = {};
                const gsf_variant = gsf_item.merchandise || gsf_item.variant || gsf_item;
                const gsf_product = gsf_item.merchandise?.product || gsf_item.variant?.product || gsf_item.product;
                
                var gsf_items = {
                    product_id: gsf_product.id,
                    variant_id: gsf_variant.id,
                    sku: gsf_variant.sku
                };
    
                //checkout_started, payment_info_submitted, checkout_completed
                if (channel == 'google') {
                    var gsf_p_item_id = gsfCustomGenerateProductItemsId(gsf_items);
                    if (gsf_item.variant.product) {
                        gsf_product_item.id = gsf_p_item_id;              
                    }
                    if (gsf_item.variant.price) {
                        gsf_product_item.price = gsf_item.variant.price.amount;
                    }          
                    if (gsf_item.quantity) {
                        gsf_product_item.quantity = gsf_item.quantity;
                    }
                } else if (channel == 'bing') {
                    var gsf_p_item_id = gsfCustomGenerateProductItemsId(gsf_items, 'bing');
                    if (gsf_item.variant.product) {
                        gsf_product_item.id = gsf_p_item_id;              
                    }
                    if (gsf_item.variant.price) {
                        gsf_product_item.price = gsf_item.variant.price.amount;
                    }          
                    if (gsf_item.quantity) {
                        gsf_product_item.quantity = gsf_item.quantity;
                    }
                } else if (channel == 'pinterest') {                                        
                    if (gsf_product) {
                        gsf_product_item.product_id = gsf_product.id;              
                        gsf_product_item.product_name = gsf_product.title;              
                        gsf_product_item.product_brand = gsf_product.vendor;              
                        gsf_product_item.product_category = gsf_product.type;              
                    }                    
                    if (gsf_variant) {
                        gsf_product_item.product_variant_id = gsf_variant.id;              
                        gsf_product_item.product_variant = gsf_variant.title;
                    }
                    if (gsf_variant.price) {
                        gsf_product_item.product_price = gsf_variant.price.amount;
                    }
                    if (gsf_item.quantity) {
                        gsf_product_item.product_quantity = gsf_item.quantity;
                    }
                } else if (channel == 'google_analytics') {
                    var gsf_p_item_id = gsfCustomGenerateProductItemsId(gsf_items);                        
                    if (gsf_variant.product) {
                        gsf_product_item.item_id = gsf_p_item_id;              
                        gsf_product_item.item_name = gsf_product.title;              
                        gsf_product_item.item_brand = gsf_product.vendor;              
                        gsf_product_item.item_category = gsf_product.type;              
                    }                    
                    if (gsf_variant) {                                      
                        gsf_product_item.item_variant = gsf_variant.title;
                    }
                    if (gsf_variant.price) {
                        gsf_product_item.price = gsf_variant.price.amount;
                    }
                    if (gsf_item.quantity) {
                        gsf_product_item.quantity = gsf_item.quantity;
                    }
                }
                gsf_product_items.push(gsf_product_item);
            }
            return gsf_product_items;
        }
        

        function gsfGetItemsDiscounts(items) {
            var gsf_items_discount = [];
            for (var gsf_item_i in items) {
                var gsf_item = items[gsf_item_i];
                var gsf_item_discount = {};
                
                var gsf_discount_allocations = gsf_item.discountAllocations;
                for (var gsf_item_j in gsf_discount_allocations) {
                    var gsf_discount_allocation = gsf_discount_allocations[gsf_item_j];
                    if (gsf_discount_allocation.amount) {
                        gsf_item_discount = gsf_discount_allocation.amount;
                    }
                }
                if (Object.keys(gsf_item_discount).length > 0) {
                    gsf_items_discount.push(gsf_item_discount);
                }
            }
            return gsf_items_discount;
        }
        function gsfCallAWS(gsf_aws_data, gsf_aws_url) {
            var gsf_aws_data_payload = JSON.stringify({'MessageBody': gsf_aws_data});
            fetch(gsf_aws_url, {
                method: 'PUT',
                body: gsf_aws_data_payload
            }).then(response => {
                //console.log('AWS this_responseText: ', JSON.stringify(response));
            }).catch((exception) => {
                console.log('error:', exception.message);
            });
        }
        
            function gsfCallCustomPurchase (event, fbp, fbc, shopify_sa_p) {

                let gsf_custom_purchase_log = {};

                var is_submit_subtotal = 0;
                var bing_is_submit_subtotal = 0;
                var ga4_is_submit_subtotal = 0;

                var gsf_shopify_data = event.data || '';
                var gsf_shopify_data_checkout = gsf_shopify_data.checkout || '';

                var gsf_shopify_order = gsf_shopify_data_checkout.order || '';
                var gsf_shopify_order_id = gsf_shopify_order.id || '';
                var gsf_shopify_order_customer = gsf_shopify_order.customer || '';
                var gsf_shopify_order_customer_id = gsf_shopify_order_customer.id || '';

                var gsf_shopify_total_price = gsf_shopify_data_checkout.totalPrice || '';
                var gsf_shopify_total_price_amount = gsf_google_total_price = gsf_bing_total_price = gsf_ga4_total_price = gsf_shopify_total_price.amount || 0;
                var gsf_shopify_total_price_currency = gsf_shopify_total_price.currencyCode || '';

                var gsf_shopify_subtotal_price = gsf_shopify_data_checkout.subtotalPrice || '';
                var gsf_shopify_subtotal_price_amount = gsf_shopify_subtotal_price.amount || 0;
                var gsf_shopify_subtotal_price_currency = gsf_shopify_subtotal_price.currencyCode || '';

                if (is_submit_subtotal) {
                    gsf_google_total_price = gsf_shopify_subtotal_price_amount;
                }
                if (bing_is_submit_subtotal) {
                    gsf_bing_total_price = gsf_shopify_subtotal_price_amount;
                }
                if (ga4_is_submit_subtotal) {
                    gsf_ga4_total_price = gsf_shopify_subtotal_price_amount;
                }

                var gsf_shopify_line_items = gsf_shopify_data_checkout.lineItems || '';

                var gsf_shopify_total_tax = gsf_shopify_data_checkout.totalTax || '';
                var gsf_shopify_total_tax_amount = gsf_shopify_total_tax.amount || '';

                var gsf_shopify_shipping_line = gsf_shopify_data_checkout.shippingLine || '';
                var gsf_shopify_shipping_line_price = gsf_shopify_shipping_line.price || '';
                var gsf_shopify_shipping_line_price_amount = gsf_shopify_shipping_line_price.amount || '';

                var gsf_shopify_discount_codes = gsf_shopify_data_checkout.discountApplications.map((discount) => {
                    if (1 || discount.type === 'DISCOUNT_CODE' || discount.type === 'AUTOMATIC') {
                        return discount.title;
                    }
                });
                
                var gsf_shopify_discounts = gsfGetItemsDiscounts(gsf_shopify_line_items);
                
                        var gsf_google_purchase_remarketing_event_data = {
                            'send_to': 'AW-985140749',
                            'value': gsf_google_total_price,
                            'currency': gsf_shopify_total_price_currency,
                            'items': gsfCustomGenerateProductItemsIds(gsf_shopify_line_items, 'google_drms')
                        };
                        gtag('event', 'purchase', gsf_google_purchase_remarketing_event_data);
                        
            }
            
            function gsfCallCustomBeginCheckout (event, gsf_fbp, gsf_fbc) {
                const gsf_event_data = event?.data || '';
                const gsf_checkout_token = gsf_init.data?.cart?.id;
                
                const currency = event.data.checkout.currencyCode;
                const total_price = event.data.checkout.totalPrice?.amount;
                const product_id = event.data.checkout.lineItems.map((lineItems) => {
                    return lineItems.variant.product.id;
                });
                const variant_id = event.data.checkout.lineItems.map((lineItems) => {
                    return lineItems.variant.id;
                });
                const first_name = gsf_init.data?.customer?.firstName || event?.data?.checkout?.billingAddress?.firstName || '';
                const last_name = gsf_init.data?.customer?.lastName || event?.data?.checkout?.billingAddress?.lastName || '';
                const email = gsf_init.data?.customer?.email || event?.data?.checkout?.email || '';
                const phone = gsf_init.data?.customer?.phone || event.data.checkout.billingAddress.phone;
                const gsf_custom_customer_data = {email, phone, first_name, last_name};
                const province = event.data.checkout.billingAddress.province || event.data.checkout.shippingAddress.province;
                const city = event.data.checkout.billingAddress.city || event.data.checkout.shippingAddress.city;
                const zip = event.data.checkout.billingAddress.zip || event.data.checkout.shippingAddress.zip;
                const country = event.data.checkout.billingAddress.country || event.data.checkout.shippingAddress.country;
                const gsf_custom_customer_address_data = {province, phone, city, zip, country};
                
                var gsf_shopify_line_items = event.data.checkout.lineItems || '';
                const gsf_cart_total_quantity = gsf_init.data?.cart?.totalQuantity;
                
            }
            
            function gsfCallCustomAddToCart (event, gsf_fbp, gsf_fbc, gsf_checkout_token) {
            const gsf_cart_line = event?.data?.cartLine;
            
            const gsf_currency_code = gsf_cart_line?.cost?.totalAmount?.currencyCode;
            const gsf_total_price = gsf_cart_line?.cost?.totalAmount?.amount;
            
            const gsf_cart_line_merchandise = gsf_cart_line?.merchandise;
            const gsf_variant_id = gsf_cart_line_merchandise?.id;
            const gsf_variant_sku = gsf_cart_line_merchandise?.sku;
            const gsf_variant_title = gsf_cart_line_merchandise?.title;
            const gsf_variant_price_amount = gsf_cart_line_merchandise?.price?.amount;
            const gsf_variant_price_currency_code = gsf_cart_line_merchandise?.price?.currencyCode;
            const gsf_product_id = gsf_cart_line_merchandise?.product?.id;
            const gsf_product_title = gsf_cart_line_merchandise?.product?.title;
            const gsf_product_vendor = gsf_cart_line_merchandise?.product?.vendor;
            const gsf_product_type = gsf_cart_line_merchandise?.product?.type;
            const gsf_cart_total_quantity = gsf_cart_line?.quantity;

            const gsf_first_name = gsf_init.data?.customer?.firstName || '';
            const gsf_last_name = gsf_init.data?.customer?.lastName || '';
            const gsf_email = gsf_init.data?.customer?.email || '';
            const gsf_phone = gsf_init.data?.customer?.phone || ''; 
                
            const gsf_province = gsf_cart_line?.billingAddress?.province || gsf_cart_line?.shippingAddress?.province || '';
            const gsf_city = gsf_cart_line?.billingAddress?.city || gsf_cart_line?.shippingAddress?.city || '';
            const gsf_zip = gsf_cart_line?.billingAddress?.zip || gsf_cart_line?.shippingAddress?.zip || '';
            const gsf_country = gsf_cart_line?.billingAddress?.country || gsf_cart_line?.shippingAddress?.country || '';
            const gsf_custom_customer_data = {email: gsf_email, phone: gsf_phone, first_name: gsf_first_name, last_name: gsf_last_name};
            const gsf_custom_customer_address_data = {province: gsf_province, phone: gsf_phone, city: gsf_city, zip: gsf_zip, country: gsf_country};
            
            var gsf_line_items = {
                product_id: gsf_product_id,
                variant_id: gsf_variant_id,
                sku: gsf_variant_sku,
            };        
            
                var gsf_google_add_to_cart_remarketing_data = {
                    'send_to': 'AW-985140749',
                    'value': gsf_total_price,
                    'currency': gsf_currency_code,
                    'items': gsfCustomGenerateProductItemsIds([gsf_cart_line_merchandise], 'google_drm')
                };
                gtag('event', 'add_to_cart', gsf_google_add_to_cart_remarketing_data);
                
            }
            function gsfMakeRandomID(gsf_length) {
                var gsf_random_ID = '';
                const gsf_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const gsf_characters_length = gsf_characters.length;
                let gsf_counter = 0;
                while (gsf_counter < gsf_length) {
                    gsf_random_ID += gsf_characters.charAt(Math.floor(Math.random() * gsf_characters_length));
                    gsf_counter += 1;
                }
                return gsf_random_ID;
            }
            
            function gsfCallCustomViewSearchResults(event) {
                
                const gsf_google_drm_items = gsfCustomGenerateProductItemsIds(event.data.searchResult.productVariants, 'google_drms');
                const gsf_google_drm_search_args = {
                    'send_to': 'AW-985140749',
                    'items': gsf_google_drm_items
                };
                gtag('event', 'view_search_results', gsf_google_drm_search_args);
                
            }

            function gsfCallCustomViewItemList(event) {
                
                const gsf_google_drm_items = gsfCustomGenerateProductItemsIds(event.data.collection.productVariants, 'google_drms');
                const gsf_google_drm_catalog_args = {
                    'send_to': 'AW-985140749',
                    'items': gsf_google_drm_items
                };
                gtag('event', 'view_item_list', gsf_google_drm_catalog_args);
                
            }

            function gsfCallCustomViewItem(event, gsf_fbp, gsf_fbc) {
                const gsf_line_item = event?.data?.productVariant;

                const gsf_variant_id = gsf_line_item?.id;
                const gsf_product_id = gsf_line_item?.product?.id;
                const gsf_product_title = gsf_line_item?.product?.title;
                const gsf_product_type = gsf_line_item?.product?.type;

                const gsf_item_price = gsf_line_item?.price?.amount
                const gsf_currency_code = gsf_line_item?.price?.currencyCode
                
                const gsf_google_drm_items = gsfCustomGenerateProductItemsIds([gsf_line_item], 'google_drm');
                const gsf_google_drm_product_args = {
                    'send_to': 'AW-985140749',
                    'value': gsf_item_price,
                    'currency': gsf_currency_code,
                    'items': gsf_google_drm_items
                };
                gtag('event', 'view_item', gsf_google_drm_product_args);
                
            }
            
        let product_added_to_cart_event_id = '';
        function gsfCustomInitTrackerJSCode () {
            let shopify_sa_p = '';
            
            gsf_analytics.subscribe('all_standard_events', async (event) => {
            
                let fbp = fbc = '';
                let gsf_checkout_token = gsf_init.data?.cart?.id;
                if (typeof gsf_browser !== 'undefined') {
                    
                    if (typeof(gsf_checkout_token) == 'undefined' || gsf_checkout_token == '') {
                        gsf_checkout_token = await gsf_browser.cookie.get('cart');
                    }
                }
                switch (event.name) {
                    
                    case 'search_submitted':
                        gsfCallCustomViewSearchResults(event);
                        break;
                    case 'collection_viewed':
                        gsfCallCustomViewItemList(event);
                        break;
                    case 'product_viewed':
                        gsfCallCustomViewItem(event, fbp, fbc);
                        break;
                    
                        case 'product_added_to_cart':
                            if (product_added_to_cart_event_id != event.id) {
                                product_added_to_cart_event_id = event.id;
                                gsfCallCustomAddToCart(event, fbp, fbc, gsf_checkout_token);
                            }
                            break;
                        
                        case 'checkout_started':
                            gsfCallCustomBeginCheckout(event, fbp, fbc);
                            break;
                        
                    case 'checkout_completed':
                        
                        gsfCallCustomPurchase(event, fbp, fbc, shopify_sa_p);
                        break;
                    
                }
            
            });
        }
        function gsfCustomInitTrackerJS () {
            var gsf_is_thank_you_page = true;
            
                gsf_is_thank_you_page = true;
                 
                if (gsf_is_thank_you_page) {
                var gsf_script = document.createElement('script');
                 gsf_script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-985140749'; 
                document.head.append(gsf_script);
                gtag('js', new Date());
                gtag('set', 'page_location', gsf_init.context.document.location.href);
                 gtag('config', 'AW-985140749' ); 
                }
                
        }

        function gsfCustomInitTrackerFunction () {
            gsfCustomInitTrackerJS();
            gsfCustomInitTrackerJSCode();
        }
        
        (function() {
            gsfCustomInitTrackerFunction();
        })();
         
        function gsfSetCookie(name, value, minutes) {
           var cookie = name + '=' + value + ';';
           if (minutes) {
             var expires = new Date(new Date().getTime() + parseInt(minutes) * 1000 * 60);
             cookie += 'expires=' + expires.toGMTString() + ';';
           } else {
             cookie += 'expires=0;';
           }
           cookie += 'path=/;';
           document.cookie = cookie;
         }
        function gsfGetCookie(cookie_name) {
           if (document.cookie.length > 0) {
             var cookie_start = document.cookie.indexOf(cookie_name + '=');
             if (cookie_start !== -1) {
               cookie_start = cookie_start + cookie_name.length + 1;
               var cookie_end = document.cookie.indexOf(';', cookie_start);
               if (cookie_end === -1) {
                 cookie_end = document.cookie.length;
               }
               return unescape(document.cookie.substring(cookie_start, cookie_end));
             }
           }
           return '';
        }
            }
            