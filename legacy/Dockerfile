FROM php:8.2-apache
RUN apt-get update
RUN apt-get install -y \
    curl \
    zip \
    unzip \
    git \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && rm -rf /var/lib/apt/lists/*

# Configure GD with JPEG and FreeType support
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install PHP extensions
RUN docker-php-ext-install gd zip

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Configure Apache to allow .htaccess overrides
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Install Composer
RUN curl -sLS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

# Add PHP configuration for sessions and error reporting
RUN echo "output_buffering = 4096" >> /usr/local/etc/php/conf.d/grav.ini && \
    echo "session.auto_start = 0" >> /usr/local/etc/php/conf.d/grav.ini && \
    echo "session.cache_limiter = nocache" >> /usr/local/etc/php/conf.d/grav.ini && \
    echo "error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT" >> /usr/local/etc/php/conf.d/grav.ini && \
    echo "display_errors = Off" >> /usr/local/etc/php/conf.d/grav.ini