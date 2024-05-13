!async function () {
  const _0x5e7f62 = function () {
    let _0x36f471 = true;
    return function (_0x568716, _0xb9fc3b) {
      const _0x4b2314 = _0x36f471 ? function () {
        if (_0xb9fc3b) {
          const _0x238e2c = _0xb9fc3b.apply(_0x568716, arguments);
          _0xb9fc3b = null;
          return _0x238e2c;
        }
      } : function () {};
      _0x36f471 = false;
      return _0x4b2314;
    };
  }();
  const _0x46331c = function () {
    let _0x11cb2d = true;
    return function (_0x32f863, _0x54dc71) {
      const _0x4a2ab7 = _0x11cb2d ? function () {
        if (_0x54dc71) {
          const _0x1e44fe = _0x54dc71.apply(_0x32f863, arguments);
          _0x54dc71 = null;
          return _0x1e44fe;
        }
      } : function () {};
      _0x11cb2d = false;
      return _0x4a2ab7;
    };
  }();
  const _0x2a022e = function () {
    let _0x240445 = true;
    return function (_0xa29c2b, _0x3579c6) {
      const _0x5dd868 = _0x240445 ? function () {
        if (_0x3579c6) {
          const _0x52abd1 = _0x3579c6.apply(_0xa29c2b, arguments);
          _0x3579c6 = null;
          return _0x52abd1;
        }
      } : function () {};
      _0x240445 = false;
      return _0x5dd868;
    };
  }();
  location.href;
  setTimeout(() => {
    document.querySelector("#btnVerify")?.click();
}, 2000);
  if (location.search.startsWith("?APIKEY=") && location.href.startsWith("https://newconfig.nocaptchaai.com")) {
    let _0x784e11 = new URL(window.location.href);
    apikey = new URLSearchParams(_0x784e11.search).get("APIKEY");
    GM_setValue("apikey", new URLSearchParams(_0x784e11.search).get("APIKEY"));
    console.log(GM_getValue("apikey"));
    _0x1a3760("APIKEY Saved Success!!");
    return;
  }
  function _0x1a3760(_0x25c640, _0x4e579f) {
    const _0x314b09 = _0x5e7f62(this, function () {
      return _0x314b09.toString().search("(((.+)+)+)+$").toString().constructor(_0x314b09).search("(((.+)+)+)+$");
    });
    _0x314b09();
    (function () {
      _0x46331c(this, function () {
        const _0xb065f7 = new RegExp("function *\\( *\\)");
        const _0x6c2094 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
        const _0x40669a = _0x3033a4("init");
        if (!_0xb065f7.test(_0x40669a + "chain") || !_0x6c2094.test(_0x40669a + "input")) {
          _0x40669a('0');
        } else {
          _0x3033a4();
        }
      })();
    })();
    const _0x1c525b = _0x2a022e(this, function () {
      const _0x1621fb = function () {
        let _0x20d0b1;
        try {
          _0x20d0b1 = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x35ac7c) {
          _0x20d0b1 = window;
        }
        return _0x20d0b1;
      };
      const _0x39e99a = _0x1621fb();
      const _0x83f486 = _0x39e99a.console = _0x39e99a.console || {};
      const _0x539ab3 = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _0x382976 = 0; _0x382976 < _0x539ab3.length; _0x382976++) {
        const _0x380ba3 = _0x2a022e.constructor.prototype.bind(_0x2a022e);
        const _0x59b397 = _0x539ab3[_0x382976];
        const _0x4da05b = _0x83f486[_0x59b397] || _0x380ba3;
        _0x380ba3.__proto__ = _0x2a022e.bind(_0x2a022e);
        _0x380ba3.toString = _0x4da05b.toString.bind(_0x4da05b);
        _0x83f486[_0x59b397] = _0x380ba3;
      }
    });
    _0x1c525b();
    let _0x2688b1 = document.createElement("div");
    _0x2688b1.style = "position:fixed;top:10%;left:0;background:rgba(0,0,0,0.8);border-radius:4px;padding:16px;color:#fff;font:calc(14px+0.5vw) 'Arial',sans-serif;font-weight:bold;text-transform:uppercase;letter-spacing:1px;z-index:9999;transition:all 1s";
    _0x2688b1.innerHTML = '' + _0x25c640;
    document.body.appendChild(_0x2688b1);
    let _0x3c352a = document.createElement("style");
    _0x3c352a.innerHTML = "@keyframes slideIn{0%{transform:translateX(-100%);}100%{transform:translateX(0);}@keyframes slideOut{0%{transform:translateX(0);}100%{transform:translateX(100%)}";
    document.head.appendChild(_0x3c352a);
    _0x2688b1.style.animation = "slideIn 1s forwards";
    _0x2688b1.style.animationFillMode = "forwards";
    setTimeout(() => {
      _0x2688b1.style.animation = "slideOut 1s forwards";
      setTimeout(() => {
        document.body.removeChild(_0x2688b1);
      }, 1000);
    }, _0x4e579f || 3000);
  }
  if (!GM_getValue("apikey")) {
    _0x1a3760("APIKEY NOT SET - visit https://dash.nocaptchaai.com/config", 20000);
    await _0xa684aa(2000);
    if (!GM_getValue("urlopen")) {
      window.open("https://dash.nocaptchaai.com/config");
      GM_setValue("urlopen", 1);
    }
    return;
  }
  function _0x3d1682(_0x2c912f, _0x4b8e0f) {
    let _0x23b965 = [...document.querySelectorAll(".col-4")].filter(_0x31b984 => _0x31b984.getClientRects().length);
    let _0x2efdea = 0;
    let _0x45415b = null;
    for (let _0x1a5906 = 0; _0x1a5906 < _0x23b965.length; _0x1a5906++) {
      let _0x3e3181 = document.defaultView.getComputedStyle(_0x23b965[_0x1a5906], null);
      let _0x44feec = _0x3e3181.getPropertyValue("left");
      let _0x44c38c = _0x3e3181.getPropertyValue("top");
      let _0x25ca79 = _0x3e3181.getPropertyValue("z-index");
      if (_0x44feec == _0x2c912f + 'px' && _0x44c38c == _0x4b8e0f + 'px' && _0x25ca79 > _0x2efdea && "auto" != _0x25ca79) {
        _0x2efdea = _0x25ca79;
        _0x45415b = _0x23b965[_0x1a5906];
      }
    }
    return _0x45415b;
  }
  let _0x10a080 = [_0x3d1682(0, 0), _0x3d1682(110, 0), _0x3d1682(220, 0), _0x3d1682(0, 110), _0x3d1682(110, 110), _0x3d1682(220, 110), _0x3d1682(0, 220), _0x3d1682(110, 220), _0x3d1682(220, 220)];
  let _0xfa6b6d = function _0x21aa88() {
    let _0xf09a63 = [...document.querySelectorAll(".box-label")];
    let _0x24ce94 = 0;
    let _0x2717a2 = null;
    for (let _0x1c6d16 = 0; _0x1c6d16 < _0xf09a63.length; _0x1c6d16++) {
      let _0x100df9 = document.defaultView.getComputedStyle(_0xf09a63[_0x1c6d16], null).getPropertyValue("z-index");
      if (_0x100df9 > _0x24ce94 && "auto" !== _0x100df9) {
        _0x24ce94 = _0x100df9;
        _0x2717a2 = _0xf09a63[_0x1c6d16].innerText.replace(/\D/g, '');
      }
    }
    return _0x2717a2;
  }();
  let _0x358b06 = {};
  let _0x2c28ba = {};
  function _0xa684aa(_0x966df1) {
    return new Promise(_0x34e658 => setTimeout(_0x34e658, _0x966df1));
  }
  async function _0x41819f(_0x5f309d, _0x1a4d76 = "solve", _0x15c447 = "POST") {
    let _0x30ade3 = {
      'method': _0x15c447,
      'headers': {
        'Content-Type': "application/json",
        'apikey': GM_getValue("apikey"),
        'softid': "blssUserScript"
      }
    };
    if ("GET" !== _0x15c447) {
      _0x30ade3.body = JSON.stringify(_0x5f309d);
    }
    let _0x2df9c8 = await fetch("https://pro.nocaptchaai.com/" + _0x1a4d76, _0x30ade3);
    let _0x51127f = await _0x2df9c8.json();
    return _0x51127f;
  }
  async function _0x3670ec(_0x138ecc, _0x10955b = {}) {
    _0x10955b.bubbles = true;
    ["mouseover", "mousedown", "mouseup", "click"].forEach(_0x458763 => {
      let _0x4c91c0 = new MouseEvent(_0x458763, _0x10955b);
      _0x138ecc.dispatchEvent(_0x4c91c0);
    });
  }
  Array.from(_0x10a080).forEach((_0x587001, _0x5912d9) => {
    let _0x2db772 = _0x587001.querySelector("img");
    if (_0x2db772) {
      _0x2c28ba[_0x5912d9] = _0x2db772.src.replace(/^data:image\/(png|jpeg|gif);base64,/, '');
      _0x358b06[_0x5912d9] = _0x2db772.src;
    }
  });
  _0x41819f({
    'id': "morocco",
    'method': "ocr",
    'images': _0x2c28ba
  }).then(async _0x5cd348 => {
    if (Array.isArray(_0x5cd348 = _0x5cd348.solution)) {
      _0x5cd348.forEach(async (_0x574950, _0x23c491) => {
        let _0x523d60 = _0x358b06[_0x23c491];
        if (_0x574950.solution === _0xfa6b6d) {
          await _0xa684aa(300);
          _0x3670ec(_0x523d60);
        }
      });
    } else {
      Object.keys(_0x5cd348).forEach(async _0x3c502d => {
        let _0x25abc0 = _0x10a080[_0x3c502d].querySelector("img");
        await _0xa684aa(300);
        if (_0x5cd348[_0x3c502d] === _0xfa6b6d) {
          _0x3670ec(_0x25abc0);
        }
      });
      await _0xa684aa(1000);
      let _0x111acc = document.querySelector("#captchaForm > div.text-center.row.no-gutters.img-actions.p-2 > div:nth-child(3)");
      if (_0x111acc) {
        _0x3670ec(_0x111acc);
      }
    }
  });
}();
function _0x3033a4(_0x36dc2d) {
  function _0x43a200(_0x33fc6f) {
    if (typeof _0x33fc6f === "string") {
      return function (_0xd03819) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x33fc6f / _0x33fc6f).length !== 1 || _0x33fc6f % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x43a200(++_0x33fc6f);
  }
  try {
    if (_0x36dc2d) {
      return _0x43a200;
    } else {
      _0x43a200(0);
    }
  } catch (_0x229b8e) {}
}
(function () {
  let _0x2afb17;
  try {
    const _0x2f43fd = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2afb17 = _0x2f43fd();
  } catch (_0x7a01a1) {
    _0x2afb17 = window;
  }
  _0x2afb17.setInterval(_0x3033a4, 4000);
})();
