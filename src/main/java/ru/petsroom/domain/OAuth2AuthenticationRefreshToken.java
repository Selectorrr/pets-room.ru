package ru.petsroom.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.oauth2.common.OAuth2RefreshToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;

import java.util.UUID;

@Document(collection = "OAUTH_AUTHENTICATION_REFRESH_TOKEN")
public class OAuth2AuthenticationRefreshToken {

    @Id
    private String id;

    private String tokenId;

    private OAuth2RefreshToken oAuth2RefreshToken;

    private OAuth2Authentication authentication;

    public OAuth2AuthenticationRefreshToken(OAuth2RefreshToken oAuth2RefreshToken, OAuth2Authentication authentication) {
        this.id = UUID.randomUUID().toString();
        this.oAuth2RefreshToken = oAuth2RefreshToken;
        this.authentication = authentication;
        this.tokenId = oAuth2RefreshToken.getValue();
    }

    public String getTokenId() {
        return tokenId;
    }

    public OAuth2RefreshToken getoAuth2RefreshToken() {
        return oAuth2RefreshToken;
    }

    public OAuth2Authentication getAuthentication() {
        return authentication;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OAuth2AuthenticationRefreshToken that = (OAuth2AuthenticationRefreshToken) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
