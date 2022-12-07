var form = document.querySelector("form");
var textarea = document.createElement("textarea");
addHandleTextarea();

/**
 * chatGptの左側のナビゲーションバーを削除するためのコード
 */

// 小要素にnavがある親要素のdivを削除する
var nav = document.querySelector("nav");
if (nav) {
  nav.parentElement.parentElement.parentElement.remove();
}

// classがmd\:pl-52の要素のpadding-leftを0にする
var div = document.querySelector("div.md\\:pl-52");
if (div) {
  div.style.paddingLeft = "0";
}

/**
 * form属性の上にtextareaを追加する<textarea placeholder="This is an ChatGpt Handler" rows="20" name="comment[text]" id="chat-gpt-handler" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
 */
function addHandleTextarea() {
  textarea.setAttribute("placeholder", "This is an ChatGpt Handler.");
  textarea.setAttribute("rows", "20");
  textarea.setAttribute("name", "comment[text]");
  textarea.setAttribute("id", "chat-gpt-handler");
  textarea.setAttribute("cols", "40");
  textarea.setAttribute("class", "ui-autocomplete-input");
  textarea.setAttribute("autocomplete", "off");
  textarea.setAttribute("role", "textbox");
  textarea.setAttribute("aria-autocomplete", "list");
  textarea.setAttribute("aria-haspopup", "true");
  form.parentElement.insertBefore(textarea, form);
}

/**
 *
 */

// idがchat-gpt-handlerのtextareaでcmd+enterが押されたら入力されている内容をすべてコピーして, textareaを空にする。その後, data-idがrootのtextareaにフォーカスを当てて, ペーストする。
textarea.addEventListener("keydown", function (e) {
  if (e.keyCode === 13 && e.metaKey) {
    copyText();
    textarea.value = "";
    document.querySelector("textarea[data-id='root']").focus();
    //0.5秒待ってからペーストする
    setTimeout(function () {
      document.execCommand("paste");
    }, 500);
  }
});

function copyText() {
  // textarea要素を取得する
  var textarea = document.getElementById("chat-gpt-handler");

  // textarea要素の内容をクリップボードにコピーする
  textarea.select();
  document.execCommand("copy");
}
