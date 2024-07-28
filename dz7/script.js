class Header{
    constructor(img, h4){
        this.src = img;
        this.h4 = h4;
        this.out = "";
    }
    render(id){
        this.out = `
            <img src="${this.src}" alt = "">
            <h4>${this.h4}</h4>
                `;
            document.querySelector(`#${id}`).innerHTML = this.out;
}
}

let f_obj = "https://cdn4.iconfinder.com/data/icons/kitchen-and-cooking-1-2/85/coffee_cup_espresso_drink-128.png";
let header = new Header(f_obj, "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году");
header.render("header");

let s_obj = "https://cdn0.iconfinder.com/data/icons/map-location-solid-style/91/Map_-_Location_Solid_Style_11-128.png";
let header2 = new Header(s_obj, "Нет географических границ");
header2.render("header2");

let t_obj = "https://cdn4.iconfinder.com/data/icons/top-search-7/128/_like_gesture_hand_rate_thumbs_up_feedback_review-128.png";
let header3 = new Header(t_obj, "Ассортимент");
header3.render("header3");

let frt_obj = "https://cdn1.iconfinder.com/data/icons/tiny-iconz/20/bell_alarm_notification-128.png";
let header4 = new Header(frt_obj, "Безопасность");
header4.render("header4");

let fft_obj = "https://cdn4.iconfinder.com/data/icons/real-estate-349/24/search_home_find_real_estate_agent_agency-128.png";
let header5 = new Header(fft_obj, "Сокращение расходов на аренду и персонал");
header5.render("header5");

let sx_obj = "https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-3/256/handshake-fill-128.png";
let header6 = new Header(sx_obj, "Партнерские отношения");
header6.render("header6");

let svn_obj = "https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami16-21-128.png";
let header7 = new Header(svn_obj, "Покупатель всегда на связи");
header7.render("header7");

let eg_obj = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/check_choice_square-128.png";
let header8 = new Header(eg_obj, "Комфортный выбор");
header8.render("header8");

let n_obj = "https://cdn1.iconfinder.com/data/icons/cryptocurrency-crypto-wallet/128/ic_card-128.png";
let header9 = new Header(n_obj, "Удобство платы");
header9.render("header9");