export default function(){
    return `
  <form action="https://formspree.io/rustiphyde@gmail.com" method="POST" >

<span>
<label for="name">Your Name</label>
<input
type="text"
id="name"
name="userName"
placeholder="Namey McNamerson" />
</span>
<br>
<br>

<span>
<label for="user-email">Your Email</label>
<input
  type="email"
  name="userEmail"
  id="user-email"
  placeholder="user@example.com"
/>
</span>
<br>
<br>

<label for="fone">Your Phone</label>
  <input
  type="tel"
  name="userFone"
  id="fone"
  placeholder="e.g.: (555)555-5555" />
</span>
<br>
<br>


<div class="flex flex--column">
<label for="msg">Your Message</label>
<textarea
name="msg"
id="msg"
cols="30"
rows="10"></textarea>
</div>


<div class="subornot">
<input
type="submit"
value="Send Message" />
<input
type="reset"
value="Clear Form" />
</div>


<div>
<label id="mess-inq">What is this message about?</label>

<input
type="radio"
name="subject"
value="professional"
checked />
<label>I'd like to hire you!</label>


<input
type="radio"
name="subject"
value="personal" />
<label>Personal message</label>


<input
type="radio"
name="subject"
value="other" />
<label>Something else</label>
</label>

</div>

<div><input
type="checkbox"
name="optin"
value="trusting"
checked /><label>Subscribe
me to your newsletter!</label>
</div>

<div><label for="marketing">How did you hear about me?</label>
<select name="marketing">
<optgroup label="Online">
<option value="social">Social Media (FB, Twitter, LinkedIn)</option>
<option value="github">Online Portfolio (GitHub)</option>
<option value="search">Search Engine</option>
<option value="email">Email</option>
</optgroup>
<optgroup label="In-Person">
<option value="networking">We met at a networking event</option>
<option value="referral">Personal referral</option>
<option value="random">We met somewhere else</option>
</optgroup>
<option value="other">Other</option>
</select>
</div>

<div>
<label for="date">What date are you submitting this form?</label>
<input type="date" name="todayIs" id="date">
</div>
<br>
<br>

</form>`;
}
