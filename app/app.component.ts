import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{ title }} and {{ hero.name }} {{ hero.id }}</h1>'
})
export class AppComponent {
    title = "Tour of Heroes";
    hero = "Windstorm";


    hero: Hero = {
        id: 1337,
        name: 'Windstorm'
    };
}

export class Hero {
    id: number;
    name: string;
}
