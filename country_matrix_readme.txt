Country Matrix v1
=================
Purpose:
A tool-ready country matrix for the UK Knowledge Hub. Each country/entity has:
- English country name
- ISO alpha-2 and alpha-3 codes
- aliases for matching user input
- a prototype profile
- hidden labels for narrative generation

Profiles:
- Easier-English
- Easier-Europe
- Mixed-English
- Mixed-Familiar
- Harder-General
- Harder-Documentation

User-facing question:
"Where did you gain your main qualification?"

User-facing result label:
"Skill translation"
- Easier
- Mixed
- Harder

Recommended fallback note if no country is matched:
"We could not identify the country you entered. Please check the spelling in English and try again."

Recommended matching logic:
1. Normalize user input to lowercase ASCII.
2. Compare against match_keys.
3. If no exact match, try aliases.
4. If still no match, show the fallback note after the main results.

Important:
This is a prototype scoring framework, not a legal or academic recognition judgement.