class AdvancedParagraph {
    static get toolbox() {
        return {
            title: 'Advance Paragraph',
            icon: '<svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><rect fill="white" fill-opacity="0.01" height="48" width="48"/><path d="M6 9H42" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path d="M6 19H42" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path d="M6 29H24" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path d="M6 39H16" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path d="M24 39C24 39 34.2386 39 37 39C39.7614 39 42 36.7614 42 34C42 31.2386 39.7614 29 37 29C35.7115 29 32 29 32 29M24 39L28 35M24 39L28 43" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></svg>'
        };
    }

    constructor({data}) {
        this.data = {
            text: data.text,
            textAlignment: data.textAlignment ? data.textAlignment : 'right',
            direction: data.direction ? data.direction : 'rtl',
        }

        this.wrapper = undefined;
        this.settingsWrapper = undefined;
        this.settings = [{
            name: 'LeftAlign',
            icon: `<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="17" x2="3" y1="10" y2="10"/><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="14" y2="14"/><line x1="17" x2="3" y1="18" y2="18"/></svg>`
        }, {
            name: 'CenterAlign',
            icon: `<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="10" y2="10"/><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="14" y2="14"/><line x1="18" x2="6" y1="18" y2="18"/></svg>`
        }, {
            name: 'RightAlign',
            icon: `<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="7" y1="10" y2="10"/><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="14" y2="14"/><line x1="21" x2="7" y1="18" y2="18"/></svg>`
        }, {
            name: 'RTL',
            icon: '<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"/><path d="M14 15v-11"/><path d="M10 15v-11"/><path d="M5 19h14"/><path d="M7 21l-2 -2l2 -2"/></svg>'
        }, {
            name: 'spam', icon: ''
        }, {
            name: 'LTR',
            icon: '<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M5 19h14"/><path d="M17 21l2 -2l-2 -2"/><path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"/><path d="M14 15v-11"/><path d="M10 15v-11"/></svg>'
        }];
    }

    render() {
        const Par = document.createElement('div');
        Par.classList.add('AdvancedParagraph-editorjs');
        Par.classList.add('ce-paragraph');
        Par.classList.add('cdx-block');
        Par.style.textAlignment = this.data.textAlignment;
        Par.setAttribute('onInput', 'this.parentNode.dataset.replicatedValue = this.value');
        Par.contentEditable = 'true';
        if (this.data.text) {
            Par.innerHTML = this.data.text;
        }
        Par.classList.add(this.data.textAlignment);
        Par.classList.add(this.data.direction);

        this.wrapper = Par;
        return Par;
    }

    save(blockContent) {
        this.data = {
            text: blockContent.innerHTML, textAlignment: this.data.textAlignment, direction: this.data.direction
        };
        return Object.assign(this.data, {
            text: blockContent.innerHTML
        });
    }

    validate(savedData) {
        if (!savedData.text.trim()) {
            return false;
        }
        return true;
    }

    renderSettings() {
        const settings = [{
            name: 'LeftAlign',
            icon: `<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="17" x2="3" y1="10" y2="10"/><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="14" y2="14"/><line x1="17" x2="3" y1="18" y2="18"/></svg>`
        }, {
            name: 'CenterAlign',
            icon: `<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="10" y2="10"/><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="14" y2="14"/><line x1="18" x2="6" y1="18" y2="18"/></svg>`
        }, {
            name: 'RightAlign',
            icon: `<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="7" y1="10" y2="10"/><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="14" y2="14"/><line x1="21" x2="7" y1="18" y2="18"/></svg>`
        }, {
            name: 'RTL',
            icon: '<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"/><path d="M14 15v-11"/><path d="M10 15v-11"/><path d="M5 19h14"/><path d="M7 21l-2 -2l2 -2"/></svg>'
        }, {
            name: 'spam', icon: ''
        }, {
            name: 'LTR',
            icon: '<svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M5 19h14"/><path d="M17 21l2 -2l-2 -2"/><path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5"/><path d="M14 15v-11"/><path d="M10 15v-11"/></svg>'
        }];
        const wrapper = document.createElement('div');
        this.settingsWrapper = wrapper;
        settings.forEach(tune => {
            let button = document.createElement('div');
            button.classList.add('cdx-settings-button');
            button.classList.add(tune.name);
            button.innerHTML = tune.icon;
            wrapper.appendChild(button);

            if (tune.name === 'RightAlign' && this.data.textAlignment !== 'left' && this.data.textAlignment !== 'center') {
                button.classList.add('cdx-settings-button--active');
                this.data['RightAlign'] = true;
            } else if (tune.name === 'LeftAlign' && this.data.textAlignment === 'left') {
                button.classList.add('cdx-settings-button--active');
            } else if (tune.name === 'CenterAlign' && this.data.textAlignment === 'center') {
                button.classList.add('cdx-settings-button--active');
            }

            if (tune.name === 'RTL' && this.data.direction === 'rtl') {
                button.classList.add('cdx-settings-button--active')
            } else if (tune.name === 'LTR' && this.data.direction === 'ltr') {
                button.classList.add('cdx-settings-button--active');
            }

            button.addEventListener('click', (button) => {
                button.currentTarget.classList.add('cdx-settings-button--active');
                this._toggleTune(tune.name);
            });
        });
        return wrapper;
    }

    _toggleTune(tune) {
        if (tune === 'LeftAlign') {
            this.settingsWrapper.querySelector('.RightAlign').classList.remove('cdx-settings-button--active');
            this.settingsWrapper.querySelector('.CenterAlign').classList.remove('cdx-settings-button--active');
        } else if (tune === 'RightAlign') {
            this.settingsWrapper.querySelector('.LeftAlign').classList.remove('cdx-settings-button--active');
            this.settingsWrapper.querySelector('.CenterAlign').classList.remove('cdx-settings-button--active');
        } else if (tune === 'CenterAlign') {
            this.settingsWrapper.querySelector('.LeftAlign').classList.remove('cdx-settings-button--active');
            this.settingsWrapper.querySelector('.RightAlign').classList.remove('cdx-settings-button--active');
        }
        this.data[tune] = true;
        if (tune === 'LeftAlign') {
            this.data.textAlignment = 'left';
        } else if (tune === 'RightAlign') {
            this.data.textAlignment = 'right';
        } else if (tune === 'CenterAlign') {
            this.data.textAlignment = 'center';
        }

        if (tune === 'RTL') {
            this.settingsWrapper.querySelector('.LTR').classList.remove('cdx-settings-button--active');
            this.data.direction = 'rtl';
        } else if (tune === 'LTR') {
            this.settingsWrapper.querySelector('.RTL').classList.remove('cdx-settings-button--active');
            this.data.direction = 'ltr';
        }

        this._acceptTuneView();
    }

    _acceptTuneView() {
        this.settings.forEach(() => {
            this.wrapper.classList.remove('left', 'right', 'center');
            this.wrapper.classList.add(this.data.textAlignment);
            this.wrapper.classList.remove('rtl', 'ltr');
            this.wrapper.classList.add(this.data.direction);
        });
    }

    function

    static AdvancedParagraphParser(block) {
        return `<p style="direction: ` + block.data.direction + `; text-align: ` + block.data.textAlignment + `"> ${block.data.text} </p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let advancedParagraphStyle = `
    <style id="@taiwbi/advancedParagraph-style">
        .AdvancedParagraph-editorjs {
            direction: rtl;
        }
        .AdvancedParagraph-editorjs:focus, .AdvancedParagraph-editorjs:hover {
            outline: none;
        }
        .AdvancedParagraph-editorjs.left {
            text-align: left;
        }
        .AdvancedParagraph-editorjs.center {
            text-align: center;
        }
        .AdvancedParagraph-editorjs.right {
            text-align: right;
        }
        .AdvancedParagraph-editorjs.rtl {
            direction: rtl;
        }
        .AdvancedParagraph-editorjs.ltr {
            direction: ltr;
        }
    </style>
`;
    let head = document.head || document.getElementsByTagName('head')[0];
    head.insertAdjacentHTML("beforeend", advancedParagraphStyle);
})

module.exports = AdvancedParagraph;