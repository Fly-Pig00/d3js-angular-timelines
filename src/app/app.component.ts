import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private width: number = window.innerWidth * 3 / 4 - 150;
    private lineNum: number = 0;
    ngOnInit() {
        this.lineNum = Math.floor(this.width / 50);
		console.log(this.lineNum);
	}
    title = 'D3.js with Angular!';

    examples = [
        {
            title: 'Line Chart',
            route: '/line-chart'
        },
        {
            title: 'Multi Series Line Chart',
            route: '/multi-series'
        },
        {
            title: 'Bar Chart',
            route: '/bar-chart'
        },
        {
            title: 'Stacked Bar Chart',
            route: '/stacked-bar-chart'
        },
        {
            title: 'Brush Zoom',
            route: '/'
        },
        {
            title: 'Pie Chart',
            route: '/pie-chart'
        },
        {
            title: 'Donut chart',
            route: '/donut-chart'
        },
    ];

}
