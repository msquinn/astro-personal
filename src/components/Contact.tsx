import React from 'react';
import {GitHubLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons';

const Contact = () => {
  return (
    <div className='flex items-center space-x-4'>
        <a href="https://github.com/msquinn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubLogoIcon className='text-muted-foreground hover:text-foreground hover:scale-150 transition-transform h-4 w-4'/>
        </a>
        <a href="https://www.linkedin.com/in/matthew-quinn-57b54511a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInLogoIcon className='text-muted-foreground hover:text-foreground hover:scale-150 transition-transform h-4 w-4'/>
        </a>
    </div>
  )
}

export default Contact