import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
	private _url = "app/phones/phones-json";

	constructor(private _http: Http) {

	}

	getPhones(filter?) {
		var url = this._url;

		if (filter && filter.phoneId) 
			url += "/" + filter.phoneId;
        else   
            url += "/phones.json";

		return this._http.get(url)
				.map(res => res.json());
	}

}