$(function(){
	$('#pass1').on('keyup', function () {
		if (($('#pass1').val() == 'month')||($('#pass1').val() == 'Month')||($('#pass1').val() == 'MONTH')){
			str=`<div class="list-choice-title">Month</div>
			<div class="list-choice-objects"><label>
				<input type="radio" name="month"/><span>January</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>February</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>March</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>April</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>May</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>June</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>July</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>September</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>October</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>November</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>December</span>
			  </label>
			</div>`
				 $('#dropdown').html(str);
		}
		else if (($('#pass1').val() == 'week')||($('#pass1').val() == 'Week')||($('#pass1').val() == 'WEEK')){
			str=`<div class="list-choice-title">Week</div>
			<div class="list-choice-objects">
			  <label>
				<input type="radio" name="month"/><span>Sunday</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>Monday</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>Tuesday</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>Wednesday</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>Thrusday</span>
			  </label>
			  <label>
				<input type="radio" name="month"/><span>Friday</span>
			  </label>
			  <label>
			  <input type="radio" name="month"/><span>Saturday</span>
			</label>
			</div>`
				$('#dropdown').html(str);
			}
	});
});