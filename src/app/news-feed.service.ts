import { Injectable }           from '@angular/core';

import { JobFeedComponent }   from './job-feed.component';
import { ProfileFeedComponent } from './profile-feed.component';
import { NewsFeedItem }               from './news-feed-item';

@Injectable()
export class NewsFeedService {
  getAds() {
    return [
      new NewsFeedItem(ProfileFeedComponent, {name: 'John Doe', bio: '7+ exprience in PHP and Angular. Look for job. Hire now'}),

      new NewsFeedItem(JobFeedComponent,   {headline: 'Openings in PHP',
                                        body: 'Apply today'}),

      new NewsFeedItem(ProfileFeedComponent, {name: 'Alex', bio: 'Angular Freelancer'}),

      new NewsFeedItem(JobFeedComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

    ];
  }
}
