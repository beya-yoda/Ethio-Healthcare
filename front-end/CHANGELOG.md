# Changelog

All notable changes to the Ethio HealthCare Interface project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and follows the format of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

This software is released under the [GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html), a copyleft license that ensures the software and its derivatives remain free and open source.

## [1.0.0] - 2025-05-19

### Added
- Initial release of the Ethio HealthCare Interface
- Patient data management system with create, read, update, and delete functionality
- Healthcare provider registration portal
- Secure authentication system with login/logout functionality
- Dashboard with analytics overview
- Responsive design for mobile and desktop devices

## [1.1.0] - 2025-05-19

### Changed
- Rebranded from "Bharat Seva" to "Ethio HealthCare" throughout the interface
- Updated color scheme to use mint green gradient for better visual appeal
- Improved navbar layout with increased padding and spacing
- Enhanced logo presentation in the sidebar

### Fixed
- Removed non-English placeholder text in patient data form fields
- Fixed alignment issues in the registration portal
- Corrected styling inconsistencies across different components
- Improved form validation feedback

### Added
- Added hover effects to navigation buttons for better user experience
- Enhanced mobile responsiveness for smaller screens
- Improved accessibility features

## Resolved Issues

### Issue #1: Non-English Placeholder Text in Patient Data Form
**Problem:** The father name and mother name fields in the Create Patient Data form contained placeholder text in a non-English language (Hindi), making it difficult for English-speaking users to understand what information was required.

**Resolution:** 
- Replaced the Hindi placeholder text "पिता श्री" with "Father Name" in the father name field
- Replaced the Hindi placeholder text "माता श्री" with "Mother Name" in the mother name field
- This change ensures all form fields have consistent English placeholders

### Issue #2: Navbar Spacing and Layout Problems
**Problem:** The upper space in the navbar that holds the Ethio HealthCare logo, notification, and account buttons had insufficient padding and poor alignment.

**Resolution:**
- Increased the height of the navbar from 6vh to 8vh
- Added 15px horizontal padding to the navbar container
- Improved the left sidebar spacing with better padding (0 20px)
- Added vertical alignment with flex display and align-items: center
- Increased width of notification and account buttons for better visibility
- Enhanced button styling with improved padding, border-radius, and hover effects

### Issue #3: Ethio HealthCare Logo Presentation
**Problem:** The Ethio HealthCare logo text in the navbar lacked visual appeal and proper spacing.

**Resolution:**
- Applied an attractive gradient color from mint green (#4de6af) to forest green (#3a6351)
- Implemented proper spacing between the sidebar icon and the Ethio HealthCare text
- Enhanced typography with improved font size, weight, and letter spacing
- Added subtle text shadow for depth and dimension
- Ensured proper spacing between "Ethio" and "HealthCare" words

### Issue #4: Registration Portal Background Brightness
**Problem:** The black background in the registration portal was too bright and visually harsh.

**Resolution:**
- Reduced the brightness of the black background by changing to a lighter shade
- This creates a more visually appealing and less straining interface for users

### Issue #5: Inconsistent Branding
**Problem:** The application contained references to "Bharat Seva" instead of "Ethio HealthCare" throughout the interface.

**Resolution:**
- Systematically replaced all instances of "Bharat Seva" with "Ethio HealthCare"
- Updated all relevant component text, alt tags, and welcome messages
- Ensured consistent branding across the entire application

## Copyright and License Information

### Copyright Notice
Copyright (C) 2025 Ethio HealthCare Interface Contributors

### License Notice
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

### Third-Party Components
This project incorporates the following third-party open source components:

- React (MIT License)
- React Router (MIT License)
- Font Awesome (Font Awesome Free License)

Each component is used in accordance with its respective license terms.

## Contributing
Contributions to this project are welcome and should be submitted under the same license terms as the project (GPL-3.0). By contributing to this project, you agree that your contributions will be licensed under the project's license.

For detailed information on how to contribute, please see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Contact
For questions regarding licensing or copyright, please contact the project maintainers at [contact@ethiohealthcare.org](mailto:contact@ethiohealthcare.org).
