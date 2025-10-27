adk = "animation-duration";
bvk = "backface-visibility";
atfk = "animation-timing-function";
tok = "transform-origin";
generateCSS = ents => {
    return ents.map( ([name,props]) => {
        var rules = Object.entries(props).map( ([prop,value]) => {
            if (prop === 'animationName')
                return `animation-name:${value};`;
            return `--${prop}:${value};`
        }
        ).join(' ');
        return `.az_anim_hov.${name}:hover { ${rules} }\n.${name}:not(.az_anim_hov) { ${rules} }`
    }
    ).join('\n')
}
findEls('[class*="delay_"]').forEach(el => {
    el.classList.forEach(cls => {
        m = cls.match(/^delay_(\d+(\.\d+)?)$/);
        if (m) {
            el.style.setProperty('animation-delay', `calc(var(--delay)*${parseFloat(m[1])})`)
        }
    }
    )
}
);
findEls('[class*="repeat_"]').forEach(el => {
    el.classList.forEach(cls => {
        m = cls.match(/^repeat_(\d+(\.\d+)?)$/);
        if (m) {
            el.style.setProperty('animation-iteration-count', `calc(var(--repeat)*${parseFloat(m[1])})`)
        }
    }
    )
}
);
findEls('[class*="dur_"], [class*="speed_"]').forEach(el => {
    el.classList.forEach(cls => {
        m = cls.match(/^(dur|speed)_(\d+(\.\d+)?)$/);
        if (m) {
            el.style.setProperty(adk, `calc(var(--dur)*${parseFloat(m[2])})`)
        }
    }
    )
}
);
o1 = ['blink_txt', 'blink_bg', 'blink_b_shadow', 'cube_rotate', 'blink_brdr_r', 'beatFade', "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "fadeOutTopLeft", "fadeOutTopRight", "fadeOutBottomRight", "fadeOutBottomLeft", "flipInX", "flipInY", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "backInDown", "backInLeft", "backInRight", "backInUp", "backOutDown", "backOutLeft", "backOutRight", "backOutUp", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeInTopLeft", "fadeInTopRight", "fadeInBottomLeft", "fadeInBottomRight", "rotateOutUpLeft", "rotateOutUpRight", "bounce", "jackInTheBox", "rollIn", "rollOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "slideInDown", "slideInLeft", "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp", "slideThroughLeft", "slideThroughRight", "slideThroughUp", "slideThroughDown", "scaleIn", "gradientShift", "fadeEffect", "spin", "spinBg"].reduce( (obj, animationName) => {
    obj[animationName] = {
        animationName
    };
    return obj
}
, {});
o2 = Object.fromEntries(Object.entries({
    flip: {
        bvk: "visible"
    },
    flipOutY: {
        bvk: "visible!important",
        adk: "calc(var(--dur)*0.75)"
    },
    flipOutX: {
        bvk: "visible!important",
        adk: "calc(var(--dur)*0.75)"
    },
    heartBeat: {
        atfk: "ease-in-out",
        adk: "calc(var(--dur)*1.3)"
    },
    bounceOut: {
        adk: "calc(var(--dur)*0.75)"
    },
    hinge: {
        tok: "top left",
        adk: "calc(var(--dur)*2)"
    },
    lightSpeedInRight: {
        atfk: "ease-out"
    },
    lightSpeedInLeft: {
        atfk: "ease-out"
    },
    lightSpeedOutRight: {
        atfk: "ease-in"
    },
    lightSpeedOutLeft: {
        atfk: "ease-in"
    },
    rotateIn: {
        tok: "center"
    },
    rotateInDownLeft: {
        tok: "left bottom"
    },
    rotateInDownRight: {
        tok: "right bottom"
    },
    rotateInUpLeft: {
        tok: "left bottom"
    },
    rotateInUpRight: {
        tok: "right bottom"
    },
    rotateOut: {
        tok: "center"
    },
    rotateOutDownLeft: {
        tok: "left bottom"
    },
    rotateOutDownRight: {
        tok: "right bottom"
    }
}).map( ([name,props]) => [name, {
    ...props,
    animationName: name
}]));
ents = Object.entries({
    ...o1,
    ...o2
});
var aS = crEl('style');
aS.id = "az_anim_style";
aS.textContent = generateCSS(ents);
doc.head.appendChild(aS);
