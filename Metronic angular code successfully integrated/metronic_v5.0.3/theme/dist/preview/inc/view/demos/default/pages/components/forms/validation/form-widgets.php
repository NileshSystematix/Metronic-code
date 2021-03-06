<!--begin::Portlet-->
<div class="m-portlet">
	<div class="m-portlet__head">
		<div class="m-portlet__head-caption">
			<div class="m-portlet__head-title">
				<h3 class="m-portlet__head-text">
					Form Widgets Validation Examples
				</h3>
			</div>
		</div>
	</div>
	<!--begin::Form-->
	<form class="m-form m-form--fit m-form--label-align-right" id="m_form_1">
		<div class="m-portlet__body">
			<div class="m-form__content">
				<div class="m-alert m-alert--icon alert alert-danger m--hide" role="alert" id="m_form_1_msg">
					<div class="m-alert__icon">
						<i class="la la-warning"></i>
					</div>
					<div class="m-alert__text">
					  	Oh snap! Change a few things up and try submitting again.
					</div>	
					<div class="m-alert__close">
						<button type="button" class="close" data-close="alert" aria-label="Close">
						</button>	
					</div>			  	
				</div>
			</div>
			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Bootstrap Date Picker *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<div class='input-group date' id='m_datepicker'>
						<input type='text' class="form-control m-input" readonly name="date" placeholder="Select date"/>
						<span class="input-group-addon">
						<i class="la la-calendar-check-o"></i>
						</span>
					</div>					
					<span class="m-form__help">Select a date</span>
				</div>
			</div>
			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Bootstrap Date Time Picker *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<div class='input-group date' id='m_datetimepicker'>
						<input type='text' class="form-control m-input" readonly name="datetime" placeholder="Select date & time"/>
						<span class="input-group-addon"><i class="la la-calendar-check-o glyphicon-th"></i></span>
					</div>				
					<span class="m-form__help">Select a date time</span>
				</div>
			</div>
			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Bootstrap Time Picker *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<div class='input-group date' >
						<input type='text' class="form-control m-input" id='m_timepicker' readonly placeholder="Select time" name="time" type="text"/>
						<span class="input-group-addon"><i class="la la-clock-o"></i></span>
					</div>				
					<span class="m-form__help">Select time</span>
				</div>
			</div>
			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Bootstrap Date Range Picker *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<div class='input-group' id='m_daterangepicker'>
						<input type='text' class="form-control m-input" readonly name="daterange" placeholder="Select date range"/>
						<span class="input-group-addon"><i class="la la-calendar-check-o"></i></span>
					</div>				
					<span class="m-form__help">Select a date range</span>
				</div>
			</div>

			<div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space"></div>

			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Bootstrap Switch *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<input data-switch="true" type="checkbox" name="switch" id="test" data-on-color="success" data-off-color="warning">	
					<span class="m-form__help"></span>	
				</div>
			</div>

			<div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space"></div>

			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Bootstrap Select *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<select class="form-control m-bootstrap-select" id="m_bootstrap_select" multiple name="select">
						<optgroup label="Picnic" data-max-options="2">
							<option>Mustard</option>
							<option>Ketchup</option>
							<option>Relish</option>
						</optgroup>
						<optgroup label="Camping" data-max-options="2">
							<option>Tent</option>
							<option>Flashlight</option>
							<option>Toilet Paper</option>
						</optgroup>
					</select>				
					<span class="m-form__help">Select at least 2 and maximum 4 options</span>
				</div>
			</div>

			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Select2 *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<select class="form-control m-select2" id="m_select2" name="select2">
						<option></option>
					  	<optgroup label="Alaskan/Hawaiian Time Zone">
					    	<option value="AK">Alaska</option>
					    	<option value="HI">Hawaii</option>
					  	</optgroup>
						 <optgroup label="Pacific Time Zone">
						    <option value="CA">California</option>
						    <option value="NV" >Nevada</option>
						    <option value="OR">Oregon</option>
						    <option value="WA">Washington</option>
						  </optgroup>
						  <optgroup label="Mountain Time Zone">
						    <option value="AZ">Arizona</option>
						    <option value="CO">Colorado</option>
						    <option value="ID">Idaho</option>
						    <option value="MT">Montana</option>
						    <option value="NE">Nebraska</option>
						    <option value="NM">New Mexico</option>
						    <option value="ND">North Dakota</option>
						    <option value="UT">Utah</option>
						    <option value="WY">Wyoming</option>
						  </optgroup>
						  <optgroup label="Central Time Zone">
						    <option value="AL">Alabama</option>
						    <option value="AR">Arkansas</option>
						    <option value="IL">Illinois</option>
						    <option value="IA">Iowa</option>
						    <option value="KS">Kansas</option>
						    <option value="KY">Kentucky</option>
						    <option value="LA">Louisiana</option>
						    <option value="MN">Minnesota</option>
						    <option value="MS">Mississippi</option>
						    <option value="MO">Missouri</option>
						    <option value="OK">Oklahoma</option>
						    <option value="SD">South Dakota</option>
						    <option value="TX">Texas</option>
						    <option value="TN">Tennessee</option>
						    <option value="WI">Wisconsin</option>
						  </optgroup>
						  <optgroup label="Eastern Time Zone">
						    <option value="CT">Connecticut</option>
						    <option value="DE">Delaware</option>
						    <option value="FL">Florida</option>
						    <option value="GA">Georgia</option>
						    <option value="IN">Indiana</option>
						    <option value="ME">Maine</option>
						    <option value="MD">Maryland</option>
						    <option value="MA">Massachusetts</option>
						    <option value="MI">Michigan</option>
						    <option value="NH">New Hampshire</option>
						    <option value="NJ">New Jersey</option>
						    <option value="NY">New York</option>
						    <option value="NC">North Carolina</option>
						    <option value="OH">Ohio</option>
						    <option value="PA">Pennsylvania</option>
						    <option value="RI">Rhode Island</option>
						    <option value="SC">South Carolina</option>
						    <option value="VT">Vermont</option>
						    <option value="VA">Virginia</option>
						    <option value="WV">West Virginia</option>
						  </optgroup>
					</select>				
					<span class="m-form__help">Select an option</span>
				</div>
			</div>

			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Typeahead *</label>
				<div class="col-lg-4 col-md-9 col-sm-12">
					<div class="m-typeahead">
						<input class="form-control m-input" id="m_typeahead" type="text" name="typeahead" placeholder="States of USA">
					</div>			
					<span class="m-form__help">Please select a state</span>
				</div>
			</div>

			<div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space"></div>

			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Markdown *</label>
				<div class="col-lg-9 col-md-9 col-sm-12">
					<textarea name="markdown" class="form-control" data-provide="markdown" rows="10"></textarea>			
					<span class="m-form__help">Enter some markdown content</span>
				</div>
			</div>
			<div class="form-group m-form__group row">
				<label class="col-form-label col-lg-3 col-sm-12">Summerote *</label>
				<div class="col-lg-9 col-md-9 col-sm-12">
					<div class="summernote" id="m_summernote" name="summernote"></div>		
					<span class="m-form__help">Enter some long content</span>
				</div>
			</div>
		</div>
		<div class="m-portlet__foot m-portlet__foot--fit">
			<div class="m-form__actions m-form__actions">
				<div class="row">
					<div class="col-lg-9 ml-lg-auto">
						<button type="submit" class="btn btn-success">Validate</button>
						<button type="reset" class="btn btn-secondary">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</form>
	<!--end::Form-->
</div>
<!--end::Portlet-->