import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe.', './Recipe_logo.jpeg'),
    new Recipe('Test Recipe', 'This is a test recipe.', './Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
