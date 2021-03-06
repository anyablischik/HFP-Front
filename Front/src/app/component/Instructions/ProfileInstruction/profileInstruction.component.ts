import {Component, Input, OnInit} from "@angular/core";
import {Instruction} from "../../../model/Instruction";
import {InstructionService} from "../../../service/InstructionService";
import {Router} from "@angular/router";
import {RatingService} from "../../../service/RatingService";
import {Rating} from "../../../model/Rating";
import {User} from "../../../model/user";
import {routing} from "../../app.routing";
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-instruction',
  templateUrl: './profileInstruction.component.html',
  styleUrls: ['./profileInstruction.component.css']
})

export class ProfileInstructionComponent implements OnInit{
  @Input() instruction: Instruction = new Instruction();
  @Input() isProfile: boolean;
  rating : Rating = new Rating();
  user : User;

  constructor(private instructionService: InstructionService,
              private router: Router,
              private ratingService: RatingService,
              private location: Location) {
  }

  ngOnInit() {
    this.ratingService.getRating(this.instruction.id).subscribe(res => {
      this.rating.value = res;
    });
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  deleteInstruction() {
    this.instructionService.deleteInstruction(this.instruction)
      .subscribe(resp => {
        if(location.pathname == '/profile/my-instructions') {
          location.href='/profile/my-instructions';
          return;
        }
        location.href='/profile';
        /*TODO check router navigate*/
      });
  }

  editInstruction() {
    this.router.navigate(['/profile/instruction', this.instruction.id])
  }

  viewInstruction() {
    /*TODO check router navigate*/
    location.href = '/instruction/' + this.instruction.id;
  }

  onRateChange(value) {
    this.rating.userValue = value;
    this.rating.instructionId = this.instruction.id;
    this.rating.userId = this.user.id;
    this.ratingService.updateRating(this.rating).subscribe(res =>
      {
        if(res.length > 7) {
          alert("Вы уже голосовали!");
        }

        let path = '';
        if(this.location.path() == '/profile') {
          path = '/profile';
        } else {
          path = '/sections/' + this.instruction.section.id;
        }
        location.href = path;
      });
  }

  switched(tag: string){
  }

}
