import {Pipe,PipeTransform} from 'angular2/core';

@Pipe ({ name: 'checkmark' })
export class CheckmarkPipe implements PipeTransform {
    transform(value: string, args: string[]) {
        return value ? '\u2713' : '\u2718';
    }   
}