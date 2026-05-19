/** AdSense site tag — must be a literal <script> in <head> for Google verification crawlers. */
export function GoogleAdSense() {
  return (
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5436484523285274"
      crossOrigin="anonymous"
    />
  );
}
