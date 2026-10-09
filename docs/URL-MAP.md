# URL continuity

The useful existing paths are retained. When the final website replaces the original at the same domain, these pages require no path redirects.

| Existing path | New path | Treatment |
|---|---|---|
| `/index.html` | `/index.html` | Retained; `/` also serves the same home page |
| `/about.html` | `/about.html` | Retained, with verified practice/location information |
| `/practice-areas.html` | `/practice-areas.html` | Retained as the full service index |
| `/willsandprobate.html` | `/willsandprobate.html` | Retained |
| `/conveyancing.html` | `/conveyancing.html` | Retained |
| `/familylaw.html` | `/familylaw.html` | Retained; obsolete thresholds omitted |
| `/personalinjuries.html` | `/personalinjuries.html` | Retained |
| `/employment.html` | `/employment.html` | Retained; obsolete tribunal detail omitted |
| `/debtrecovery.html` | `/debtrecovery.html` | Retained; obsolete proposed-legislation wording omitted |
| `/tenantlaw.html` | `/tenantlaw.html` | Retained; old tribunal naming omitted |
| `/contact.html` | `/contact.html` | Retained with direct contact actions and draft form |
| `/recruitment.html` | `/recruitment.html` | Retained with a qualified statement about the existing listing |
| None found | `/privacy.html` | New concept-specific notice; requires replacement with approved business policies for launch |

The GitHub Pages preview adds `/obiren-solicitors-preview/` before these paths. It does not redirect the official business domain. No booking, payment, social profile, download or separate legal-policy destinations were found in the inspected navigation and pages.

If a future platform changes the `.html` paths, configure permanent **301 redirects** from every retained path above to the corresponding final page. GitHub Pages cannot configure server-side 301 rules; use the final platform’s redirect mechanism. Do not redirect unrelated legacy paths to the home page merely to hide missing content.
