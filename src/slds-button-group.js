import { bindable} from 'aurelia-framework';

export class SldsButtonGroup{
	@bindable labels = [];


	onClick(label){
		if (label.selected){
			label.selected = false;
		}
		else{
			label.selected = true;
		}
	}
}
