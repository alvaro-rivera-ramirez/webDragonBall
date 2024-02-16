import { Component, OnInit } from '@angular/core';
import { configOption } from 'src/app/shared/interface/select-options.interface';
import { Character, CharacterFilter, Pagination} from '../../interface/character.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'dbz-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css'],
})
export class ListCharacterComponent implements OnInit {
  public characters: Character[] | [] = [];
  public pagination?:Pagination;
  public filters: CharacterFilter={};
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.filters={
      page:1,
      limit:8,
      affiliation:'',
      race:'',
      name:'',
      gender:'',
    }
    this.searchCharacters();
  }
  public optionsGender: configOption[] = [
    { value: '', name: 'All' },
    {
      value: 'Male',
      name: 'Male',
    },
    {
      value: 'Female',
      name: 'Female',
    },
  ];

  public optionsRace: configOption[] = [
    {
      value: '',
      name: 'All',
    },
    {
      value: 'Saiyan',
      name: 'Saiyan',
    },
    {
      value: 'Namekian',
      name: 'Namekian',
    },
    {
      value: 'Human',
      name: 'Human',
    },
    {
      value: 'Majin',
      name: 'Majin',
    },
    {
      value: 'Frieza Race',
      name: 'Frieza Race',
    },
    {
      value: 'Jiren Race',
      name: 'Jiren Race',
    },
    {
      value: 'Android',
      name: 'Android',
    },
    {
      value: 'God',
      name: 'God',
    },
    {
      value: 'Angel',
      name: 'Angel',
    },
    {
      value: 'Evil',
      name: 'Evil',
    },
    {
      value: 'Nucleico benigno',
      name: 'Nucleico benigno',
    },
    {
      value: 'Nucleico',
      name: 'Nucleico',
    },
  ];

  public optionsAffiliation: configOption[] = [
    { value: '', name: 'All' },
    { value: 'Z Fighter', name: 'Z Fighter' },
    { value: 'Red Ribbon Army', name: 'Red Ribbon Army' },
    { value: 'Namekian Warrior', name: 'Namekian Warrior' },
    { value: 'Freelancer', name: 'Freelancer' },
    { value: 'Army of Frieza', name: 'Army of Frieza' },
    { value: 'Other', name: 'Other' },
    { value: 'Pride Troopers', name: 'Pride Troopers' },
    { value: 'Assistant of Vermoud', name: 'Assistant of Vermoud' },
    { value: 'Assistant of Beerus', name: 'Assistant of Beerus' },
    { value: 'Villain', name: 'Villain' },
  ];


  searchCharacters(){
    this.characterService.getCharacters(this.filters).subscribe((res) => {

      if(Array.isArray(res) && res.length==0){
        this.characters=[];
        this.pagination=undefined;
        return;
      }
      if ('items' in res) {
        this.characters = res.items as Character[];
        this.pagination=res.meta;
      }
    });
  }
  searchByFilters(keyFilter:string,valueFilter:string|number){
    this.filters[keyFilter]=valueFilter;
    this.searchCharacters();
  }

  searchByPagination(){

  }
}
