import { Component, OnInit } from '@angular/core';
import Pickr from '@simonwep/pickr';
import { RightPanelService } from '../../../shared/right-panel.service'
@Component({
    selector: 'app-sub-tools',
    templateUrl: './sub-tools.component.html',
    styleUrls: ['./sub-tools.component.css']
})
export class SubToolsComponent implements OnInit {
    public filtersArray = [];
    constructor(private rightPanelData: RightPanelService) { }

    ngOnInit() {
        const pickr = Pickr.create({
            el: '.color-picker',
            theme: 'classic', // or 'monolith', or 'nano'

            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],

            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
        const Backpickr = Pickr.create({
            el: '.bgGolor-picker',
            theme: 'classic', // or 'monolith', or 'nano'

            swatches: [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],

            components: {

                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: true,
                    hsva: true,
                    cmyk: true,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
    }
    // to bold text
    bold(event) {

        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            if (element.style.fontWeight == 'bold') {
                element.style.removeProperty('font-weight')
            }
            else {
                element.style.fontWeight = 'bold';
            }
        }
        catch{ }

    }
    // to italise
    italic() {

        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            if (element.style.fontStyle == "italic") {
                element.style.removeProperty('font-style')
            }
            else {
                element.style.fontStyle = 'italic';
            }
        }
        catch{ }


    }
    // line throug
    lineThrough() {

        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            if (element.style.textDecoration == 'underline' || element.style.textDecoration == 'line-through') {
                element.style.removeProperty('text-decoration')
            }
            else {
                element.style.textDecoration = 'line-through';
            }
        }
        catch{ }


    }
    // to underline
    underline() {

        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            if (element.style.textDecoration == 'underline' || element.style.textDecoration == 'line-through') {
                element.style.removeProperty('text-decoration')
            }
            else {
                element.style.textDecoration = 'underline';
            }
        }
        catch{ }

    }
    // text align 
    align(value) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            if (value == '') {
                element.style.removeProperty('text-align')
            }
            else {
                element.style.textAlign = value;
            }
        }
        catch{ }

    }
    // filters 
    // opacity
    opacity(event) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            element.style.opacity = event.value;
            console.log(element.style.opacity);
        }
        catch{ }

    }
    // brigthness
    brightness(event) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            this.filtersArray[0] = ' brightness(' + event.value + '%) ';
            element.style.filter = this.filtersArray.join('');
        }
        catch{ }

    }
    saturation(event) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            this.filtersArray[1] = 'saturate(' + event.value + '%)';
            element.style.filter = this.filtersArray.join('');
        }
        catch{ }

    }
    contrast(event) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            this.filtersArray[2] = 'contrast(' + event.value + '%)';
            element.style.filter = this.filtersArray.join('');
        }
        catch{ }

    }
    blur(event) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            this.filtersArray[4] = 'blur(' + event.value + 'px)';
            element.style.filter = this.filtersArray.join('');
        }
        catch{ }

    }
    sepia(event) {
        try {
            let element = <HTMLElement>this.rightPanelData.edditedElement;
            this.filtersArray[3] = 'sepia(' + event.value + '%)';
            element.style.filter = this.filtersArray.join('');
        }
        catch{ }

    }

}
