import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
	private _url = "./phones/phones-json";

	constructor(private _http: Http) {

	}

	getPhones(filter?) {
		var url = this._url;

		if (filter && filter.phoneId) 
			url += "/" + filter.phoneId;
        else   
            url += "/phones.json";
        //console.log(url);
		return this._http.get(url)
				.map(res => res.json());
	}

    getPhone(id) {
        var url = this._url;
        
        url += "/" + id + ".json";
        //console.log(url);
        return this._http.get(url)
                .map(res => res.json());
    }
}