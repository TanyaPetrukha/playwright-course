import { test as base } from 'playwright-bdd';
import { createBdd } from "playwright-bdd";

export const test = base.extend({
  onlyRunTaggedTests: [async ({ $tags }, use, testInfo) => {
    const allowedTags = ['@footer', '@smoke',];
    
    const hasAllowedTag = $tags.some(tag => allowedTags.includes(tag));
    
    if (!hasAllowedTag) {
      testInfo.skip(); 
    }
    
    await use();
  }, { auto: true }],
});

export const { Given, When, Then } = createBdd(test);