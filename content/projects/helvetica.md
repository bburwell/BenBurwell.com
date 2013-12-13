Title: Helvetica for Safari and Chrome
Description: Those who believe the web should be made more beautiful will appreciate this extension for Safari and Google Chrome that makes all text display in Helvetica Neue (with regular old Helvetica as a backup).
Date: 13 December 2013

Those who believe the web should be made more beautiful will appreciate this extension for Safari and Google Chrome that makes all text display in Helvetica Neue (with regular old Helvetica as a backup).

<div class="safari_install_link">
	<h2>Installing Helvetica in Safari</h3>
	<ul>
		<li><a href="//stat.benburwell.com/updates/safari/helvetica.safariextz">Download Helvetica</a> to your computer.</li>
		<li>Click on the Downloads icon in the toolbar.</li>
		<li>Double-click on <code>helvetica.safariextz</code> to install.</li>
	</ul>
</div>

<div class="chrome_install_link">
	<h2>Installing Helvetica in Google Chrome</h3>
	<ul>
		<li><a href="//stat.benburwell.com/updates/chrome/helvetica.crx">Download Helvetica</a> to your computer.</li>
		<li>Click the <img style="vertical-align:middle;" src="/images/icons/settings-icon.png" alt="triple bar" /> icon on the Chrome toolbar</li>
		<li>Select Tools &gt; Extensions.</li>
		<li>Locate the extension file on your computer and drag the file onto the Extensions page.</li>
		<li>Review the list of permissions in the dialog that appears. If you would like to proceed, click Install.</li>
	</ul>
</div>

<script type="text/javascript">
	if (/chrome/.test(navigator.userAgent.toLowerCase())) {
		$('.safari_install_link').remove();
	} else if (/safari/.test(navigator.userAgent.toLowerCase())) {
		$('.chrome_install_link').remove();
	}
</script>

It’s not perfect; there will be some text that is not Helvetica since this is simply the application of a stylesheet. If a site is using significant amounts of JavaScript, some text may not be transformed. This will be corrected in later versions.

For the most part, fonts will be replaced on sites that don’t have very specific typography. In general, you’ll find that sites that have put care into their typeface choices will have those choices preserved.
