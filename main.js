//構文モードや生成モードでランダム性を分けたい　済
//ちんぽが流れたら特殊演出を流したい 済
//課題：変数や定数の使い分けや定義名をしっかり

//別jsファイルから単語配列をimport
import {words,words2,emotions} from "./wacca_syntax.js";
//htmlに構文を表示するため
function btn_click(word){
    console.log(word);
    let wacca = document.getElementById("wacca");
    wacca.innerHTML = ("afterend", `<div id="wacca">${word}</div>`);
}

//"生成する"ボタンがクリックされたら発火
document.getElementById("btn_check").onclick = function buttonClick() {
    let random_check = document.getElementById("ran_check");
    let CSSstop = document.getElementById("img-wacca");
    let btn_dis = document.getElementById("btn_check");
    //チェックボックス"random mode"の状態をtrueかfalseで出力
    console.log(random_check.checked);
    //チェックボックスの状態がtrueだったら処理に進む
    if (random_check.checked == true){
        //構文呼び出し用のランダム数
        let ran_num = Math.floor(Math.random() * words.length);
        let ran2_num = Math.floor(Math.random() * words2.length);
        //構文ランダム用のランダム数
        let shift_num = Math.floor(Math.random() * emotions.length);
        //生成された数字を元に別jsファイルの配列呼び出し?
        let ran_word = `${words[ran_num]}の${words2[ran2_num]}${emotions[shift_num]}すぎだろ！`;
        //ティーダのチ*ポが気持ちよかったら処理に進む
        if(ran_word == "ティーダのチ*ポ気持ちよすぎだろ！"){
            //ボタンを不活性化
            btn_dis.disabled = true;
            CSSstop.classList.add("wacca");
            btn_click(ran_word);
            //3秒経つとボタンが活性化
            setTimeout(function() {btn_dis.disabled = false;}, 3000);
            setTimeout(function() {CSSstop.classList.remove("wacca");}, 3000);
        //気持ち良くなかったらこっち
        }else{
            btn_dis.disabled = true;
            let fix_ran_word = ran_word.replace("気持ちよくないすぎだろ！", "気持ちよくない")
            btn_click(fix_ran_word);
            setTimeout(function() {btn_dis.disabled = false;}, 100);
        }
    //チェックボックスの状態がtrue以外だったら処理に進む
    }else{
        let ran_num = Math.floor(Math.random() * words.length);
        let nor_word = `${words[ran_num]}の${words2[ran_num]}${emotions[ran_num]}すぎだろ！`;
        btn_dis.disabled = true;
        btn_click(nor_word);
        setTimeout(function() {btn_dis.disabled = false;}, 100);
    }
}