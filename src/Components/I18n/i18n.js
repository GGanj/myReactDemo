import React from "react"

import i18next from "i18next"

import en from "./en.json"
import zh from "./zh.json"

i18next.init({
    lng: "en",
    debug: true,
    resources: {
        en,
        zh
    }
}, () => {
    console.log("i18next, ", this);
});

export default class I18n extends React.Component {
    constructor(props) {
        super(props)
        this.handleLngChange = this.handleLngChange.bind(this);
    }
    handleLngChange(value) {
        i18next.changeLanguage(value.target.value, (err) => {
            // if(err) {
            //     return console.log("something went wrong", err);
            // } else {
            //     // this.forceUpdate();
            // }
        })
        this.forceUpdate();
    }
    render() {
        const enT1 = i18next.getFixedT("en", null, null);
        const enT2 = i18next.getFixedT("en", null, "prefix2");
        const zhT1 = i18next.getFixedT("zh");
        console.log("i18 language", i18next.language);
        console.log("i18 languages", i18next.languages);
        return (
            <div>
                <div>
                    <button value="en" onClick={this.handleLngChange}>EN</button>
                    <button value="zh-h" onClick={this.handleLngChange}>ZH</button>
                </div>
                enT1<br /> 
                {enT1("prefix1.key1")}
                <br /><br />
                enT2<br />
                {enT2("key2")}
                <br /><br />
                default<br />
                {i18next.t(['key2.subKey1', 'null'])}
                <br />
                {i18next.t("key3", "default value for missing key")}
                <br /><br />
                zhT1 <br />
                {zhT1('key1')}
                <br />
                {zhT1(['key2.subKey1', 'null'])}
            </div>
        )
    }
}