
import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public data:any[] = []
  public labels:any[] = []
  public dataSource = {
    datasets: [
        {
            data: this.data,
            backgroundColor: [
                '#FFD1DC',
                '#AEC6CF',
                '#B7E4C7',
                '#836953',
                '#FFF1A7',
                '#FFB997',
                '#98FF98',
                '#D7A9E3',
                '#FFF4E3',
                '#A2D8D8',
                '#FF6B6B'
            ]
        }
    ],
    labels: this.labels
};

  constructor(private http: HttpClient) {  }

  createC() {
    //var ctx = document.getElementById('myChart').getContext('2d');
    var ctx = document.getElementById('Chart') as HTMLCanvasElement;
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
  }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createC();
    });
  }

}

