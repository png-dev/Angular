import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterEducation'
})
export class FilterEducationPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(
            it => {
                return it.title.toLocaleString().includes(searchText);
            });
    }

}
