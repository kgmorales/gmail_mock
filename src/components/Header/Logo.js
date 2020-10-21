import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
	height: auto;
	display: block;
	position: relative;
	overflow: hidden;
	margin: 0;
	padding-right: 2rem;
`;
const Logo = () => {
	return (
		<Link to='/'>
			<LogoContainer>
				<svg xmlns='http://www.w3.org/2000/svg' width='120' height='60'>
					<g transform='matrix(.283013 0 0 .283013 9.496014 18.862554)'>
						<path
							d='M104.162 81.37H7.748C3.982 81.37.83 78.4.83 74.538V7.835C.83 4.07 3.895.917 7.748.917h96.414c3.766 0 6.918 3.065 6.918 6.918V74.45c-.088 3.94-3.153 6.918-6.918 6.918z'
							fill='#f2f2f2'
						/>
						<path
							d='M14.578 81.37l41.245-30.187.263-1.75-42.47-30.562-.088 61z'
							opacity='.1'
							fill='#221f1f'
						/>
						<g fill='#d44c3d'>
							<path d='M7.748 81.37C3.895 81.37.83 78.4.83 74.538v-66.8c0-3.853 3.065-4.554 6.918-4.554s6.918.788 6.918 4.554v73.62z' />
							<path d='M7.748 4.245c4.904 0 5.867 1.5 5.867 3.503v72.658H7.748a5.87 5.87 0 0 1-5.867-5.867V7.748c-.088-2.102.963-3.503 5.867-3.503zm0-.963C3.895 3.282.83 4.07.83 7.748V74.45c0 3.94 3.065 6.918 6.918 6.918h6.918V7.748c-.088-3.765-3.065-4.466-6.918-4.466zm96.414.963c4.466 0 5.867.876 5.867 3.328v67.053a5.87 5.87 0 0 1-5.867 5.867h-5.867V7.573c-.088-2.54 1.4-3.328 5.867-3.328zm0-.963c-3.853 0-6.918.525-6.918 4.3v73.884h6.918c3.853 0 6.918-3.065 6.918-6.918V7.485c-.088-3.766-3.153-4.203-6.918-4.203z' />
							<path d='M104.162 81.37h-6.918V7.573c0-3.853 3.065-4.3 6.918-4.3s6.918.525 6.918 4.3v67.053c-.088 3.766-3.153 6.743-6.918 6.743z' />
						</g>
						<path
							d='M74.65 81.37L1.443 10.637l3.853 1.576L56.26 48.905 111.08 8.7v65.915c0 3.766-3.065 6.83-6.918 6.83z'
							opacity='.08'
							fill='#221f1f'
						/>
						<g fill='#d44c3d'>
							<path d='M55.823 51.27L3.807 13.527C.742 11.25-.134 6.872 2.143 3.807S8.798.042 11.95 2.318L55.9 34.28l44.223-32.4C103.2-.396 107.5.304 109.766 3.457c2.277 3.065 1.576 7.356-1.576 9.633z' />
							<path d='M104.162 1.618c1.84 0 3.678.876 4.816 2.452 1.84 2.627 1.314 6.305-1.314 8.232l-51.84 37.743L4.42 12.74c-2.627-1.927-3.328-5.692-1.5-8.232 1.05-1.576 2.9-2.54 4.904-2.54 1.314 0 2.54.35 3.503 1.138L55.2 34.982l.613.35.613-.35 44.135-32.4c1.138-.613 2.277-.963 3.6-.963zm0-1.05c-1.4 0-2.9.35-4.028 1.314L55.9 34.28 11.863 2.23C10.725 1.355 9.236.917 7.748.917c-2.2.088-4.378 1.05-5.692 2.9-2.2 3.065-1.314 7.356 1.75 9.633l52.016 37.83L108.2 13.1a6.96 6.96 0 0 0 1.576-9.633c-1.4-1.84-3.503-2.9-5.604-2.9z' />
						</g>
						<path
							d='M208.2 43.398c0 8.27-2.454 14.86-7.36 19.768-5.515 5.846-12.766 8.768-21.753 8.768-8.602 0-15.88-2.978-21.835-8.933s-8.933-13.288-8.933-22 2.978-16.045 8.933-22 13.233-8.933 21.835-8.933c4.355 0 8.464.772 12.324 2.315s7.03 3.722 9.5 6.534l-5.458 5.46c-1.82-2.205-4.177-3.93-7.072-5.17s-5.996-1.86-9.305-1.86c-6.45 0-11.9 2.232-16.376 6.7-4.412 4.52-6.617 10.173-6.617 16.955s2.205 12.436 6.617 16.956c4.466 4.466 9.925 6.7 16.376 6.7 5.9 0 10.807-1.654 14.723-4.963s6.175-7.857 6.782-13.646h-21.505v-7.113h28.7a25.44 25.44 0 0 1 .414 4.466zM223.74 70.6h-7.6V30.083h7.278v5.624h.33c1.158-1.985 2.936-3.64 5.335-4.963s4.782-1.984 7.154-1.984c2.978 0 5.596.7 7.857 2.067a12.2 12.2 0 0 1 4.962 5.707c3.363-5.183 8.023-7.774 13.98-7.774 4.686 0 8.298 1.434 10.835 4.3s3.805 6.947 3.805 12.24v25.3h-7.6V46.46c0-3.805-.7-6.547-2.068-8.23s-3.694-2.522-6.947-2.522c-2.923 0-5.376 1.24-7.36 3.722s-2.978 5.404-2.978 8.768V70.6h-7.6V46.46c0-3.805-.7-6.547-2.067-8.23s-3.694-2.522-6.947-2.522c-2.924 0-5.377 1.24-7.36 3.722s-2.978 5.404-2.978 8.768V70.6zm77.828-41.84c5.624 0 10.063 1.503 13.316 4.507s4.88 7.128 4.88 12.365V70.6h-7.278v-5.624h-.33c-3.143 4.632-7.334 6.947-12.572 6.947-4.466 0-8.202-1.323-11.207-3.97s-4.508-5.955-4.508-9.926c0-4.2 1.585-7.526 4.756-10.008s7.403-3.722 12.696-3.722c4.52 0 8.242.827 11.166 2.48V45.04c0-2.646-1.048-4.893-3.144-6.74s-4.55-2.77-7.36-2.77c-4.247 0-7.6 1.793-10.1 5.377l-6.7-4.22c3.693-5.293 9.152-7.94 16.376-7.94zm-9.843 29.444c0 1.984.84 3.64 2.523 4.962s3.65 1.985 5.913 1.985c3.197 0 6.05-1.185 8.56-3.557s3.764-5.155 3.764-8.354c-2.372-1.874-5.68-2.812-9.926-2.812-3.088 0-5.665.744-7.733 2.232s-3.102 3.337-3.102 5.542zm46.485-42.1a5.18 5.18 0 0 1-1.572 3.805c-1.048 1.048-2.315 1.57-3.805 1.57s-2.758-.523-3.805-1.57-1.57-2.315-1.57-3.805a5.18 5.18 0 0 1 1.571-3.805 5.18 5.18 0 0 1 3.805-1.571 5.18 5.18 0 0 1 3.805 1.571c1.047 1.05 1.572 2.316 1.572 3.805zm-1.572 13.98V70.6h-7.6V30.083zM354.17 11.4v59.2h-7.6V11.4z'
							fill='#fff'
						/>
					</g>
				</svg>
			</LogoContainer>
		</Link>
	);
};

export default Logo;
