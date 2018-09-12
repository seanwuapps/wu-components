/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuSpinner {
    constructor() {
        this.type = 'circle';
        this.color = 'currentColor';
    }
    render() {
        switch (this.type) {
            case 'circle':
                return (h("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "40px", height: "40px", viewBox: "0 0 50 50", style: "enable-background:new 0 0 50 50;", xmlSpace: "preserve" },
                    h("path", { fill: this.color, d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z", transform: "rotate(360 -4.05439e-8 -4.05439e-8)" },
                        h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))));
            case 'bars':
                return (h("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "24px", height: "30px", viewBox: "0 0 24 30", style: "enable-background:new 0 0 50 50;", xmlSpace: "preserve" },
                    h("rect", { x: "0", y: "5.83333", width: "4", height: "18.3333", fill: this.color, opacity: "0.2" },
                        h("animate", { attributeName: "opacity", attributeType: "XML", values: "0.2; 1; .2", begin: "0s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "height", attributeType: "XML", values: "10; 20; 10", begin: "0s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "y", attributeType: "XML", values: "10; 5; 10", begin: "0s", dur: "0.6s", repeatCount: "indefinite" })),
                    h("rect", { x: "8", y: "6.66667", width: "4", height: "16.6667", fill: this.color, opacity: "0.2" },
                        h("animate", { attributeName: "opacity", attributeType: "XML", values: "0.2; 1; .2", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "height", attributeType: "XML", values: "10; 20; 10", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "y", attributeType: "XML", values: "10; 5; 10", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" })),
                    h("rect", { x: "16", y: "9.16667", width: "4", height: "11.6667", fill: this.color, opacity: "0.2" },
                        h("animate", { attributeName: "opacity", attributeType: "XML", values: "0.2; 1; .2", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "height", attributeType: "XML", values: "10; 20; 10", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "y", attributeType: "XML", values: "10; 5; 10", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" }))));
            case 'ring':
                return (h("svg", { viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: this.color },
                    h("g", { fill: "none", "fill-rule": "evenodd", "stroke-width": "2" },
                        h("circle", { cx: "22", cy: "22", r: "1" },
                            h("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
                            h("animate", { attributeName: "stroke-opacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })),
                        h("circle", { cx: "22", cy: "22", r: "1" },
                            h("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
                            h("animate", { attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })))));
            case 'ios':
                return (h("svg", { class: "spinner-ios", xmlns: "http://www.w3.org/2000/svg", width: "27", height: "27", viewBox: "0 0 27 27", fill: this.color },
                    h("path", { d: "M18.696,10.5c-0.275-0.479-0.113-1.09,0.365-1.367l4.759-2.751c0.482-0.273,1.095-0.11,1.37,0.368 c0.276,0.479,0.115,1.092-0.364,1.364l-4.764,2.751C19.583,11.141,18.973,10.977,18.696,10.5z" }),
                    h("path", { d: "M16.133,6.938l2.75-4.765c0.276-0.478,0.889-0.643,1.367-0.366c0.479,0.276,0.641,0.886,0.365,1.366l-2.748,4.762 C17.591,8.415,16.979,8.58,16.5,8.303C16.021,8.027,15.856,7.414,16.133,6.938z" }),
                    h("path", { d: "M13.499,7.5c-0.552,0-1-0.448-1-1.001V1c0-0.554,0.448-1,1-1c0.554,0,1.003,0.447,1.003,1v5.499 C14.5,7.053,14.053,7.5,13.499,7.5z" }),
                    h("path", { d: "M8.303,10.5c-0.277,0.477-0.888,0.641-1.365,0.365L2.175,8.114C1.697,7.842,1.532,7.229,1.808,6.75 c0.277-0.479,0.89-0.642,1.367-0.368l4.762,2.751C8.416,9.41,8.58,10.021,8.303,10.5z" }),
                    h("path", { d: "M9.133,7.937l-2.75-4.763c-0.276-0.48-0.111-1.09,0.365-1.366c0.479-0.277,1.09-0.114,1.367,0.366l2.75,4.765 c0.274,0.476,0.112,1.088-0.367,1.364C10.021,8.581,9.409,8.415,9.133,7.937z" }),
                    h("path", { d: "M6.499,14.5H1c-0.554,0-1-0.448-1-1c0-0.554,0.447-1.001,1-1.001h5.499c0.552,0,1.001,0.448,1.001,1.001 C7.5,14.052,7.052,14.5,6.499,14.5z" }),
                    h("path", { d: "M8.303,16.502c0.277,0.478,0.113,1.088-0.365,1.366l-4.762,2.749c-0.478,0.273-1.091,0.112-1.368-0.366 c-0.276-0.479-0.111-1.089,0.367-1.368l4.762-2.748C7.415,15.856,8.026,16.021,8.303,16.502z" }),
                    h("path", { d: "M10.866,20.062l-2.75,4.767c-0.277,0.475-0.89,0.639-1.367,0.362c-0.477-0.277-0.642-0.886-0.365-1.365l2.75-4.764 c0.277-0.477,0.888-0.638,1.366-0.365C10.978,18.974,11.141,19.585,10.866,20.062z" }),
                    h("path", { d: "M13.499,19.502c0.554,0,1.003,0.448,1.003,1.002v5.498c0,0.55-0.448,0.999-1.003,0.999c-0.552,0-1-0.447-1-0.999v-5.498 C12.499,19.95,12.946,19.502,13.499,19.502z" }),
                    h("path", { d: "M17.867,19.062l2.748,4.764c0.275,0.479,0.113,1.088-0.365,1.365c-0.479,0.276-1.091,0.112-1.367-0.362l-2.75-4.767 c-0.276-0.477-0.111-1.088,0.367-1.365C16.979,18.424,17.591,18.585,17.867,19.062z" }),
                    h("path", { d: "M18.696,16.502c0.276-0.48,0.887-0.646,1.365-0.367l4.765,2.748c0.479,0.279,0.64,0.889,0.364,1.368 c-0.275,0.479-0.888,0.64-1.37,0.366l-4.759-2.749C18.583,17.59,18.421,16.979,18.696,16.502z" }),
                    h("path", { d: "M25.998,12.499h-5.501c-0.552,0-1.001,0.448-1.001,1.001c0,0.552,0.447,1,1.001,1h5.501c0.554,0,1.002-0.448,1.002-1 C27,12.946,26.552,12.499,25.998,12.499z" })));
            case 'dots':
                return (h("svg", { version: "1.1", id: "L4", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 70 100" },
                    h("circle", { fill: this.color, stroke: "none", cx: "6", cy: "50", r: "6" },
                        h("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.1" })),
                    h("circle", { fill: this.color, stroke: "none", cx: "26", cy: "50", r: "6" },
                        h("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.2" })),
                    h("circle", { fill: this.color, stroke: "none", cx: "46", cy: "50", r: "6" },
                        h("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.3" }))));
            default:
                return (null);
        }
    }
    static get is() { return "wu-spinner"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "wu-spinner svg {\n  width: 2em;\n  height: 2em; }\n  wu-spinner svg.spinner-android {\n    -webkit-animation: rotate 2s linear infinite;\n            animation: rotate 2s linear infinite; }\n    wu-spinner svg.spinner-android .path {\n      stroke-linecap: round;\n      -webkit-animation: dash 1.5s ease-in-out infinite;\n              animation: dash 1.5s ease-in-out infinite; }\n  wu-spinner svg.spinner-ios {\n    -webkit-animation: iosIntro .6s;\n            animation: iosIntro .6s; }\n    wu-spinner svg.spinner-ios path:nth-of-type(1) {\n      -webkit-animation: pulse 1s infinite linear;\n              animation: pulse 1s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(2) {\n      -webkit-animation: pulse 1s -.083s infinite linear;\n              animation: pulse 1s -.083s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(3) {\n      -webkit-animation: pulse 1s -.166s infinite linear;\n              animation: pulse 1s -.166s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(4) {\n      -webkit-animation: pulse 1s -.249s infinite linear;\n              animation: pulse 1s -.249s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(5) {\n      -webkit-animation: pulse 1s -.332s infinite linear;\n              animation: pulse 1s -.332s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(6) {\n      -webkit-animation: pulse 1s -.415s infinite linear;\n              animation: pulse 1s -.415s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(7) {\n      -webkit-animation: pulse 1s -.498s infinite linear;\n              animation: pulse 1s -.498s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(8) {\n      -webkit-animation: pulse 1s -.581s infinite linear;\n              animation: pulse 1s -.581s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(9) {\n      -webkit-animation: pulse 1s -.664s infinite linear;\n              animation: pulse 1s -.664s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(10) {\n      -webkit-animation: pulse 1s -.747s infinite linear;\n              animation: pulse 1s -.747s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(11) {\n      -webkit-animation: pulse 1s -.83s infinite linear;\n              animation: pulse 1s -.83s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(12) {\n      -webkit-animation: pulse 1s -.913s infinite linear;\n              animation: pulse 1s -.913s infinite linear; }\n\n\@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n\@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n\@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n\@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n\@-webkit-keyframes pulse {\n  50% {\n    fill-opacity: .2; }\n  to {\n    fill-opacity: 1; } }\n\n\@keyframes pulse {\n  50% {\n    fill-opacity: .2; }\n  to {\n    fill-opacity: 1; } }\n\n\@-webkit-keyframes iosIntro {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n\@keyframes iosIntro {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }"; }
}

export { WuSpinner };
