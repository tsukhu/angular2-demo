import {Pipe,PipeTransform} from 'angular2/core';
import {Phone} from './phone';

@Pipe ({ 
    name: 'search' 
})
export class SearchPipe implements PipeTransform {
    transform(value,args: string[]) {
         if(value && args[0] === 'searchTerm'){
             console.log(args[0]);
             if (args[1] != null) 
                return value.filter((item) =>
                        item.name.startsWith(args[1]))
         }
        return value;
    }   
}